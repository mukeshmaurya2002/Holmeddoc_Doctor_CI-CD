/*
This is used to reset the password 
*/
import React from 'react'
import { Formik } from 'formik'
import { FlatList, View } from 'react-native'
import AuthBody from '../components/auth-body'
import { commonStyles, fontStyles } from '../../../styles'
import { Colors, Images } from '../../../constants'
import { validate } from '../../../utility/validation'
import { useResetPasswrod } from './reset-password.hook'
import { moderateScale } from 'react-native-size-matters'
import { CloseEye, OpenEye } from '../../../../assets/svg'
import { InputFieldBox, TakeSpace } from '../../../components'
import { helpers } from '../../../utility/helpers'



const ResetPassword = () => {

    const { navigateTo, showCnfPassword, showPassword, toggleCnfPassword, togglePassword } = useResetPasswrod();

    const renderResetPassword = () => {

        return (
            <Formik
                initialValues={{ password: '', cnfPassword: '' }}
                onSubmit={() => navigateTo('DrawerStack', { screen: 'Home' })}
                validationSchema={validate.ResetPassword}
                children={
                    ({ handleBlur, handleChange, touched, errors, values, handleSubmit, isValid }) => (
                        <AuthBody
                            banner={Images.forgotPasswordBanner}
                            subHeadTxt='Reset'
                            headTxt='Update Password'
                            bodyTxt='Please enter a new and strong password'
                            btnLabel='Update'
                            OnPressBack={() => navigateTo('Login')}
                            children={
                                <View style={{}}>
                                    <TakeSpace space={15} />
                                    <View>
                                        <InputFieldBox
                                            label="Password"
                                            value={values.password}
                                            onChangeText={handleChange('password')}
                                            onBlur={handleBlur('password')}
                                            placeHolder="Enter your new password"
                                            secureTextEntry={!showPassword}
                                            Icon={showPassword ? OpenEye : CloseEye}
                                            onPress={togglePassword}
                                            inputValueStyle={fontStyles.notoSansRegular14}

                                            errorMessage={touched.password && errors.password ? errors.password : ''}
                                        />
                                    </View>
                                    <TakeSpace space={2} />
                                    <View>
                                        <InputFieldBox
                                            label="Confirm Password"
                                            value={values.cnfPassword}
                                            inputValueStyle={fontStyles.notoSansRegular14}

                                            onChangeText={handleChange('cnfPassword')}
                                            onBlur={handleBlur('cnfPassword')}
                                            placeHolder="Enter your new password again"
                                            secureTextEntry={!showCnfPassword}
                                            Icon={showCnfPassword ? OpenEye : CloseEye}
                                            onPress={toggleCnfPassword}
                                            errorMessage={touched.cnfPassword && errors.cnfPassword ? errors.cnfPassword : ''}
                                        />
                                    </View>
                                </View>
                            }
                            onPress={handleSubmit}
                            spacing={helpers.isTablet ? 30 : 40}
                            isValidateForm={!isValid}
                        />
                    )}
            />
        )
    };

    return (
        <View style={commonStyles._flexGrowBg(Colors.offWhite)}>
            <FlatList
                data={[1]}
                bounces={false}
                renderItem={renderResetPassword}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default ResetPassword;
