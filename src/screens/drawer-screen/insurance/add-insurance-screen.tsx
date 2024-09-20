import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../../constants'
import { helpers } from '../../../utility/helpers'
import { CustomButton, ErrorHelper, Header, InputFieldBox, TakeSpace } from '../../../components'
import { BackArrowSvg, DropwDownSvgDown, UploadDocSvg } from '../../../../assets/svg'
import { Formik } from 'formik'
import { moderateScale } from 'react-native-size-matters'
import { validate } from '../../../utility/validation'
import { commonStyles, fontStyles } from '../../../styles'
import { Dropdown } from 'react-native-element-dropdown'
import DocumentPicker, { types } from 'react-native-document-picker';
import UploadDocuments from '../../../components/upload-document/upload-document.screen'
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
const AddInsuranceScreen = () => {
    const initialValues = {
        insuranceName: '',
        policyNumber: '',
        planAndCarrier: '',
        documentPdf: ''
    }
    const handleInsuranceSubmit = (values: any) => {
        console.log(values)
    }
    const [selectedPlanAndCarrier, setSelectPlanAndCarrier] = React.useState('')
    const insuranceValidate = validate.AddInsuranceValidation()
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

    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='Add Insurance'
                headText=''
                icon={BackArrowSvg}
            />
            <Formik initialValues={initialValues} validationSchema={insuranceValidate} onSubmit={handleInsuranceSubmit} >
                {({ values, handleChange, handleBlur, handleSubmit, errors, touched, isValid, setFieldError, setFieldValue, setFieldTouched }) => (
                    <>
                        <ScrollView showsVerticalScrollIndicator={false} style={[{ flex: 1, padding: moderateScale(16), backgroundColor: Colors.offWhite }]} >
                            <InputFieldBox
                                label={"Insurance Name"}
                                placeHolder='Enter a name for this insurance'
                                keyBoardType="default"

                                mandatory={true}
                                value={values.insuranceName}
                                rootStyle={{ paddingTop: moderateScale(10), }}
                                labelStyle={fontStyles.notoSansMedium12}
                                onChangeText={(text) => {
                                    setFieldTouched("insuranceName", true);
                                    handleChange("insuranceName")(text);
                                }}
                                inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack85)}

                                placeholderTextColor={Colors.offBlack75}

                                onBlur={handleBlur("insuranceName")}
                            />
                            {errors.insuranceName && touched.insuranceName && (
                                <ErrorHelper errorMsg={errors.insuranceName} />
                            )}
                            <InputFieldBox
                                label={"Policy Number"}
                                placeHolder='Enter policy number'
                                keyBoardType="default"
                                mandatory={true}
                                value={values.policyNumber}
                                rootStyle={{ paddingTop: moderateScale(10), }}
                                labelStyle={fontStyles.notoSansMedium12}
                                onChangeText={(text) => {
                                    setFieldTouched("policyNumber", true);
                                    handleChange("policyNumber")(text);
                                }}
                                inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack85)}

                                placeholderTextColor={Colors.offBlack75}

                                onBlur={handleBlur("policyNumber")}
                            />
                            {errors.policyNumber && touched.policyNumber && (
                                <ErrorHelper errorMsg={errors.policyNumber} />
                            )}
                            <TakeSpace space={moderateScale(8)} />
                            <Text style={styles.fieldTxt}>
                                Plan & Carrier  <Text style={[fontStyles.notoSansMedium14, { color: Colors.errorColor }]}>*</Text>
                            </Text>
                            <Dropdown
                                style={[styles.dropdownTest]}
                                placeholderStyle={[fontStyles.notoSansRegular14, { color: Colors.offBlack50, marginLeft: moderateScale(6) }]}
                                selectedTextStyle={[fontStyles.notoSansRegular14, { color: Colors.offBlack, opacity: 0.75 }]}
                                activeColor={Colors.offBlack5}
                                itemTextStyle={fontStyles.notoSansRegular12}
                                data={data}
                                search={false}
                                renderRightIcon={DropwDownSvgDown}
                                labelField="label"
                                valueField="label"
                                onBlur={() => { setFieldTouched("planAndCarrier", true) }}
                                placeholder={"Select a plan & carrier"}
                                value={values.planAndCarrier}
                                onChange={(item: any) => {
                                    console.log(item.label);
                                    setSelectPlanAndCarrier(item.label);
                                    setFieldValue("planAndCarrier", item.label);
                                }}
                                showsVerticalScrollIndicator={false}
                                flatListProps={{ nestedScrollEnabled: false }}
                                iconStyle={{ tintColor: Colors.secondaryColor }}
                            />
                            {errors.planAndCarrier && touched.planAndCarrier && (
                                <ErrorHelper errorMsg={errors.planAndCarrier} />
                            )}
                            <TakeSpace space={moderateScale(6)} />

                            <UploadDocuments
                                label={"Upload document"}
                                subText={"Browse in device"}
                                mandatory={true}
                                labelStyle={fontStyles.notoSansMedium12}
                                value={values.documentPdf}
                                // onChange={(file: any) => {
                                //     setFieldValue("documentPdf", file)
                                // }}
                                onPress={handleDocumentSelection}
                                formatText={""}
                                icon={UploadDocSvg}
                            // error={errors.documentPdf}
                            // touched={touched.documentPdf}
                            // rootStyle={{ paddingTop: moderateScale(10), }}
                            />
                            {errors.documentPdf && touched.documentPdf && (
                                <ErrorHelper errorMsg={errors.documentPdf} />
                            )}
                        </ScrollView>
                        <View style={[commonStyles.sbtBtn, {
                            bottom: 0,
                        }]}>
                            <CustomButton
                                label={"Submit"}
                                btnWidth={'100%'}
                                extraCusTxtStyle={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}
                                disabled={!isValid}
                                onPress={handleSubmit}
                                extraCusBtnStyle={[{ borderRadius: 4 }]}
                                paddingProp={moderateScale(12, 0.5)}
                            />
                        </View>
                    </>
                )}

            </Formik>

        </>
    )
}

export default AddInsuranceScreen

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
        paddingLeft: moderateScale(4),
    },
})