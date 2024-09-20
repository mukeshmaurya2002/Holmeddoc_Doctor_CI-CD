import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { moderateScale } from 'react-native-size-matters'
import { helpers } from '../../../utility/helpers'
import { Colors } from '../../../constants'
import { commonStyles, fontStyles } from '../../../styles'
import { BackGroundLine, DeleteButtonSvg, DropwDownSvgDown, EditButtonSvg, UploadDocSvg } from '../../../../assets/svg'
import { Dropdown } from 'react-native-element-dropdown'
import { BorderBottom, TakeSpace } from '../../../components'
import DocumentPicker, { types } from 'react-native-document-picker';
import UploadDocuments from '../../../components/upload-document/upload-document.screen'
import DeletePopUpModal from '../../../routes/components/delete-popup-modal'
type itemFields = {

}
const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
];
interface InsuranceCardProps {
    item: itemFields,
    index?: number
    isLastItem?: boolean
}
const InsuranceCard = (props: InsuranceCardProps) => {
    const { item, index, isLastItem } = props
    const [selectedPlanAndCarrier, setSelectPlanAndCarrier] = React.useState('')
    const [filePdfResponse, setFilePdfResponse] = React.useState(null)
    const handleDocumentSelection = useCallback(async () => {
        try {
            const response: any = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                type: [types.pdf],
                allowMultiSelection: false,

            });
            //check fileze size not grator than 5mb
            if (response[0].size >= 5000000) {
                //showToast({ message: t('Common.fileSize5Mb'), type: 'warning' })
                return
            }
            //console.log('response', response)
            setFilePdfResponse(response[0]);
        } catch (err) {
            console.warn(err);
        }
    }, []);
    const [showDeletePopup, setShowDeletePopup] = React.useState(false);
    const handleDelete = (uri: string) => {
        setShowDeletePopup(false)
        setFilePdfResponse(null)

    }
    const handleClose = () => {
        setShowDeletePopup(false)
    }
    return (
        <>
            <View style={{ padding: moderateScale(10) }}>
                <Text style={fontStyles.notoSansMedium16}>
                    Medical
                </Text>
                <TakeSpace space={moderateScale(4)} />
                <Text style={styles.fieldTxt}>
                    Plan & Carrier  <Text style={[fontStyles.notoSansMedium14, { color: Colors.errorColor }]}>*</Text>
                </Text>
                <Dropdown
                    style={[styles.dropdownTest]}
                    placeholderStyle={[fontStyles.notoSansRegular12, { color: Colors.offBlack50, marginLeft: moderateScale(6) }]}
                    selectedTextStyle={[fontStyles.notoSansRegular12, { color: Colors.offBlack, opacity: 0.75 }]}
                    activeColor={Colors.offBlack5}
                    itemTextStyle={fontStyles.notoSansRegular12}
                    data={data}
                    search={false}
                    renderRightIcon={DropwDownSvgDown}
                    labelField="label"
                    valueField="label"
                    placeholder={"Select a plan & carrier"}
                    value={selectedPlanAndCarrier}
                    onChange={(item: any) => {
                        console.log(item.label);
                        setSelectPlanAndCarrier(item.label);
                    }}
                    showsVerticalScrollIndicator={false}
                    flatListProps={{ nestedScrollEnabled: false }}
                    iconStyle={{ tintColor: Colors.secondaryColor }}
                />

                {/* <TakeSpace space={moderateScale(6)} /> */}

                <UploadDocuments
                    label={"Upload document"}
                    subText={"Browse in device"}
                    mandatory={true}
                    labelStyle={fontStyles.notoSansMedium12}

                    onPress={handleDocumentSelection}
                    formatText={""}
                    icon={UploadDocSvg}

                // rootStyle={{ paddingTop: moderateScale(10), }}
                />
                <TakeSpace space={moderateScale(6)} />
                <BorderBottom />
                <TakeSpace space={moderateScale(6)} />
                <View style={commonStyles.RowJSBAC}>
                    <Pressable onPress={() => setShowDeletePopup(true)}>
                        <DeleteButtonSvg />
                    </Pressable>
                    <Pressable>
                        <EditButtonSvg />
                    </Pressable>
                </View>
            </View>

            {
                showDeletePopup &&
                <DeletePopUpModal
                    handleDelete={() => { }}
                    handleClose={handleClose}
                />
            }

            {isLastItem && <BackGroundLine />}
            {!isLastItem && <TakeSpace space={moderateScale(40)} />}
        </>
    )
}

export default InsuranceCard

const styles = StyleSheet.create({
    dropdownTest: {
        height: helpers.isIos ? moderateScale(46) : moderateScale(49),
        //width: SCREEN_WIDTH * 0.40,
        backgroundColor: Colors.offBlack5,
        paddingHorizontal: moderateScale(8),
        borderRadius: moderateScale(6), borderWidth: moderateScale(0),
        borderColor: Colors.offBlack5
    },
    fieldTxt: {
        ...fontStyles.notoSansMedium12,
        paddingVertical: moderateScale(6),
        //paddingLeft: moderateScale(4),
    },
})