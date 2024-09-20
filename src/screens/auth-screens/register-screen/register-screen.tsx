import React from 'react';
import { Formik } from 'formik';
import { styles } from './styles';
import AuthBody from '../components/auth-body';
import { useRegisterHook } from './register-hook';
import { Colors, Images } from '../../../constants';
import { validate } from '../../../utility/validation';
import { Dropdown } from 'react-native-element-dropdown';
import { moderateScale } from 'react-native-size-matters';
import { commonStyles, fontStyles } from '../../../styles';
import { MainStackNavigatorRef } from '../../../ref/main-stack-navigator-ref';
import { View, Text, FlatList, BackHandler, Pressable } from 'react-native';
import { AccountSecurityProps, PersonalInfoProps, FormData } from '../../type';
import { CloseEye, FilledBar, KnobDownArrowSvg, OpenEye, UnFilledBar } from '../../../../assets/svg';
import { CustomButton, ErrorHelper, InputFieldBox, TakeSpace } from '../../../components';
import { resetTimer } from '../../../redux/slices/otp-timer-slice';
import { useAppDispatch } from '../../../redux/hook';
import { helpers } from '../../../utility/helpers';

const CommonButton = React.memo(({ label, onPress, isValidate }: { label: string, onPress: () => void, isValidate?: boolean }) => {
    return (
        <>
            <TakeSpace space={10} />
            <CustomButton label={label} onPress={onPress} btnWidth={'100%'} disabled={isValidate} />
            <View style={[commonStyles.RowJCAC, { columnGap: moderateScale(6) }]}>
                <Text style={fontStyles.notoSansRegular14}>Already have an account?</Text>
                <Pressable onPress={() => { MainStackNavigatorRef?.current?.navigate('Login') }}>
                    <Text style={[fontStyles.notoSansSemiBold14, { color: Colors.secondaryColor }]}>Login</Text>
                </Pressable>
            </View>
        </>
    )
});

const PersonalInfo: React.FC<PersonalInfoProps> = React.memo(({ genderData, handleSubmit, formData, setFormData }) => {
    return (
        <Formik
            initialValues={formData}
            validationSchema={validate.PersonalInfoSchema()}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched, setFieldValue, isValid }) => (
                <View style={{ rowGap: moderateScale(helpers.isTablet ? 10 : 15) }}>
                    <View>
                        <Text style={styles.fieldTxt}>Personal information</Text>
                        <TakeSpace space={4} />
                        <View style={commonStyles.RowJSBAC}>
                            <FilledBar />
                            <UnFilledBar />
                            <UnFilledBar />
                        </View>
                    </View>
                    <View>
                        <InputFieldBox
                            label="Name"
                            placeHolder="Enter your name"
                            keyBoardType="default"
                            onChangeText={(text) => {
                                handleChange('name')(text);
                                setFormData({ ...values, name: text });
                            }}
                            inputValueStyle={fontStyles.notoSansRegular14}
                            placeholderTextColor={Colors.offBlack50}
                            onBlur={handleBlur('name')}
                            value={values.name}
                            errorMessage={touched.name && errors.name ? errors.name : ''}
                        />
                    </View>
                    <View style={{ width: '50%' }}>
                        <Text style={styles.fieldTxt}>Gender</Text>
                        <Dropdown
                            style={[styles.dropdownTest]}
                            placeholderStyle={[styles.placeHolder, { color: Colors.offBlack50 }]}
                            selectedTextStyle={[styles.placeHolder]}
                            activeColor={Colors.offBlack25}
                            itemTextStyle={fontStyles.notoSansRegular12}
                            data={genderData}
                            dropdownPosition='auto'
                            search={false}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={"Select Gender"}
                            value={values.gender}
                            onChange={item => {
                                setFieldValue('gender', item.value);
                                setFormData({ ...values, gender: item.value });
                            }}
                            showsVerticalScrollIndicator={false}
                            flatListProps={{ nestedScrollEnabled: false }}
                            renderRightIcon={KnobDownArrowSvg}
                        />
                        {touched.gender && errors.gender && (<ErrorHelper errorMsg={errors.gender} />)}
                    </View>
                    <CommonButton label='Proceed' onPress={handleSubmit} isValidate={!isValid} />
                </View>
            )}
        </Formik>
    );
});

const ContactInfo: React.FC<{ handleSubmit: () => void, formData: FormData, setFormData: (values: FormData) => void }> = React.memo(({ handleSubmit, formData, setFormData }) => (
    <Formik
        initialValues={formData}
        validationSchema={validate.ContactInfoSchema()}
        onSubmit={handleSubmit}
    >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
            <View style={{ rowGap: moderateScale(helpers.isTablet ? 10 : 15) }}>
                <View>
                    <Text style={styles.fieldTxt}>Contact information</Text>
                    <TakeSpace space={4} />

                    <View style={commonStyles.RowJSBAC}>
                        <FilledBar />
                        <FilledBar />
                        <UnFilledBar />
                    </View>
                </View>
                <View>
                    <InputFieldBox
                        label="Phone number"
                        placeHolder="XXX XXX XXXX"
                        keyBoardType="number-pad"
                        isPhoneNo
                        inputValueStyle={fontStyles.notoSansRegular14}

                        onChangeText={(text) => {
                            handleChange('phone')(text);
                            setFormData({ ...values, phone: text });
                        }}
                        onBlur={handleBlur('phone')}
                        value={values.phone}
                        errorMessage={touched.phone && errors.phone ? errors.phone : ''}
                    />
                </View>
                <View>
                    <InputFieldBox
                        label="Email address"
                        placeHolder="email@domain.com"
                        keyBoardType="default"
                        inputValueStyle={fontStyles.notoSansRegular14}

                        onChangeText={(text) => {
                            handleChange('email')(text);
                            setFormData({ ...values, email: text });
                        }}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        errorMessage={touched.email && errors.email ? errors.email : ''}
                    />
                </View>
                <CommonButton label='Proceed' onPress={handleSubmit} isValidate={!isValid} />
            </View>
        )}
    </Formik>
));

const AccountSecurity: React.FC<AccountSecurityProps> = React.memo(({ showCnfPassword, showPassword, toggleCnfPassword, togglePassword, handleSubmit, formData, setFormData }) => (
    <Formik
        initialValues={formData}
        validationSchema={validate.AccountSecuritySchema()}
        onSubmit={handleSubmit}
    >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid }) => (
            <View style={{ rowGap: moderateScale(15) }}>
                <View style={{ rowGap: moderateScale(helpers.isTablet ? 0 : 0) }}>
                    <Text style={styles.fieldTxt}>Account Security</Text>
                    <TakeSpace space={4} />
                    <View style={commonStyles.RowJSBAC}>
                        <FilledBar />
                        <FilledBar />
                        <FilledBar />
                    </View>
                </View>
                <View>
                    <InputFieldBox
                        label="Password"
                        inputValueStyle={fontStyles.notoSansRegular14}

                        placeHolder="Enter your password"
                        secureTextEntry={!showPassword}
                        Icon={showPassword ? OpenEye : CloseEye}
                        onPress={togglePassword}
                        onChangeText={(text) => {
                            handleChange('password')(text);
                            setFormData({ ...values, password: text });
                        }}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        errorMessage={touched.password && errors.password ? errors.password : ''}
                    />
                </View>
                <View>
                    <InputFieldBox
                        label="Confirm Password"
                        inputValueStyle={fontStyles.notoSansRegular14}

                        placeHolder="Confirm your password"
                        secureTextEntry={!showCnfPassword}
                        Icon={showCnfPassword ? OpenEye : CloseEye}
                        onPress={toggleCnfPassword}
                        onChangeText={(text) => {
                            handleChange('confirmPassword')(text);
                            setFormData({ ...values, confirmPassword: text });
                        }}
                        onBlur={handleBlur('confirmPassword')}
                        value={values.confirmPassword}
                        errorMessage={touched.confirmPassword && errors.confirmPassword ? errors.confirmPassword : ''}
                    />
                </View>
                <CommonButton label='Submit' onPress={handleSubmit} isValidate={!isValid} />
            </View>
        )}
    </Formik>
));

const RegisterScreen = () => {
    const dispatch = useAppDispatch();
    const [formData, setFormData] = React.useState<FormData>({
        name: '',
        gender: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const {
        navigateBack,
        navigateTo,
        showCnfPassword,
        showPassword,
        toggleCnfPassword,
        togglePassword,
        selectedIndex,
        setSelectedIndex,
        genderData,
    } = useRegisterHook();

    const getBodyBasedOnIndex = React.useCallback((index: number) => {
        switch (index) {
            case 0:
                return {
                    body: (
                        <PersonalInfo
                            genderData={genderData}
                            formData={formData}
                            setFormData={setFormData}
                            handleSubmit={() => setSelectedIndex(1)}
                        />
                    ),
                };
            case 1:
                return {
                    body: (
                        <ContactInfo
                            formData={formData}
                            setFormData={setFormData}
                            handleSubmit={() => setSelectedIndex(2)}
                        />
                    ),
                };
            case 2:
                return {
                    body: (
                        <AccountSecurity
                            showCnfPassword={showCnfPassword}
                            showPassword={showPassword}
                            toggleCnfPassword={toggleCnfPassword}
                            togglePassword={togglePassword}
                            formData={formData}
                            setFormData={setFormData}
                            handleSubmit={() => {
                                dispatch(resetTimer())
                                navigateTo('VerifyOtp', { isFormForgotPass: false })
                            }}
                        />
                    ),
                };
            default:
                return {};
        }
    }, [showCnfPassword, showPassword, toggleCnfPassword, togglePassword, setSelectedIndex, formData]);

    const handleBackPress = () => {
        if (selectedIndex > 0) {
            setSelectedIndex(selectedIndex - 1);
        } else {
            navigateBack();
        }
        return true;
    };

    React.useEffect(() => {
        const backHandler = BackHandler.addEventListener('hardwareBackPress', handleBackPress);
        return () => backHandler.remove();
    }, [selectedIndex]);

    const renderRegister = () => (
        <AuthBody
            banner={Images.signupbanner}
            subHeadTxt="Sign up and reach more patients effortlessly"
            headTxt="Sign up"
            bodyTxt=""
            hideBnt
            btnLabel={''}
            onPressBottTxt={() => navigateTo('Login')}
            children={getBodyBasedOnIndex(selectedIndex)?.body}
            onPress={() => { }}
            spacing={moderateScale(0)}

            OnPressBack={handleBackPress}
        />
    );

    return (
        <View style={commonStyles._flexGrowBg(Colors.offWhite)}>
            <FlatList
                data={[1]}
                bounces={false}
                renderItem={renderRegister}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default RegisterScreen;
