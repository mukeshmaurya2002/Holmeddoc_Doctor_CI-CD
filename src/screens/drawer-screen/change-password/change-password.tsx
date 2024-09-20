import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale } from 'react-native-size-matters'
import { Formik } from 'formik'
import { Colors } from '../../../constants'
import { helpers } from '../../../utility/helpers'
import { CustomButton, Header, InputFieldBox } from '../../../components'
import { BackArrowSvg, CloseEye, OpenEye } from '../../../../assets/svg'
import { commonStyles, fontStyles } from '../../../styles'
import ErrorHelper from '../../../components/error-helper/error-helper'
import { validate } from '../../../utility/validation'
import { navigationHook } from '../../../hooks/navigation.hook'

const DrawerChangePassword = () => {
    const initialValues = {
        oldPassword: '',
        newPassword: '',
        confirmPassword: ''
    }
    const { navigateTo } = navigationHook()
    const [showOpenEye, setshowOpenEye] = React.useState({
        oldPassword: false,
        newPassword: false,
        confirmPassword: false
    })
    const changePasswordValidate = validate.ChangePasswordValidate()
    const handleChangepasswordSubmit = (values: any) => {
        console.log(values)
        // navigateTo('Login')
    }
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='Change Password'
                headText=''
                icon={BackArrowSvg}
            />
            <Formik initialValues={initialValues} validationSchema={changePasswordValidate} onSubmit={handleChangepasswordSubmit} >
                {({ values, handleChange, handleBlur, handleSubmit, errors, touched, isValid, setFieldError, setFieldValue, setFieldTouched }) => (
                    <>
                        <ScrollView showsVerticalScrollIndicator={false} style={[{ flex: 1, padding: moderateScale(16), backgroundColor: Colors.offWhite }]} >
                            <InputFieldBox
                                label={"Old password"}
                                placeHolder='Enter your old password'
                                keyBoardType="default"

                                mandatory={true}
                                value={values.oldPassword}
                                rootStyle={{ paddingTop: moderateScale(10), }}
                                labelStyle={fontStyles.notoSansMedium12}
                                onChangeText={(text) => {
                                    setFieldTouched("oldPassword", true);
                                    handleChange("oldPassword")(text);
                                }}
                                inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack85)}
                                secureTextEntry={!showOpenEye.oldPassword}
                                placeholderTextColor={Colors.offBlack50}
                                Icon={showOpenEye.oldPassword ? OpenEye : CloseEye}
                                onPress={() => {
                                    setshowOpenEye({ ...showOpenEye, oldPassword: !showOpenEye.oldPassword })
                                }
                                }
                                onBlur={handleBlur("oldPassword")}
                            />
                            {errors.oldPassword && touched.oldPassword && (
                                <ErrorHelper errorMsg={errors.oldPassword} />
                            )}
                            <InputFieldBox
                                label={"New password"}
                                placeHolder='Enter your new password'
                                keyBoardType="default" mandatory={true}
                                secureTextEntry={!showOpenEye.newPassword}
                                value={values.newPassword}
                                rootStyle={{ paddingTop: moderateScale(10), }}
                                labelStyle={fontStyles.notoSansMedium12}
                                onChangeText={(text) => {
                                    setFieldTouched("newPassword", true);
                                    handleChange("newPassword")(text);
                                }}
                                inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack85)}

                                placeholderTextColor={Colors.offBlack50}
                                onPress={() => {
                                    setshowOpenEye({ ...showOpenEye, newPassword: !showOpenEye.newPassword })
                                }}
                                Icon={showOpenEye.newPassword ? OpenEye : CloseEye}
                                onBlur={handleBlur("newPassword")}
                            />
                            {errors.newPassword && touched.newPassword && (
                                <ErrorHelper errorMsg={errors.newPassword} />
                            )}

                            <InputFieldBox
                                label={"Confirm password"}
                                placeHolder='Enter your new password again'
                                keyBoardType="default"
                                mandatory={true}
                                inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack85)}

                                secureTextEntry={!showOpenEye.confirmPassword}
                                value={values.confirmPassword}
                                rootStyle={{ paddingTop: moderateScale(10), }}
                                labelStyle={fontStyles.notoSansMedium12}
                                onChangeText={(text) => {
                                    setFieldTouched("confirmPassword", true);
                                    handleChange("confirmPassword")(text);
                                }}
                                placeholderTextColor={Colors.offBlack50}
                                Icon={showOpenEye.confirmPassword ? OpenEye : CloseEye}
                                onPress={() => {
                                    setshowOpenEye({ ...showOpenEye, confirmPassword: !showOpenEye.confirmPassword })
                                }}
                                onBlur={handleBlur("confirmPassword")}
                            />
                            {errors.confirmPassword && touched.confirmPassword && (
                                <ErrorHelper errorMsg={errors.confirmPassword} />
                            )}
                        </ScrollView>
                        <View style={[commonStyles.sbtBtn, {
                            bottom: 0,
                        }]}>
                            <CustomButton
                                label={"Update Password"}
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

export default DrawerChangePassword

const styles = StyleSheet.create({})