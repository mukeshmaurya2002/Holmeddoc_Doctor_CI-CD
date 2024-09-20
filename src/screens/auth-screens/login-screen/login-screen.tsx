import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import { useLogin } from './login.hook';
import AuthBody from '../components/auth-body';
import { Colors, Images } from '../../../constants';
import { validate } from '../../../utility/validation';
import { moderateScale } from 'react-native-size-matters';
import { commonStyles, fontStyles } from '../../../styles';
import { CloseEye, OpenEye } from '../../../../assets/svg';
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import { CustomCheckBox, InputFieldBox, TakeSpace } from '../../../components';
import { helpers } from '../../../utility/helpers';
import TimelineCalendarScreen from '../../calendar-event/time-line-calendar';

const LoginScreen = () => {
  const { checkboxError, setCheckboxError, showPassword, togglePassword, navigateBack, navigateTo, isCheck, handleLoginPress, initialValues, toggleCheckBox } = useLogin();

  const flatListRef = useRef<FlatList>(null);

  const handleSubmitForm = (handleSubmit: () => void) => {
    if (!isCheck && flatListRef.current) {
      setCheckboxError(true);
      flatListRef.current.scrollToEnd({ animated: true });
    } else {
      setCheckboxError(false);
      handleSubmit();
    }
  };

  const renderLogin = () => {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={validate.LoginValidation()}
        onSubmit={() => {
          navigateTo('DrawerStack', { screen: 'Home' });
        }}
      >
        {({ handleChange, values, isValid, errors, handleBlur, touched, handleSubmit, setFieldTouched }) => (
          <>
            <AuthBody
              banner={Images.loginBanner}
              subHeadTxt='Welcome Back, Caregiver Extraordinaire!'
              headTxt='Login'
              bodyTxt=''
              btnLabel='LOGIN'
              bottmTxt='Do not have an account?'
              bottmTxt2='Register'
              onPressBottTxt={() => navigateTo('Register')}
              children={
                <View style={{ rowGap: 15 }}>
                  <View>
                    <InputFieldBox
                      label='Phone number'
                      placeHolder='XXX XXX XXXX'
                      value={values.phoneNo}
                      onChangeText={handleChange('phoneNo')}
                      onBlur={handleBlur('phoneNo')}
                      isPhoneNo
                      placeholderTextColor={Colors.offBlack50}
                      inputValueStyle={fontStyles.notoSansRegular14}
                      keyBoardType='number-pad'
                      errorMessage={touched.phoneNo && errors.phoneNo ? errors.phoneNo : ''}
                    />
                  </View>
                  <View>
                    <InputFieldBox
                      label='Password'
                      inputValueStyle={fontStyles.notoSansRegular14}
                      testID='toggle-password-icon'
                      value={values.password}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      placeHolder='Enter your password'
                      secureTextEntry={!showPassword}
                      Icon={showPassword ? OpenEye : CloseEye}
                      onPress={togglePassword}
                      placeholderTextColor={Colors.offBlack50}
                      errorMessage={touched.password && errors.password ? errors.password : ''}
                    />
                    <Pressable style={styles.forPassStyle} onPress={() => navigateTo('ForgotPassword')}>
                      <Text style={[styles.fieldTxt, { color: Colors.secondaryColor }]} >Forgot Password?</Text>
                    </Pressable>
                  </View>
                </View>
              }
              onPress={() => handleSubmitForm(handleSubmit)}
              spacing={20}
              OnPressBack={navigateBack}
              isValidateForm={!isValid}
            />

            <View style={[styles.termsTxt, helpers.isTablet && commonStyles.centerJCAC]}  >
              <Pressable onPress={toggleCheckBox} style={{ paddingTop: moderateScale(helpers.isTablet ? 1 : 3) }}>
                <CustomCheckBox onPress={toggleCheckBox} selected={isCheck} />
              </Pressable>
              <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack75 }]}>
                I have read the </Text>
              <View style={[commonStyles.RowJCAC, { columnGap: moderateScale(2) }]}>
                <Pressable onPress={() => navigateTo("PrivacyPolicies")} style={{ alignSelf: 'center' }}>
                  <Text style={styles.commDeclaTxt}>
                    Privacy Policy
                  </Text>
                </Pressable>
                <Text style={[fontStyles.notoSansRegular12, { textAlign: 'center', color: Colors.offBlack75 }]}>{" "}and agree to{" "}</Text>
                <Pressable onPress={() => navigateTo("TermsAndCondition")} style={{ alignSelf: 'center' }}>
                  <Text style={styles.commDeclaTxt} >
                    Terms
                  </Text>
                </Pressable>
              </View>
            </View>
            <Pressable onPress={() => navigateTo("TermsAndCondition")} style={{ alignSelf: 'flex-start', paddingHorizontal: moderateScale(41) }}>
              <Text style={styles.commDeclaTxt} >
                of Service
              </Text>
            </Pressable>
            {checkboxError && (
              <Text style={styles.errorText}>
                Please accept the terms and conditions
              </Text>
            )}
            <TakeSpace space={14} />
          </>
        )}

      </Formik>
    );
  };

  return (
    <View style={commonStyles._flexGrowBg(Colors.offWhite)}>
      <FlatList
        ref={flatListRef}
        data={[1]}
        bounces={false}
        renderItem={renderLogin}
        showsVerticalScrollIndicator={false}
      />
      {/* <TimelineCalendarScreen /> */}
    </View>
  );
}

export default LoginScreen;

const styles = StyleSheet.create({
  fieldTxt: { ...fontStyles.notoSansSemiBold12, paddingVertical: moderateScale(6), paddingLeft: moderateScale(4) },
  forPassStyle: { alignSelf: "flex-end", paddingTop: moderateScale(3) },
  termsTxt: { flexDirection: 'row', paddingHorizontal: moderateScale(16), columnGap: moderateScale(2), width: '100%' },
  commDeclaTxt: { ...fontStyles._notoSansMedium("NotoSans-Medium", moderateScale(12), Colors.offBlack75), textDecorationLine: 'underline' },
  errorText: { ...fontStyles.notoSansRegular12, color: Colors.errorColor, paddingHorizontal: moderateScale(41), paddingTop: moderateScale(4) }
});
