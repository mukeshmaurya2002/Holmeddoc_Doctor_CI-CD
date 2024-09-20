import React from 'react'
import FastImage from 'react-native-fast-image'
import { Colors } from '../../../../../constants'
import { helpers } from '../../../../../utility/helpers'
import { moderateScale } from 'react-native-size-matters'
import { SafeAreaView } from 'react-native-safe-area-context'
import { DocumentProps } from '../../prescription-vital.hook'
import { BorderBottom, CustomModal, Header } from '../../../../../components'
import { commonStyles, fontStyles } from '../../../../../styles'
import { usePrescriptionHistory } from './prescription-history.hook'
import { PdfSvg, PrescDeleteSvg } from '../../../../../../assets/svg'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import EmptyScreen from '../../../../../components/empty-screen/empty-screen'
import DeletePopUpModal from '../../../../../routes/components/delete-popup-modal'


/*
This screen is used to check the previously uploaded documents 
*/
const PrescriptionHistory = () => {
    const { Documents, deleteDocument } = usePrescriptionHistory();
    const [showDeletePopup, setShowDeletePopup] = React.useState(false);
    const handleDelete = (uri: string) => {
        deleteDocument(uri)
        setShowDeletePopup(false)
    }
    const handleClose = () => {
        setShowDeletePopup(false)
    }
    const renderPrescriptionHistory = (({ item, index }: { item: DocumentProps, index: number }) => {
        return (
            <>
                <View style={[commonStyles.RowJSBAC, { columnGap: moderateScale(10), padding: moderateScale(10), position: "relative" }]}>
                    <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(10), width: '90%' }]}>
                        <View style={{ width: '15%' }}>
                            {/* need to checkt he date to only current date means today date picked document can be deleted */}
                            {item.type == 'application/pdf' ?
                                <PdfSvg />
                                :
                                item.type == 'image/jpeg' ?
                                    <FastImage
                                        source={{ uri: item?.uri }}
                                        style={styles.documentImg}
                                        resizeMode={FastImage.resizeMode.cover}
                                    />
                                    : null
                            }
                        </View>
                        <View style={{ width: '85%', rowGap: moderateScale(4) }}>
                            <Text style={[fontStyles.notoSansMedium12, { flexShrink: 1 }]} numberOfLines={2}>{item.name}</Text>
                            <Text style={[fontStyles.notoSansRegular12, { opacity: 0.75 }]}>5th July 2024</Text>

                        </View>
                    </View>
                    <Pressable style={{ width: '10%', alignItems: 'flex-end' }} onPress={() => {
                        console.log('pressed')
                        setShowDeletePopup(true)
                    }}>
                        <PrescDeleteSvg />
                    </Pressable>


                </View>
                {
                    showDeletePopup &&

                    <DeletePopUpModal
                        handleDelete={() => handleDelete(item.uri)}
                        handleClose={handleClose}
                    />

                }
            </>
        )
    })

    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header label='Prescription' headText='' />
            {
                Documents.length === 0 ? <EmptyScreen /> : <View style={{ backgroundColor: Colors.offWhite, flex: 1 }}>
                    <FlatList
                        data={Documents}
                        renderItem={renderPrescriptionHistory}
                        ItemSeparatorComponent={() => <BorderBottom />}
                        contentContainerStyle={{ padding: moderateScale(16) }}
                    />
                </View>
            }

        </>
    )
}

export default PrescriptionHistory

const styles = StyleSheet.create({
    documentImg: { width: moderateScale(36), height: moderateScale(36), borderRadius: moderateScale(4), },

})