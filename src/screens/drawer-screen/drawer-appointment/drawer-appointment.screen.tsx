import React from 'react';
import { commonStyles } from '../../../styles';
import { Colors } from '../../../constants';
import { helpers } from '../../../utility/helpers';
import { moderateScale } from 'react-native-size-matters';
import AppointmentCard from './components/appointment-card';
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDrawerAppointment } from './drawer-appointment.hook';
import { AppoinmentListingData } from '../../../utility/constant';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { DateInputField, Header, TakeSpace } from '../../../components';
import DrawerAppointmentFilter from './components/filter/drawer-appointment-filter';
import AppointmentCalendarSvg from '../../../../assets/svg/common/appointment-calendar-svg';

import { BackArrowSvg, OrangeSvgFilter, SearchSvg, YellowCalenderSvg } from '../../../../assets/svg';
/*
This screen is used to to check the user appointment status
*/


const DrawerAppointment = () => {
    const { navigateTo, isVisible, closeModal, openModal } = useDrawerAppointment();
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={commonStyles._flexOneBg(Colors.bgGreen)}>
                <Header
                    label='Appointments'
                    icon={BackArrowSvg}
                    rootStyle={{ height: moderateScale(60) }}
                />
                <View style={{ backgroundColor: Colors.offWhite }}>
                    <TakeSpace space={moderateScale(6)} />
                    <DateInputField
                        leftIcon={SearchSvg}
                        placeHolder='Search here'
                        rightSideContent={<OrangeSvgFilter />}
                        rootStyle={{ width: '92%', alignSelf: 'center' }}
                        pressContStyle={[{ paddingHorizontal: moderateScale(10), borderColor: Colors.offBlack5 }]}
                        onPress={openModal}
                    />
                    <TakeSpace space={moderateScale(6)} />
                </View>
                <FlatList
                    data={AppoinmentListingData}
                    contentContainerStyle={{ paddingVertical: moderateScale(10) }}
                    keyExtractor={(item, index) => item.id.toString() || index.toString()}
                    ItemSeparatorComponent={() => (<TakeSpace space={moderateScale(4)} />)}
                    ListFooterComponent={() => (<TakeSpace space={moderateScale(16)} />)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, index }) => {
                        return (
                            <AppointmentCard item={item} index={index} />
                        )
                    }}
                />

            </View>
            <View style={{ position: "absolute", bottom: moderateScale(14), right: moderateScale(20) }}>
                <Pressable onPress={() => navigateTo("DrawerScreen", { screen: "AppointmentCalendar" })}>
                    <AppointmentCalendarSvg />
                </Pressable>
            </View>
            {/* <Pressable style={{ position: 'absolute', bottom: moderateScale(10), right: moderateScale(10), zIndex: 9999 }} onPress={() => navigateTo('CalenderFilter')}>
                <YellowCalenderSvg />
            </Pressable> */}
            <DrawerAppointmentFilter isVisible={isVisible} closeModal={closeModal} />
        </>
    )
}

export default DrawerAppointment

const styles = StyleSheet.create({
    apptBtn: { padding: moderateScale(10), backgroundColor: Colors.offWhite, borderTopWidth: moderateScale(1), borderTopColor: Colors.offBlack25 },
})