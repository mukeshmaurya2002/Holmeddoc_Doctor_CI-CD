import moment from 'moment'
import React, { useState } from 'react'
import { Colors } from '../../../../constants'
import { helpers } from '../../../../utility/helpers'
import { Dropdown } from 'react-native-element-dropdown'
import { moderateScale } from 'react-native-size-matters'
import { SafeAreaView } from 'react-native-safe-area-context'
import { commonStyles, fontStyles } from '../../../../styles'
import DateTimePicker from '@react-native-community/datetimepicker';
import { BackArrowSvg, DeleteButtonSvg, TimeSlotSvg } from '../../../../../assets/svg'
import { FlatList, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { CustomButton, Header, InputFieldBox, SettingToggleBtn, TakeSpace, ToggleButton } from '../../../../components'
import { SCREEN_HEIGHT } from '../../../../constants/responsive'
import DeleteLogoSvg from '../../../../../assets/svg/common/delete-logo-svg'
import { RouteProp, useRoute } from '@react-navigation/native'
import { DrawerStackScreenProps, ProfileCompleteScreenProps } from '../../../../routes/type'
import DeletePopUpModal from '../../../../routes/components/delete-popup-modal'

const AddTimeSlot = () => {
    const appointmentTypeData = [
        { id: 1, label: 'In Person' },
        { id: 2, label: 'Virtual' },
    ];
    const { params: { fromEdit = false } } = useRoute<RouteProp<ProfileCompleteScreenProps, 'AddTimeSlot'>>()
    // console.log('fromEdit', fromEdit);

    const dayData = [
        { id: 1, label: 'Monday' },
        { id: 2, label: 'Tuesday' },
        { id: 3, label: 'Wednesday' },
        { id: 4, label: 'Thursday' },
        { id: 5, label: 'Friday' },
        { id: 6, label: 'Saturday' },
        { id: 7, label: 'Sunday' },
    ];

    const [slotData, setSlotData] = useState<any>({
        day: '',
        appointmentType: '',
    });
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState<number>(0);
    console.log('deleteIndex', deleteIndex);
    const [timeSlots, setTimeSlots] = useState([
        { startTime: new Date(), showStartPicker: false, endTime: new Date(), showEndPicker: false, isActive: true }
    ]);
    const handleClose = () => {
        setShowDeletePopup(false)
    }
    const handleAddMoreSlot = () => {
        setTimeSlots([...timeSlots, { startTime: new Date(), showStartPicker: false, endTime: new Date(), showEndPicker: false, isActive: true }]);
    };

    const onStartChange = (index: number, event: any, selectedDate: any) => {
        const updatedSlots = [...timeSlots];
        updatedSlots[index].showStartPicker = false;
        if (selectedDate) {
            updatedSlots[index].startTime = selectedDate;
        }
        setTimeSlots(updatedSlots);
    };

    const onEndChange = (index: number, event: any, selectedDate: any) => {
        const updatedSlots = [...timeSlots];
        updatedSlots[index].showEndPicker = false;
        if (selectedDate) {
            updatedSlots[index].endTime = selectedDate;
        }
        setTimeSlots(updatedSlots);
    };

    const toggleDateTimePicker = (index: number, isStartPicker: boolean) => {
        const updatedSlots = [...timeSlots];
        if (isStartPicker) {
            updatedSlots[index].showStartPicker = !updatedSlots[index].showStartPicker;
        } else {
            updatedSlots[index].showEndPicker = !updatedSlots[index].showEndPicker;
        }
        setTimeSlots(updatedSlots);
    };

    const toggleSlotActive = (index: number, value: boolean) => {
        const updatedSlots = [...timeSlots];
        updatedSlots[index].isActive = value;
        setTimeSlots(updatedSlots);
    };

    const renderTimeSlotItem = ({ item, index }: { item: any, index: number }) => {
        return (
            <View style={{ width: "32%", gap: moderateScale(14), flexDirection: "row", alignItems: "center" }}>
                <InputFieldBox
                    label='Start'
                    labelStyle={[fontStyles.notoSansRegular12, { opacity: 0.75 }]}
                    inputValueStyle={fontStyles.notoSansRegular14}
                    editable={false}
                    Icon={TimeSlotSvg}
                    placeHolder=''
                    value={moment(item.startTime).format('LT').toString().toLowerCase()}
                    inputPress={() => toggleDateTimePicker(index, true)}
                />
                {item.showStartPicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={item.startTime}
                        mode="time"
                        is24Hour={false}
                        display="default"
                        onChange={(event, selectedDate) => onStartChange(index, event, selectedDate)}
                        style={{ height: SCREEN_HEIGHT * 0.45 }}
                    />
                )}
                <InputFieldBox
                    label='End'
                    labelStyle={[fontStyles.notoSansRegular12, { opacity: 0.75 }]}
                    inputValueStyle={fontStyles.notoSansRegular14}
                    editable={false}
                    Icon={TimeSlotSvg}
                    placeHolder=''
                    value={moment(item.endTime).format('LT').toLowerCase()}
                    inputPress={() => toggleDateTimePicker(index, false)}
                />
                {item.showEndPicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={item.endTime}
                        mode="time"
                        is24Hour={false}
                        display="default"
                        onChange={(event, selectedDate) => onEndChange(index, event, selectedDate)}
                        style={{ height: SCREEN_HEIGHT * 0.45 }}
                    />
                )}
                <View style={{
                    paddingTop: moderateScale(34),
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: moderateScale(10),
                }}>
                    <SettingToggleBtn
                        isOn={item.isActive}
                        color={Colors.primaryColor}
                        toggleBtn={(value: boolean) => toggleSlotActive(index, value)}
                    />
                    <Pressable onPress={() => {
                        setShowDeletePopup(true);
                        setDeleteIndex(index);
                    }}>
                        <DeleteLogoSvg />
                    </Pressable>
                </View>

            </View>
        );
    };

    const handleDeleteSlot = (index: number) => {
        console.log('index', index);
        const updatedSlots = [...timeSlots];
        updatedSlots.splice(index, 1);
        setTimeSlots(updatedSlots);
        setShowDeletePopup(false);
        setDeleteIndex(0);
    };

    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={styles.container}>
                <Header
                    label={fromEdit ? 'Edit Time Slot' : 'Add Time Slot'}
                    headText=''
                    icon={BackArrowSvg}
                />
                <ScrollView style={{ padding: moderateScale(16) }} showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
                    <Text style={styles.fieldTxt}>
                        Appointment Type
                    </Text>
                    <Dropdown
                        style={styles.dropdownTest}
                        placeholderStyle={[styles.placeHolder, { color: Colors.offBlack50 }]}
                        selectedTextStyle={styles.placeHolder}
                        activeColor={Colors.offBlack25}
                        itemTextStyle={fontStyles.notoSansRegular12}
                        data={appointmentTypeData}
                        dropdownPosition='auto'
                        search={false}
                        maxHeight={300}
                        placeholder='Select the appointment type'
                        labelField="label"
                        valueField="id"

                        value={slotData.appointmentType}
                        onChange={(value) => setSlotData({ ...slotData, appointmentType: value })}
                        showsVerticalScrollIndicator={false}
                        flatListProps={{ nestedScrollEnabled: false }}
                        iconStyle={{ tintColor: Colors.secondaryColor }}
                    />
                    <TakeSpace space={6} />
                    <Text style={styles.fieldTxt}>
                        Time slot day
                    </Text>
                    <Dropdown
                        style={styles.dropdownTest}
                        placeholderStyle={[styles.placeHolder, { color: Colors.offBlack50 }]}
                        selectedTextStyle={styles.placeHolder}
                        activeColor={Colors.offBlack25}
                        itemTextStyle={fontStyles.notoSansRegular12}
                        data={dayData}
                        dropdownPosition='auto'
                        search={false}
                        maxHeight={300}
                        labelField="label"
                        valueField="id"
                        value={slotData.day}
                        placeholder='Select the appointment day'
                        onChange={(value) => setSlotData({ ...slotData, day: value })}
                        showsVerticalScrollIndicator={false}
                        flatListProps={{ nestedScrollEnabled: false }}
                        iconStyle={{ tintColor: Colors.secondaryColor }}
                    />
                    <TakeSpace space={6} />
                    <View style={commonStyles.RowJSBAC}>
                        <Text style={styles.fieldTxt}>
                            Time slot
                        </Text>
                        <Pressable onPress={handleAddMoreSlot}>
                            <Text style={[styles.fieldTxt, { color: Colors.secondaryColor, textDecorationLine: "underline" }]}>
                                + Add more slot
                            </Text>
                        </Pressable>
                    </View>
                    <TakeSpace space={4} />
                    <View style={[commonStyles.RowJSB, { gap: moderateScale(6) }]}>
                        <FlatList
                            data={timeSlots}
                            scrollEnabled={false}
                            showsVerticalScrollIndicator={false}
                            renderItem={renderTimeSlotItem}

                            keyExtractor={(item, index) => index.toString()}
                            // numColumns={2}
                            ItemSeparatorComponent={() => <TakeSpace space={moderateScale(8)} />}

                        />
                    </View>
                    <TakeSpace space={50} />

                </ScrollView>
                <View style={[commonStyles.sbtBtn, { bottom: 0 }]}>
                    <CustomButton
                        label={fromEdit ? 'Update' : 'Add'}
                        btnWidth={'100%'}
                        extraCusTxtStyle={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}
                        paddingProp={moderateScale(12, 0.5)}
                    />
                </View>
                {
                    showDeletePopup &&
                    <DeletePopUpModal
                        handleDelete={() => handleDeleteSlot(deleteIndex)}
                        handleClose={handleClose}
                    />
                }
            </View>
        </>
    );
};

export default AddTimeSlot;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.offWhite,
    },
    fieldTxt: {
        ...fontStyles.notoSansSemiBold12,
        paddingVertical: moderateScale(6),
        paddingLeft: moderateScale(4),
    },
    dropdownTest: {
        height: helpers.isIos ? moderateScale(46) : moderateScale(50),
        width: "100%",
        backgroundColor: Colors.offBlack5,
        paddingHorizontal: moderateScale(8),
        borderRadius: moderateScale(4),
        borderWidth: moderateScale(0.8),
        borderColor: Colors.offBlack5,
    },
    placeHolder: {
        ...fontStyles.notoSansRegular14,
        marginLeft: moderateScale(6),
    },
});
