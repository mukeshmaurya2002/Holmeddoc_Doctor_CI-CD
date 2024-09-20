/*
This is used to verify otp for forgot password and register new user  also
*/
import React from 'react'
import { Formik } from 'formik'
import AuthBody from '../components/auth-body'
import { useVerifyOtp } from './verify-otp.hook'
import { Colors, Images } from '../../../constants'
import { validate } from '../../../utility/validation'
import { moderateScale } from 'react-native-size-matters'
import { FlatList, StyleSheet, View } from 'react-native'
import { commonStyles, fontStyles } from '../../../styles'
import { OtpInputBox, TakeSpace } from '../../../components'


const VerifyOtp = () => {
  const { navigateTo, navigateBack, resendOtp, handleInputChange, inputRefs, handleKeyPress, otp, isFormForgotPass } = useVerifyOtp();

  const renderVerify = () => {
    return (
      <Formik
        initialValues={{ otp: '' }}
        validationSchema={validate.ForgotPassValidation}
        onSubmit={() => navigateTo(isFormForgotPass ? 'ResetPassword' : 'DrawerStack', { screen: 'Home' })}
        children={
          ({ handleBlur, handleChange, values, errors, touched, handleSubmit, isValid }) => {
            return (
              <AuthBody
                banner={isFormForgotPass ? Images.forgotPasswordBanner : Images.verifyOtpbanner}
                subHeadTxt='Verify'
                headTxt='OTP'

                bodyTxt='Enter 6 digit verification code sent to your mobile number +1 XXXXX XXX25'
                btnLabel='Proceed'
                bottmTxt='Didn’t receive? '
                bottmTxt2='Resend'
                // resendPress={resendOtp}
                onPressBottTxt={resendOtp}
                children={
                  <>
                    <TakeSpace space={15} />
                    <OtpInputBox
                      numDigits={6}
                      otp={values.otp}
                      showTimer
                      inputRefs={inputRefs}
                      handleInputChange={handleInputChange}
                      handleKeyPress={handleKeyPress}
                    />
                  </>
                }
                // onPress={handleSubmit}
                onPress={() => navigateTo(isFormForgotPass ? 'ResetPassword' : 'DrawerStack', { screen: 'Home' })}
                spacing={30}
                OnPressBack={navigateBack}
              // isValidateForm={!isValid}
              />
            )
          }
        }
      />
    )
  };

  return (
    <View style={commonStyles._flexGrowBg(Colors.offWhite)}>
      <FlatList
        data={[1]}
        bounces={false}
        renderItem={renderVerify}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default VerifyOtp;

const styles = StyleSheet.create({
  fieldTxt: { ...fontStyles.notoSansSemiBold12, paddingVertical: moderateScale(6), paddingLeft: moderateScale(4) },
})