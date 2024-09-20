import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonStyles, fontStyles } from '../../../../../styles'
import { Colors } from '../../../../../constants'
import { helpers } from '../../../../../utility/helpers'
import { moderateScale } from 'react-native-size-matters'
import { Formik } from 'formik'
import DatePicker from 'react-native-modern-datepicker';
import { Dropdown } from 'react-native-element-dropdown';
import { useAddPatient } from './add-patient.hook'
import { styles } from './styles'
import Modal from 'react-native-modal';
import CommonDropdown from './components/common-dropdown'
import { OutlineCalender } from '../../../../../../assets/svg'
import { validate } from '../../../../../utility/validation'
import { SCREEN_HEIGHT } from '../../../../../constants/responsive'
import { CustomButton, ErrorHelper, Header, InputFieldBox, TakeSpace } from '../../../../../components'



const AddPatient = () => {
    const { genderData, open, setOpen, navigateTo } = useAddPatient();
    const languageData = [
        { label: 'English', value: 'en' },
        { label: 'Hindi', value: 'hi' },
        { label: 'French', value: 'fn' }
    ]
    const stateData = [
        { label: 'Maharashtra', value: 'MH' },
        { label: 'Gujrat', value: 'GJ' },
        { label: 'Karnataka', value: 'KA' }
    ]
    const pinCodeData = [
        { label: '400001', value: '400001' },
        { label: '400002', value: '400002' },
        { label: '400003', value: '400003' }
    ]
    const bloodGroupData = [
        { label: 'A+', value: 'A+' },
        { label: 'B+', value: 'B+' },
        { label: 'O+', value: 'O+' }
    ]
    const cityData = [
        { label: 'Mumbai', value: 'Mumbai' },
        { label: 'Pune', value: 'Pune' },
        { label: 'Nashik', value: 'Nashik' }
    ]
    const renderAddPoints = () => {
        return (
            <Formik
                initialValues={{ gender: '', birthdate: '', name: '', phone: '', email: '', address: '', city: '', pinCode: '', language: '', bloodGr: '', state: '' }}
                validationSchema={validate.AddPatientValidation()}
                onSubmit={() => { navigateTo('Home') }}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched, isValid, setFieldValue }) => (
                    <>
                        <View style={screenStyle.commCont}>
                            <InputFieldBox
                                mandatory
                                label='Patient name'
                                placeHolder='Enter your patient’s name'
                                value={values.name}
                                inputValueStyle={fontStyles.notoSansRegular14}

                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                errorMessage={touched.name && errors.name ? errors.name : ''}
                            />
                            <InputFieldBox
                                mandatory
                                label='Phone Number'
                                isPhoneNo
                                placeHolder='Enter your patient’s number'
                                value={values.phone}
                                inputValueStyle={fontStyles.notoSansRegular14}

                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                                errorMessage={touched.phone && errors.phone ? errors.phone : ''}

                            />
                            <InputFieldBox
                                mandatory
                                label='Email address'
                                placeHolder='email@domain.com'
                                value={values.email}
                                inputValueStyle={fontStyles.notoSansRegular14}

                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                errorMessage={touched.email && errors.email ? errors.email : ''}

                            />
                            <View style={[commonStyles.RowJSBAC, { columnGap: moderateScale(4) }]}>
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
                                        placeholder={"select"}
                                        value={values.gender}
                                        onChange={item => setFieldValue('gender', item.value)}
                                        showsVerticalScrollIndicator={false}
                                        flatListProps={{ nestedScrollEnabled: false }}
                                        iconStyle={{ tintColor: Colors.secondaryColor }}
                                    />
                                    {touched.gender && errors.gender && (<ErrorHelper errorMsg={errors.gender} />)}
                                </View>
                                <View style={{ width: '50%' }}>
                                    <Text style={styles.fieldTxt}>Birthdate</Text>
                                    <InputFieldBox
                                        mandatory
                                        label={''}
                                        placeHolder={"MM/DD/YYYY"}
                                        keyBoardType="default"
                                        value={values.birthdate}
                                        inputValueStyle={fontStyles.notoSansRegular14}

                                        rootStyle={styles.birthCont}
                                        labelStyle={fontStyles.notoSansRegular12}
                                        onPress={() => setOpen(true)}
                                        onChangeText={handleChange('birthdate')}
                                        Icon={OutlineCalender}
                                    />
                                    {touched.birthdate && errors.birthdate && (<ErrorHelper errorMsg={errors.birthdate} />)}
                                </View>
                            </View>
                            {open &&
                                <Modal
                                    isVisible={open}
                                    animationIn={'slideInUp'}
                                    animationInTiming={800}
                                    animationOut={'slideOutDown'}
                                    backdropOpacity={0.3}
                                    onBackdropPress={() => setOpen(false)}
                                >
                                    <View style={{ height: SCREEN_HEIGHT * 0.45 }}>
                                        <DatePicker
                                            options={styles.datePicker}
                                            current={''}
                                            selectorStartingYear={1900}
                                            selectorEndingYear={new Date().getFullYear()}
                                            selected={values.birthdate}
                                            mode="calendar"
                                            onSelectedChange={(item: any) => {
                                                setFieldValue('birthdate', item);
                                                setOpen(false);
                                            }}
                                            minuteInterval={30}
                                            style={{ borderRadius: moderateScale(10) }}
                                        />
                                    </View>
                                </Modal>
                            }
                        </View>
                        <TakeSpace space={4} />
                        <View style={screenStyle.commCont}>
                            <InputFieldBox
                                mandatory
                                label='Street address'
                                inputValueStyle={fontStyles.notoSansRegular14}

                                placeHolder='Enter your building name/ apartment'
                                value={values.address}
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
                                errorMessage={touched.address && errors.address ? errors.address : ''}

                            />
                            <Text style={screenStyle.fieldTxt}>
                                Select Language
                            </Text>
                            <Dropdown
                                style={[styles.dropdownTest2]}
                                placeholderStyle={[styles.placeHolder, { color: Colors.offBlack50 }]}
                                selectedTextStyle={[styles.placeHolder]}
                                activeColor={Colors.offBlack25}
                                itemTextStyle={fontStyles.notoSansRegular12}
                                data={languageData}
                                dropdownPosition='auto'
                                search={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                value={values.language}
                                placeholder='Select'
                                onChange={item => setFieldValue('language', item.value)}
                                // onChange={(value) => setSlotData({ ...slotData, day: value })}
                                showsVerticalScrollIndicator={false}
                                flatListProps={{ nestedScrollEnabled: false }}
                                iconStyle={{ tintColor: Colors.secondaryColor }}
                            />
                            <View style={commonStyles.RowJSBAC}>
                                <View style={{ width: '48.2%' }}>
                                    <CommonDropdown
                                        applyDropStyle3={true}
                                        label='State'
                                        data={stateData}
                                        value={values.state}
                                        onChange={() => { }}
                                    />
                                </View>
                                <View style={{ width: '48.2%' }}>
                                    <CommonDropdown
                                        applyDropStyle3={true}
                                        label='City'
                                        data={cityData}
                                        value={values.city}
                                        onChange={() => { }}
                                    />
                                </View>
                            </View>
                            <View style={commonStyles.RowJSBAC}>
                                {/* <View>
                                    <CommonDropdown
                                        label='Language'
                                        data={languageData}
                                        value={values.language}
                                        onChange={() => { }}
                                    />
                                    {touched.language && errors.language && (<ErrorHelper errorMsg={errors.language} />)}
                                </View> */}
                                <View style={{ width: '48.2%' }}>
                                    <CommonDropdown
                                        applyDropStyle3={true}
                                        label='Pincode'
                                        data={pinCodeData}
                                        value={values.pinCode}
                                        onChange={() => { }}
                                    />
                                </View>
                                <View>
                                    <CommonDropdown
                                        label='Blood Group'
                                        data={bloodGroupData}
                                        applyDropStyle3={true}

                                        value={values.bloodGr}
                                        onChange={() => { }}
                                    />
                                    {touched.bloodGr && errors.bloodGr && (<ErrorHelper errorMsg={errors.bloodGr} />)}
                                </View>
                            </View>
                        </View>

                    </>
                )}
            </Formik>
        )
    }
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={commonStyles._flexOneBg(Colors.bgGreen)}>
                <Header label='Add patient' />
                <FlatList
                    data={[1]}
                    // scrollEnabled={false}
                    renderItem={renderAddPoints}
                    showsVerticalScrollIndicator={false}
                />
                <View style={screenStyle.Btn}>
                    <CustomButton
                        showIcon
                        btnWidth={'95%'}
                        label='Submit'
                    // onPress={handleSubmit}
                    // disabled={!isValid}
                    />
                </View>
            </View>
        </>
    )
}

export default AddPatient
const screenStyle = StyleSheet.create({
    Btn: { padding: moderateScale(10), ...commonStyles.centerJCAC, borderTopColor: Colors.borderColor, borderTopWidth: moderateScale(1), backgroundColor: Colors.offWhite },
    commCont: { padding: moderateScale(16), rowGap: moderateScale(10), backgroundColor: Colors.offWhite },
    fieldTxt: {
        ...fontStyles.notoSansSemiBold12,
        paddingVertical: moderateScale(6),
        paddingLeft: moderateScale(4),
    },
})