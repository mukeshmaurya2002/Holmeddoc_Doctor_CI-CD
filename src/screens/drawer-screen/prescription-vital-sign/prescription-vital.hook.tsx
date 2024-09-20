import React = require('react');
import RNFS from 'react-native-fs';
import RNFetchBlob from 'react-native-blob-util';
import DocumentPicker, { types } from 'react-native-document-picker';
import { navigationHook } from '../../../hooks/navigation.hook';
interface DocumentProps {
    fileCopyUri: string | null;
    name: string;
    size: number;
    type: string;
    uri: string;
}


const usePrescriptionHook = () => {
    const [progressTracks, setProgressTracks] = React.useState<{ [key: string]: string }>({});
    const { navigateTo } = navigationHook();
    const [note, setNote] = React.useState<string>();
    const [picDocuments, setPicDocuments] = React.useState<DocumentProps[]>([]);
    const [openVitals, setOPenVitals] = React.useState<boolean>(false);

    const closeVitals = () => setOPenVitals(false);
    const openVitalsModal = () => setOPenVitals(true);
    const onNoteChange = (note: string) => setNote(note);
    const deleteDocument = (uri: string) => setPicDocuments(prevDocuments => prevDocuments.filter(doc => doc.uri !== uri));

    const selectDocument = async () => {
        try {
            const response: any = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                type: [types.pdf, types.images],
                allowMultiSelection: true,
            });
            // const validDocuments = response.filter((doc) => doc.size < 5000000);
            setPicDocuments([...picDocuments, ...response]);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('User canceled the picker');
            } else {
                console.warn(err);
            }
        }
    };



    async function downloadPdf({ id }: { id: string }) {
        try {
            const { config, fs } = RNFetchBlob;
            const downloads = fs.dirs.LegacyDownloadDir;
            const filePath = `${downloads}/TestPDFfile.pdf`;

            const exists = await RNFS.exists(filePath);
            if (exists) {
                await RNFS.unlink(filePath);
            }

            const response = await fetch('https://www.clickdimensions.com/links/TestPDFfile.pdf');

            const download = RNFS.downloadFile({
                fromUrl: 'https://www.clickdimensions.com/links/TestPDFfile.pdf',
                toFile: filePath,
                background: true,
                discretionary: true,
                progress: (res) => {
                    const progress = (res.bytesWritten / res.contentLength) * 100;
                    const progressTrack = progress.toFixed(2);
                    setProgressTracks((prev) => {
                        return {
                            ...prev,
                            [id]: progressTrack
                        }
                    });
                },
            });

            const result = await download.promise;
            if (result.statusCode === 200) {
                console.log('PDF document downloaded successfully', filePath);
            } else {
                console.warn('Failed to download file', result.statusCode);
            }

            await config({
                fileCache: true,
                addAndroidDownloads: {
                    useDownloadManager: true,
                    notification: true,
                    path: filePath,
                    description: 'Downloading PDF document',
                    mediaScannable: true,
                },
            }).fetch('GET', 'https://www.clickdimensions.com/links/TestPDFfile.pdf');

        } catch (err) {
            console.warn(err);
        }
    }


    return {
        onNoteChange, note, selectDocument,
        picDocuments, deleteDocument, navigateTo,
        closeVitals, openVitals, openVitalsModal
    }
}

export { usePrescriptionHook }

export type { DocumentProps }