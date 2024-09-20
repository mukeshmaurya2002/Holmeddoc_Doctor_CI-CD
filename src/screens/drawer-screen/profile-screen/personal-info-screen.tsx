import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BackArrowSvg, BackGroundLine, DropwDownSvgDown, EditPencilIconSvg, OutlineCalender } from '../../../../assets/svg'
import { CustomButton, Header, InputFieldBox, TakeSpace } from '../../../components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { helpers } from '../../../utility/helpers'
import { Colors, Images } from '../../../constants'
import { moderateScale } from 'react-native-size-matters'
import { usePersonalInfo } from './use-personal-info-hook'
import FastImage from 'react-native-fast-image'
import CustomModal from '../../../components/custom-modal/custom-modal'
import ImagePickerModal from '../../../components/modals/image-picker-modal'
import { commonStyles, fontStyles } from '../../../styles'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constants/responsive'
import { Dropdown } from 'react-native-element-dropdown'
import DatePicker from 'react-native-modern-datepicker';
import Modal from 'react-native-modal';
import { set } from 'lodash'

const PersonalInfoScreen = () => {
    const genderData = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'Other', value: 'other' }
    ]
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
    const appointmentTypeData = [
        {
            id: 1,
            label: 'In Person'
        },
        {
            id: 2,
            label: 'Virtual'
        },
    ]
    const [isEditing, setIsEditing] = useState(false)
    const handleEditMode = () => {
        console.log("Edit mode")
        const isEditMode = true
        setIsEditing(isEditMode)
        //api call if edit mode is on
        if (isEditMode) {
            console.log("Api call")
        }
    }
    const [personalInfo, setPersonalInfo] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        birth: '',
        practionerBio: '',
        consultantRate: '',

    })
    const { imagePicked, openCamera, openGallery, openImgPicker, setOpenImgPicker, open, setOpen, selectedInsurance, setSelectedInsurance, selectCity, setSelectCity, selectedState, setSelectedState } = usePersonalInfo()
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label={isEditing ? 'Edit Personal info' : 'Personal info'}
                headText=''
                icon={BackArrowSvg}
            />
            <ScrollView showsVerticalScrollIndicator={false} style={[{ backgroundColor: Colors.offWhite, flex: 1 }]} scrollEnabled={true}>
                <View style={{ paddingHorizontal: moderateScale(16) }}>
                    <View style={{ alignSelf: "center", paddingVertical: moderateScale(26), position: "relative" }}>
                        {
                            imagePicked.uri ? (
                                <FastImage
                                    source={{ uri: imagePicked.uri }}
                                    style={{
                                        width: moderateScale(130),
                                        height: moderateScale(130),
                                        borderRadius: moderateScale(60),
                                    }} />
                            ) : <FastImage
                                source={Images.profileImage}
                                style={{
                                    width: moderateScale(130),
                                    height: moderateScale(130),
                                    borderRadius: moderateScale(20)
                                }}
                                resizeMode={FastImage.resizeMode.cover}
                            />
                        }
                        {
                            isEditing && (
                                <Pressable style={{ position: "absolute", top: moderateScale(124), left: moderateScale(90) }} onPress={() => setOpenImgPicker(true)}>
                                    <EditPencilIconSvg />
                                </Pressable>
                            )
                        }
                    </View>
                    <View>
                        <InputFieldBox
                            label={"Name"}
                            placeHolder='Enter your name'
                            keyBoardType="default"
                            value={personalInfo.name}
                            editable={isEditing}
                            onChangeText={(text) => {
                                setPersonalInfo({ ...personalInfo, name: text })
                            }
                            }
                            inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack85)}
                            rootStyle={{ paddingTop: moderateScale(10), }}
                            labelStyle={fontStyles.notoSansMedium12}
                            placeholderTextColor={Colors.offBlack50}
                        />
                    </View>
                    <InputFieldBox
                        label={"Phone Number"}
                        placeHolder='XXX XXX XXXX'
                        keyBoardType="number-pad"
                        isPhoneNo
                        inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack85)}
                        value={personalInfo.phoneNumber}
                        editable={isEditing}
                        rootStyle={{ paddingTop: moderateScale(10), }}
                        labelStyle={fontStyles.notoSansMedium12}
                        placeholderTextColor={Colors.offBlack50}
                        onChangeText={(text) => {
                            setPersonalInfo({ ...personalInfo, phoneNumber: text })
                        }
                        }
                    />
                    <TakeSpace space={4} />
                    <View style={[commonStyles.flexRow, { columnGap: moderateScale(12) }]}>
                        <View style={{ width: '48%' }}>
                            <Text style={styles.fieldTxt}>Birthdate</Text>
                            <InputFieldBox
                                label={''}
                                editable={isEditing}
                                placeHolder={"MM/DD/YYYY"}
                                keyBoardType="default"
                                value={personalInfo.birth}

                                inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack75)}
                                rootStyle={{ height: helpers.isIos ? moderateScale(46) : moderateScale(50), paddingHorizontal: moderateScale(0) }}
                                labelStyle={fontStyles.notoSansRegular12}
                                onPress={() => {
                                    isEditing && setOpen(true)
                                }}

                                onChangeText={(value) => {
                                    setPersonalInfo({ ...personalInfo, birth: value })
                                }}
                                placeholderTextColor={Colors.offBlack50}
                                Icon={OutlineCalender}
                            />

                        </View>
                        <View style={{ width: '48%' }}>
                            <Text style={styles.fieldTxt}>Gender</Text>
                            <Dropdown
                                style={[styles.dropdownTest]}
                                placeholderStyle={[fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack50), { paddingLeft: moderateScale(6) }]}
                                selectedTextStyle={[fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack75)]}
                                //activeColor={Colors.offBlack25}
                                itemTextStyle={fontStyles.notoSansRegular12}
                                data={genderData}
                                disable={isEditing ? false : true}
                                dropdownPosition='auto'
                                search={false}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={"Select"}
                                value={'Male'}
                                onChange={item => { }}
                                showsVerticalScrollIndicator={false}
                                flatListProps={{ nestedScrollEnabled: false, }}
                                renderRightIcon={() => !isEditing ? null : <DropwDownSvgDown />}
                            />
                        </View>
                    </View>
                    <InputFieldBox
                        label={"Email Address"}
                        placeHolder='email@domain.com'
                        keyBoardType="default"
                        value={personalInfo.email}
                        onChangeText={(text) => {
                            setPersonalInfo({ ...personalInfo, email: text })
                        }
                        }
                        editable={isEditing}
                        inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack85)}
                        rootStyle={{ paddingTop: moderateScale(10), }}
                        labelStyle={fontStyles.notoSansMedium12}
                        placeholderTextColor={Colors.offBlack50}
                    />



                </View>
                <TakeSpace space={8} />
                <BackGroundLine />
                <TakeSpace space={4} />
                <View style={{ paddingHorizontal: moderateScale(16) }}>
                    <Text style={styles.fieldTxt}>
                        Appointment Mode
                    </Text>
                    <Dropdown
                        style={[styles.dropdownTest]}
                        placeholderStyle={[styles.placeHolder, { color: Colors.offBlack50 }]}
                        selectedTextStyle={[styles.placeHolder]}
                        activeColor={Colors.offBlack50}
                        itemTextStyle={fontStyles.notoSansRegular12}
                        data={appointmentTypeData}
                        dropdownPosition='auto'
                        search={false}
                        disable={isEditing ? false : true}
                        maxHeight={300}
                        labelField="label"
                        placeholder='Select appointment mode'
                        valueField="id"
                        value={"Inperson"}
                        onChange={(value) => { }}
                        showsVerticalScrollIndicator={false}
                        flatListProps={{ nestedScrollEnabled: false }}
                        renderRightIcon={() => !isEditing ? null : <DropwDownSvgDown />}
                    />
                    <TakeSpace space={4} />
                    <InputFieldBox
                        label="Practitioners Bio"
                        editable={isEditing}
                        placeHolder="Enter what describes you"
                        onChangeText={(text) => {
                            setPersonalInfo({ ...personalInfo, practionerBio: text })
                        }}
                        placeholderTextColor={Colors.offBlack50}
                        numberOfLines={4}
                        value={personalInfo.practionerBio}
                        inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack85)}
                    // errorMessage={touched.practitionersBio && errors.practitionersBio ? errors.practitionersBio : ''}
                    />
                    <InputFieldBox
                        label="Consultation Rates"
                        placeHolder="Enter your consultation rates"
                        onChangeText={(text) => {
                            setPersonalInfo({ ...personalInfo, consultantRate: text })
                        }}
                        editable={isEditing}
                        keyBoardType='number-pad'
                        // onBlur={handleBlur('consultantRate')}
                        value={personalInfo.consultantRate}
                        showDollar
                        inputValueStyle={fontStyles._notoSansRegular("NotoSans-Regular", moderateScale(14), Colors.offBlack85)}
                        placeholderTextColor={Colors.offBlack50}
                    // errorMessage={touched.consultantRate && errors.consultantRate ? errors.consultantRate : ''}
                    />

                </View>
                <TakeSpace space={50} />

                {openImgPicker && (
                    <CustomModal
                        isVisible={openImgPicker}
                        closeModal={() => setOpenImgPicker(false)}
                        children={<ImagePickerModal openGallery={openGallery} openCamera={openCamera} onClose={() => setOpenImgPicker(false)} />}
                    />
                )}
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
                                // isGregorian={false}
                                selectorStartingYear={1900}
                                selectorEndingYear={new Date().getFullYear()}
                                selected={''}
                                mode="calendar"
                                onSelectedChange={(item: any) => {
                                }}
                                onDateChange={(item: any) => setTimeout(() => { setOpen(false) }, 1000)}
                                minuteInterval={30}
                                style={{ borderRadius: moderateScale(10) }}
                            />
                        </View>
                    </Modal>
                }
            </ScrollView>
            <View style={[commonStyles.sbtBtn, {
                bottom: 0,
            }]}>
                <CustomButton
                    label={isEditing ? "Update Changes" : "Edit info"}
                    btnWidth={'100%'}
                    extraCusTxtStyle={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}
                    disabled={false}
                    onPress={handleEditMode}
                    extraCusBtnStyle={[{ borderRadius: moderateScale(4) }]}
                    paddingProp={moderateScale(12, 0.5)}
                />
            </View>
        </>
    )
}

export default PersonalInfoScreen

const styles = StyleSheet.create({
    fieldTxt: {
        ...fontStyles.notoSansSemiBold12,
        paddingVertical: moderateScale(6),
        paddingLeft: moderateScale(4),
    },
    dropdownTest: {
        height: helpers.isIos ? moderateScale(46) : moderateScale(49),
        //width: SCREEN_WIDTH * 0.40,
        backgroundColor: Colors.offBlack5,
        paddingHorizontal: moderateScale(8),
        borderRadius: moderateScale(6), borderWidth: moderateScale(0),
        borderColor: Colors.offBlack5
    },

    placeHolder: { ...fontStyles.notoSansRegular14, marginLeft: moderateScale(6), color: Colors.offBlack50 },
    datePicker: {
        selectedTextColor: Colors.offWhite,
        mainColor: Colors.primaryColor,
        backgroundColor: Colors.offWhite,
        textHeaderColor: Colors.primaryColor,
        textHeaderFontSize: moderateScale(14),
        headerFont: "NotoSans-Medium",
        textFontSize: moderateScale(12),
        daysAnimationDistance: moderateScale(10),
        defaultFont: "NotoSans-Medium",
        textSecondaryColor: Colors.offBlack,
    },

})