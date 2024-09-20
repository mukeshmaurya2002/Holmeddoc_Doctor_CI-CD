import React from 'react'

import { moderateScale } from 'react-native-size-matters'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Animated, FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import { commonStyles, fontStyles } from '../../styles'
import { Colors } from '../../constants'
import { helpers } from '../../utility/helpers'
import { useAppointmentDetails } from '../drawer-screen/drawer-appointment/appointment-details/appointment-details.hook'
import { BorderBottom, Header, TakeSpace } from '../../components'
import { BackArrowSvg, CopySvg, DrVisitTypeSvg, OrangeForwarArrow } from '../../../assets/svg'

interface ScheduleTileProps { label: string, value: string, txtColor?: string };
interface OtherTileProps { label: string, value: string, Icon?: React.ReactNode };
interface ItemProps { id: number, label: string };

const ScheduleTile = React.memo(({ label, value, txtColor }: ScheduleTileProps) => {
    return (
        <View style={commonStyles.RowJSBAC}>
            <View style={{ width: '45%' }}>
                <Text style={[fontStyles.notoSansRegular14, { opacity: 0.5 }]}>{label}</Text>
            </View>
            <Text style={[fontStyles.notoSansMedium14, { color: txtColor ? txtColor : Colors.offBlack }]}>{value}</Text>
        </View>
    )
});

const OtherTile = React.memo(({ label, value, Icon }: OtherTileProps) => {
    return (
        <View style={commonStyles.RowJSB}>
            <Text style={[fontStyles.notoSansRegular14, { opacity: 0.5 }]}>{label}</Text>
            <Pressable style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6) }]}>
                {Icon}
                <Text style={[fontStyles.notoSansMedium14, {
                    color: Colors.primaryColor
                }]}>{value}</Text>
            </Pressable>
        </View>
    )
});


const CalendarAppointmentDetails = () => {
    const { navigateTo, selected, setSelected, otherData, borderWidthAnim } = useAppointmentDetails();

    let name = 'Dr Rex';
    let visitType = 'In Person';

    const getAppmntStaus = React.useCallback((status: string) => (helpers.statusColors[status] || { textColor: Colors.offBlack, backColor: Colors.offBlack5 }), []);
    const SectionHeader = React.memo(({ label }: { label: string }) => (<Text style={fontStyles.notoSansMedium14}>{label}</Text>));


    const renderOtherItem = React.useCallback(({ item }: { item: ItemProps }) => {
        const isSelected = selected === item.id;
        const borderWidth = borderWidthAnim.current[item.id];
        return (
            <Pressable onPress={() => setSelected(item.id)} style={{ paddingRight: moderateScale(30) }}>
                <Text style={[styles.txt, isSelected && styles.selectTxt]}>{item.label}</Text>
                <Animated.View style={[styles.bottBord, isSelected && styles.selctBottBord, { width: borderWidth }]} />
            </Pressable>
        );
    }, [selected]);


    const renderAppointmentDetails = () => {
        return (
            <>
                <View style={[styles.container]}>
                    <View style={{ width: '15%' }}>
                        <View style={styles.circle}>
                            <Text style={fontStyles.notoSansSemiBold20}>{name ? name.charAt(0) : 'N'}</Text>
                        </View>
                    </View>
                    <View style={{ rowGap: moderateScale(4) }}>
                        <Text style={fontStyles.notoSansSemiBold16}>{name}</Text>
                        <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(4) }]}>
                            <DrVisitTypeSvg />
                            <Text style={fontStyles.notoSansMedium12}>{visitType}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ rowGap: moderateScale(10), padding: moderateScale(16), backgroundColor: Colors.offWhite }}>
                    <BorderBottom />
                    <SectionHeader label='Schedule details' />
                    <ScheduleTile label='Appointment ID' value='#OTET201834' />
                    <ScheduleTile label='Time' value='8:00 am' />
                    {/* <ScheduleTile label='Appointment status' value={'Completed'} txtColor={getAppmntStaus('Completed').textColor} />
                    <ScheduleTile label='Visit type' value='In Person' />
                    <ScheduleTile label='Time Slot' value='10:00 am - 12:00 pm' /> */}
                    <ScheduleTile label='Date' value='30th May 2024' />
                    <OtherTile label='Meet link' value='Click here to join' Icon={<CopySvg />} />



                </View>

            </>
        )
    };


    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={commonStyles._flexOneBg(Colors.offWhite)}>
                <Header
                    label='Appointment Details'
                    icon={BackArrowSvg}
                />
                <FlatList
                    data={[1]}
                    // contentContainerStyle={{ padding: moderateScale(16) }}
                    renderItem={renderAppointmentDetails}
                    showsVerticalScrollIndicator={false}
                />
            </View >
        </ >
    )
}

export default CalendarAppointmentDetails

const styles = StyleSheet.create({
    circle: { width: moderateScale(48), height: moderateScale(48), borderRadius: moderateScale(24), backgroundColor: Colors.fadedPink, ...commonStyles.centerJCAC },
    container: { columnGap: moderateScale(4), ...commonStyles.RowJFSAC, backgroundColor: Colors.offWhite, paddingHorizontal: moderateScale(16), paddingTop: moderateScale(16) },
    bottBord: { backgroundColor: Colors.offBlack50, height: moderateScale(1) },
    selctBottBord: { backgroundColor: Colors.primaryColor, height: moderateScale(2) },
    txt: { ...fontStyles.notoSansRegular16, opacity: 0.75 },
    selectTxt: { ...fontStyles.notoSansMedium16, opacity: 0.75 },
})