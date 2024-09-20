import React from "react";
import ImagePicker from "react-native-image-crop-picker";
const usePersonalInfo = () => {
    const [openImgPicker, setOpenImgPicker,] = React.useState(false);
    const [imagePicked, setImagePicked] = React.useState<{ uri: null | string | any; type: string; name: string }>({ uri: '', type: 'image/jpeg', name: '', });
    const [open, setOpen] = React.useState(false);
    const [selectedInsurance, setSelectedInsurance] = React.useState(null);
    const [selectCity, setSelectCity] = React.useState(null);
    const [selectedState, setSelectedState] = React.useState(null);


    const openGallery = async () => {
        try {
            const response = await ImagePicker.openPicker({
                cropping: true,
                mediaType: 'photo',
                freeStyleCropEnabled: true,
                // includeBase64: true,
            });
            //   if (response.size > 5000000) {
            //     showToast({ message: t('Common.fileSize5Mb'), type: 'warning' })
            //     return
            //   }
            const newImageUri = 'file:///' + response.path.split('file:/').join('');
            setImagePicked({
                uri: response.path,
                name: newImageUri.split('/').pop()!,
                type: response.mime,
            });
            const newResponse = {
                name: newImageUri.split('/').pop()!,
                size: response.size,
                type: response.mime,
                uri: newImageUri
            }
            //api call--->r
            // updateProfileWithImage(`data:image/png;base64,${response.data}`)
            //   updateProfileWithImage(newResponse)
            setOpenImgPicker(false);
        } catch (error: any) {
            console.log('error in openGallery', error);
        }
    };
    const openCamera = async () => {
        try {
            const response = await ImagePicker.openCamera({
                cropping: true,
                mediaType: 'photo',
                freeStyleCropEnabled: true,
                //includeBase64: true,
            });

            console.log("cameraaaaa clicked")
            const newImageUri = 'file:///' + response.path.split('file:/').join('');
            //   if (response.size > 5000000) {
            //     showToast({ message: t('Common.fileSize5Mb'), type: 'warning' })
            //     return
            //   }
            // const compressedImage = await Image.compress(newImageUri, {
            //   quality: 0.4,
            //   maxWidth: 1000,
            // });
            // //check size of image
            // console.log('compressedImage', compressedImage)
            setImagePicked({
                uri: response.path,
                name: newImageUri.split('/').pop()!,
                type: response.mime,
            });
            const newResponse = {
                name: newImageUri.split('/').pop()!,
                size: response.size,
                type: response.mime,
                uri: newImageUri
            }
            // updateProfileWithImage(`data:image/png;base64,${response.data}`)
            // updateProfileWithImage(newResponse)
            setOpenImgPicker(false);

        } catch (error: any) {
            console.log(error);
        }
    };

    return {
        openImgPicker,
        setOpenImgPicker,
        imagePicked,
        openGallery,
        openCamera,
        open, setOpen,
        selectedInsurance, setSelectedInsurance,
        selectCity, setSelectCity,
        selectedState, setSelectedState
    }

}
export { usePersonalInfo }