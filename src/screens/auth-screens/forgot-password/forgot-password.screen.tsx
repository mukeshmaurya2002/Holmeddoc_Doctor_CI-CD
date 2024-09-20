/*
This is used to send otp to number to reset password 
*/
import React from 'react'
import { Formik } from 'formik'
import { FlatList, View } from 'react-native'
import { commonStyles, fontStyles } from '../../../styles'
import AuthBody from '../components/auth-body'
import { useForgotPass } from './forgot-password.hook'
import { Colors, Images } from '../../../constants'
import { validate } from '../../../utility/validation'
import { moderateScale } from 'react-native-size-matters'
import { InputFieldBox, TakeSpace } from '../../../components'
import { useAppDispatch } from '../../../redux/hook'
import { resetTimer } from '../../../redux/slices/otp-timer-slice'


const ForgotPassword = () => {

    const { navigateTo, navigateBack } = useForgotPass();
    const dispatch = useAppDispatch()
    const renderForgotPassowrd = () => {
        return (
            <Formik
                initialValues={{ phoneNo: '' }}
                validationSchema={validate.ForgotPassValidation}
                onSubmit={() => {
                    dispatch(resetTimer())
                    navigateTo('VerifyOtp', { isFormForgotPass: true })
                }}
                children={
                    ({ handleChange, errors, touched, handleBlur, isValid, handleSubmit, values }) => {
                        return (
                            <AuthBody
                                banner={Images.forgotPasswordBanner}
                                subHeadTxt='Need help?'
                                headTxt='Trouble Logging In?'
                                bodyTxt='Please provide your mobile number to get a OTP code '
                                btnLabel='Proceed'
                                children={
                                    <View style={{}}>
                                        <TakeSpace space={15} />
                                        <InputFieldBox
                                            label="Phone Number"
                                            placeHolder="XXX XXX XXXX"
                                            keyBoardType="number-pad"
                                            isPhoneNo
                                            placeholderTextColor={Colors.offBlack50}
                                            inputValueStyle={fontStyles.notoSansRegular14}
                                            value={values.phoneNo}
                                            onChangeText={handleChange('phoneNo')}
                                            onBlur={handleBlur('phoneNo')}
                                            errorMessage={touched.phoneNo && errors.phoneNo ? errors.phoneNo : ''}
                                        />
                                    </View>
                                }
                                onPress={handleSubmit}
                                OnPressBack={navigateBack}
                                spacing={40}
                                isValidateForm={!isValid}
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
                renderItem={renderForgotPassowrd}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ForgotPassword;
