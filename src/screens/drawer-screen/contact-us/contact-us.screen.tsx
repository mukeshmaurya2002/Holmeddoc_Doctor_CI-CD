import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { CustomButton, Header, InputFieldBox, SplitText, TakeSpace } from '../../../components'
import { BackArrowSvg, EmailSvg, LocationSvg, PhoneSvg } from '../../../../assets/svg'
import { moderateScale } from 'react-native-size-matters'
import FastImage from 'react-native-fast-image'
import { Formik } from 'formik'
import { Colors, Images } from '../../../constants'
import { helpers } from '../../../utility/helpers'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constants/responsive'
import { commonStyles, fontStyles } from '../../../styles'
import ErrorHelper from '../../../components/error-helper/error-helper'
import { validate } from '../../../utility/validation'
const ContactUs = () => {
    const initialValues = {
        name: '',
        message: '',
    }
    const contactUsValidate = validate.ContactUsValidation()
    const handleContactUsSubmit = (values: any) => {
    }
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='Contact Us'
                headText=''
                icon={BackArrowSvg}
            />
            <Formik initialValues={initialValues} validationSchema={contactUsValidate} onSubmit={handleContactUsSubmit} >
                {({ values, handleChange, handleBlur, handleSubmit, errors, touched, isValid, setFieldError, setFieldValue, setFieldTouched }) => (
                    <>
                        <ScrollView showsVerticalScrollIndicator={false} style={[{ backgroundColor: Colors.offWhite }]} >
                            <View style={styles.imageContainer}>
                                <FastImage
                                    source={Images.contact_us}
                                    style={{
                                        width: SCREEN_WIDTH - moderateScale(16),
                                        height: SCREEN_HEIGHT * 0.19,
                                        justifyContent: 'flex-end',
                                        //paddingHorizontal: moderateScale(10)
                                    }}
                                    resizeMode={FastImage.resizeMode.cover}
                                />
                            </View>
                            <View style={styles.mainContainer}>
                                <TakeSpace space={moderateScale(10)} />
                                <SplitText text="Get in touch" customTextStyle={[fontStyles.notoSansMedium20]} textColor={Colors.offBlack} />
                                <TakeSpace space={moderateScale(10)} />
                                <View style={[commonStyles.RowJSBAC]}>
                                    <View style={styles.boxContainer}>
                                        <EmailSvg />
                                    </View>
                                    <View style={styles.boxContainer}>
                                        <PhoneSvg />
                                    </View>
                                    <View style={styles.boxContainer}>
                                        <LocationSvg />
                                    </View>
                                </View>
                            </View>
                            <TakeSpace space={moderateScale(14)} />
                            <SplitText text="or" />
                            <View style={{ paddingHorizontal: moderateScale(16) }}>
                                <InputFieldBox
                                    label={"Name"}
                                    placeHolder='Enter your name'
                                    keyBoardType="default"
                                    mandatory={true}
                                    value={values.name}
                                    inputValueStyle={fontStyles.notoSansRegular14}

                                    rootStyle={{ paddingTop: moderateScale(10), }}
                                    labelStyle={fontStyles.notoSansMedium12}
                                    onChangeText={(text) => {
                                        setFieldTouched("name", true);
                                        handleChange("name")(text);
                                    }}
                                    placeholderTextColor={Colors.offBlack50}
                                    onBlur={handleBlur("name")}
                                />
                                {errors.name && touched.name && (
                                    <ErrorHelper errorMsg={errors.name} />
                                )}
                                <InputFieldBox
                                    label={"Message"}
                                    placeHolder='Enter your message'
                                    keyBoardType="default"
                                    inputValueStyle={fontStyles.notoSansRegular14}

                                    mandatory={true}
                                    value={values.message}
                                    rootStyle={{ paddingTop: moderateScale(10), }}
                                    labelStyle={fontStyles.notoSansMedium12}
                                    onChangeText={(text) => {
                                        setFieldTouched("message", true);
                                        handleChange("message")(text);
                                    }}
                                    placeholderTextColor={Colors.offBlack50}

                                    onBlur={handleBlur("message")}
                                />
                                {errors.message && touched.message && (
                                    <ErrorHelper errorMsg={errors.message} />
                                )}
                            </View>
                            <TakeSpace space={moderateScale(50)} />
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

export default ContactUs

const styles = StyleSheet.create({
    imageContainer: {
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScale(8),
    },
    mainContainer: {
        flex: 1,
        paddingHorizontal: moderateScale(16),
    },
    boxContainer: {
        borderWidth: moderateScale(1),
        borderColor: Colors.offBlack5,
        padding: moderateScale(32),
        borderRadius: moderateScale(8),
    }
})