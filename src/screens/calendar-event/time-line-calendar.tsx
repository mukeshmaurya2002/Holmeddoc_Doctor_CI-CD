import React, { useCallback, useState } from 'react';
import { FlatList, Pressable, SectionList, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import {
    ExpandableCalendar,
    CalendarProvider,
    CalendarUtils,
    TimelineEventProps,
} from 'react-native-calendars';
import { groupBy } from 'lodash';

import { timelineEvents, getDate } from './timeline-events';
import { BackArrowSvg, BackGroundLine, KnobDownArrowSvg, StatusBlock, TodaySvg, WeekSvg } from '../../../assets/svg';
import CalendarEventScreen from './calendar-event';
import { Colors } from '../../constants';
import { moderateScale } from 'react-native-size-matters';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BorderBottom, Header, TakeSpace } from '../../components';
import { helpers } from '../../utility/helpers';
import { useAppSelector } from '../../redux/hook';
import { commonStyles, fontStyles } from '../../styles';
import { Theme } from 'react-native-calendars/src/types';
import LeftArrowSvg from '../../../assets/svg/common/left-arrow-svg';
import RightArrowSvg from '../../../assets/svg/common/right-arrow-svg';
interface WeekAppointmentsProps { id: number; job?: string; name?: string; time?: string; noAppointment?: string; leave?: string }

interface WeekDataProps {
    id: number,
    label: string,
    weekAppointments: WeekAppointmentsProps[]
}

const WeekData: WeekDataProps[] = [
    {
        id: 1,
        label: '10th June',
        weekAppointments: [
            {
                id: 1,
                job: 'Psychiatrist',
                name: 'Harsh . P',
                time: '8:00 am'
            },
            {
                id: 2,
                job: 'Psychiatrist',
                name: 'Harsh . P',
                time: '8:00 am'
            },
            {
                id: 3,
                noAppointment: 'No Appointment',
            },
        ]
    },
    {
        id: 2,
        label: '11th June',
        weekAppointments: [
            {
                id: 1,
                leave: 'Leave',
                time: '8:00 am'
            },
        ]
    },
    {
        id: 3,
        label: '12th June',
        weekAppointments: [
            {
                id: 1,
                job: 'Psychiatrist',
                name: 'Harsh . P',
                time: '8:00 am'
            },
            {
                id: 2,
                job: 'Psychiatrist',
                name: 'Harsh . P',
                time: '8:00 am'
            },
            {
                id: 3,
                noAppointment: 'No ',
            },
        ]
    },
    {
        id: 4,
        label: '12th June',
        weekAppointments: [
            {
                id: 1,
                job: 'Psychiatrist',
                name: 'Harsh . P',
                time: '8:00 am'
            },
            {
                id: 2,
                job: 'Psychiatrist',
                name: 'Harsh . P',
                time: '8:00 am'
            },
            {
                id: 3,
                noAppointment: 'No Appointment',
            },
        ]
    },
    {
        id: 5,
        label: '11th June',
        weekAppointments: [
            {
                id: 1,
                leave: 'Leave',
                time: '8:00 am'
            },
        ]
    },
    {
        id: 6,
        label: '12th June',
        weekAppointments: [
            {
                id: 1,
                job: 'Psychiatrist',
                name: 'Harsh . P',
                time: '8:00 am'
            },
            {
                id: 2,
                job: 'Psychiatrist',
                name: 'Harsh . P',
                time: '8:00 am'
            },
            {
                id: 3,
                noAppointment: 'No Appointment',
            },
        ]
    },

];

// const INITIAL_TIME = { hour: 9, minute: 0 };
const EVENTS = timelineEvents;
const TimelineCalendarScreen: React.FC<any> = ({ events }) => {
    const [currentDate, setCurrentDate] = useState<string>(getDate());
    const [dropdown, setDropdown] = useState('Today');
    const [open, setOpen] = useState(false);
    const { eventChangeDate } = useAppSelector(state => state.common);
    //  make a section to render week

    const sections = WeekData.map((day) => ({
        title: day.label,
        data: day.weekAppointments,
    }));



    const statusData = [{ label: 'Virtual', colorBg: Colors.successFaded }, { label: 'In-Person', colorBg: Colors.primary50 }, { label: 'Null', colorBg: Colors.null50 }, { label: 'Leave', colorBg: Colors.danger50 }]
    const handleDropdown = (value: string) => { setDropdown(value); setOpen(false) }
    const test = getDate()
    const eventsByDate = groupBy(events, (e: any) => CalendarUtils.getCalendarDateString(e.start)) as {
        [key: string]: TimelineEventProps[];
    };
    const [eventsState, setEventsState] = useState<TimelineEventProps[]>(eventsByDate[currentDate] || EVENTS) as [TimelineEventProps[], any];


    const onDateChanged = (date: string, source: any) => {
        console.log('TimelineCalendarScreen onDateChanged: ', date, source);
        setCurrentDate(date);
        // dispatch(setCurrentDate(date))
    };

    const onMonthChange = (month: any, updateSource: any) => {
        console.log('TimelineCalendarScreen onMonthChange: ', month, updateSource);
    };

    const onEventDateChanged = useCallback((date: string) => {
        setCurrentDate(date)
        // dispatch(setCurrentDate(date))
        console.log(date, "date")
    }, [eventChangeDate, currentDate])


    const _renderStatus = ({ item, index }: { item: { label: string, colorBg: string }, index: number }) => {
        return (
            <>
                <TakeSpace space={moderateScale(4)} />
                <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6) }]}>
                    <StatusBlock bgColor={item.colorBg} />
                    <Text style={fontStyles.notoSansRegular10}>{item.label}</Text>
                </View>
                <TakeSpace space={moderateScale(4)} />
            </>
        )
    };

    const _renderWeekHeader = ({ item }: { item: string }) => {
        return (
            <>
                <TakeSpace space={moderateScale(6)} />
                <View style={commonStyles.RowJFEAC}>
                    <Text style={[fontStyles.notoSansSemiBold12, { width: '20%' }]}>{item}</Text>
                    <View style={{ width: '80%', height: moderateScale(1), backgroundColor: Colors.offBlack, opacity: 0.1 }} />
                </View>
                <TakeSpace space={moderateScale(6)} />
            </>
        )
    };

    const _renderWeek = ({ item }: { item: WeekAppointmentsProps }) => (
        <View style={{ padding: moderateScale(4) }}>
            {item.job && (
                <View style={styles.appnmtCont}>
                    <View style={commonStyles.RowJSBAC}>
                        <Text style={fontStyles.notoSansMedium12}>{item.job}</Text>
                        <Text style={[fontStyles.notoSansRegular10, { opacity: 0.75 }]}>{item.time}</Text>
                    </View>
                    <Text style={[fontStyles.notoSansRegular10]}>{item.name}</Text>
                </View>
            )}
            {item.noAppointment && (
                <View style={[commonStyles.RowJSBAC, styles.noApptCont]}>
                    <Text style={fontStyles.notoSansMedium12}>{item.noAppointment}</Text>
                    <Text style={[fontStyles.notoSansRegular10, { opacity: 0.75 }]}>{item.time}</Text>
                </View>
            )}
            {item.leave &&
                <View style={[commonStyles.RowJSBAC, styles.noApptCont, { backgroundColor: Colors.danger50 }]}>
                    <Text style={fontStyles.notoSansMedium12}>{item.leave}</Text>
                    <Text style={[fontStyles.notoSansRegular10, { opacity: 0.75 }]}>{item.time}</Text>
                </View>
            }
        </View>
    );
    const CustomCalendarHeader = ({ date }) => {
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const today = new Date().getDay(); // Get the current day of the week (0-6)

        return (
            <View style={styles.headerContainer}>
                {daysOfWeek.map((day, index) => (
                    <>
                        <Text
                            key={index}
                            style={[styles.dayHeader, today === index && styles.currentDayHeader]}
                        >
                            {day}
                        </Text>
                        <Text style={[styles.dayHeader, today === index && styles.currentDayHeader]}>
                            10
                        </Text>
                    </>
                ))}
            </View>
        );
    };
    const dayWeekData: { [key: number]: string } = {
        0: 'Sun',
        1: 'Mon',
        2: 'Tue',
        3: 'Wed',
        4: 'Thu',
        5: 'Fri',
        6: 'Sat',
    }
    const geturrentDayIndex = dayWeekData[new Date().getDay()]
    console.log(geturrentDayIndex, "geturrentDayIndex")
    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <Header
                label='Appointment'
                headText=''
                icon={BackArrowSvg}
            />
            <CalendarProvider
                date={currentDate}
                onDateChanged={onDateChanged}
                onMonthChange={onMonthChange}
                // showTodayButton

                disabledOpacity={0.6}
            >
                <ExpandableCalendar
                    theme={
                        {
                            ...CalenderStyle,
                            'stylesheet.calendar.header': {
                                dayTextAtIndex0: {
                                    color: geturrentDayIndex == "Mon" ? Colors.secondaryColor : Colors.offBlack75,
                                },
                                dayTextAtIndex1: {
                                    color: geturrentDayIndex == "Tue" ? Colors.secondaryColor : Colors.offBlack75
                                },
                                dayTextAtIndex2: {
                                    color: geturrentDayIndex == "Wed" ? Colors.secondaryColor : Colors.offBlack75
                                },
                                dayTextAtIndex3: {
                                    color: geturrentDayIndex == "Thu" ? Colors.secondaryColor : Colors.offBlack75
                                },
                                dayTextAtIndex4: {
                                    color: geturrentDayIndex == "Fri" ? Colors.secondaryColor : Colors.offBlack75
                                },
                                dayTextAtIndex5: {
                                    color: geturrentDayIndex == "Sat" ? Colors.secondaryColor : Colors.offBlack75
                                },
                                dayTextAtIndex6: {
                                    color: geturrentDayIndex == "Sun" ? Colors.secondaryColor : Colors.offBlack75,

                                },

                                header: {
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',

                                    // paddingLeft: 10,
                                    // paddingRight: 10,
                                    // marginTop: 10,
                                    // marginBottom: 10,
                                },
                                // week: {
                                //     marginTop: 7,
                                //     flexDirection: 'row',
                                //     justifyContent: 'space-around',
                                // },

                            }
                        }
                    }
                    contentContainerStyle={{
                        paddingHorizontal: moderateScale(16),
                    }}
                    // dayComponent={({ date }) => {
                    //     return (
                    //         <View style={{ width: moderateScale(32), height: moderateScale(32), borderRadius: moderateScale(16), justifyContent: 'center', alignItems: 'center', backgroundColor: date.dateString === currentDate ? Colors.fadedSecondary : 'transparent' }}>
                    //             <Text style={[fontStyles.notoSansMedium12, { color: date.dateString === currentDate ? Colors.offBlack : Colors.offBlack75 }]}>{date.day}</Text>
                    //         </View>
                    //     )
                    // }}
                    // firstDay={1}
                    renderArrow={(direction) => direction === 'left' ? <LeftArrowSvg /> : <RightArrowSvg />}
                    markedDates={{
                        [currentDate]: { selected: true, disableTouchEvent: true, selectedColor: Colors.fadedSecondary }
                    }}

                    animateScroll
                />
                <BackGroundLine />
                <View style={{ backgroundColor: Colors.offWhite }}>
                    <View style={[commonStyles.RowJSBAC, { padding: moderateScale(10) }]}>
                        <View>
                            <Text style={fontStyles.notoSansSemiBold14}>10th June</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.8} style={[commonStyles.RowJFSAC, styles.toggleCont, { backgroundColor: open ? '#F5FBFC' : Colors.offWhite, }]} onPress={() => setOpen(!open)}>
                            {dropdown == 'Today' ? <TodaySvg /> : <WeekSvg />}
                            <Text style={fontStyles.notoSansMedium12}>{dropdown}</Text>
                            <Pressable style={[open && styles.open]} onPress={() => setOpen(!open)}><KnobDownArrowSvg /></Pressable>
                        </TouchableOpacity>
                        <View style={[styles.absolueDropDown, {
                            padding: moderateScale(2),
                            backgroundColor: open ? '#F5FBFC' : 'transparent',
                            width: moderateScale(95)
                        }]}>
                            {open &&
                                <View style={{ rowGap: moderateScale(6) }}>
                                    <Pressable onPress={() => handleDropdown('Today')} style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6) }]}>
                                        <TodaySvg />
                                        <Text style={fontStyles.notoSansMedium12}>Today</Text>
                                    </Pressable>
                                    <Pressable onPress={() => handleDropdown('Week')} style={[commonStyles.RowJFSAC, { columnGap: moderateScale(6) }]}>
                                        <WeekSvg />
                                        <Text style={fontStyles.notoSansMedium12}>Week</Text>
                                    </Pressable>
                                </View>
                            }
                        </View>
                    </View>
                    <FlatList
                        horizontal
                        data={statusData}
                        renderItem={_renderStatus}
                        style={styles.indicatorCont}
                    />
                    <TakeSpace space={moderateScale(12)} />
                </View>
                {dropdown === 'Today' ?
                    <>
                        <CalendarEventScreen
                            events={eventsState}
                            currentDate={currentDate}
                        />
                    </>

                    : dropdown === 'Week' ?
                        <View style={{ paddingHorizontal: moderateScale(16), ...commonStyles._flexOneBg(Colors.offWhiteBg) }}>
                            <SectionList
                                sections={sections}
                                renderItem={_renderWeek}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => item.id.toString()}
                                ListFooterComponent={() => <TakeSpace />}
                                renderSectionHeader={({ section: { title } }) => (_renderWeekHeader({ item: title }))}
                            />
                        </View>
                        :
                        null
                }
            </CalendarProvider >
        </>
    );
};

export default TimelineCalendarScreen;


const styles = StyleSheet.create({
    dropdownContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: moderateScale(10),
        marginHorizontal: moderateScale(20),
    },
    dropdownLabel: {
        marginRight: moderateScale(10),
        fontSize: moderateScale(16),
        color: Colors.offBlack,
    },
    dropdown: {
        flex: 1,
    },
    calendar: {
        paddingLeft: moderateScale(10),
        paddingRight: moderateScale(10),
        backgroundColor: Colors.offWhite,
    },
    arrowContainer: {
        padding: moderateScale(10),
    },
    knob: {
        width: 40,
        height: 5,
        backgroundColor: 'black',
        borderRadius: 2.5,
        alignSelf: 'center',
        marginVertical: 10,
    },
    open: {
        transform: [{ rotate: '180deg' }]
    },
    absolueDropDown: {
        zIndex: 1,
        position: 'absolute',
        right: moderateScale(10),
        top: moderateScale(40),
        paddingLeft: moderateScale(9)
    },
    dropDOwnCOnt: {
        backgroundColor: Colors.primary50,
        borderRadius: moderateScale(8),
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(2),
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        marginBottom: 8,
    },
    dayHeader: {
        color: Colors.offBlack,  // Default color for day headers
        fontFamily: 'NotoSans',
        fontWeight: '500',
        fontSize: moderateScale(14),
    },
    currentDayHeader: {
        color: Colors.secondaryColor,  // Color for the current day header
    },
    indicatorCont: { alignSelf: 'flex-end', paddingHorizontal: moderateScale(16), paddingVertical: moderateScale(8), paddingBottom: moderateScale(2) },
    appnmtCont: { rowGap: moderateScale(6), backgroundColor: Colors.success50, padding: moderateScale(10), borderRadius: moderateScale(8) },
    noApptCont: { backgroundColor: Colors.null50, padding: moderateScale(6), paddingHorizontal: moderateScale(10), borderRadius: moderateScale(8), },
    toggleCont: { columnGap: moderateScale(6), paddingHorizontal: moderateScale(6), paddingVertical: moderateScale(2), paddingLeft: moderateScale(9) },
});

// You may need to implement or import LeftArrow and RightArrow components for custom arrows
const CalenderStyle = {

    monthTextColor: Colors.offBlack,
    dayTextColor: Colors.offBlack,
    selectedDayTextColor: Colors.secondaryColor,
    todayTextColor: Colors.secondaryColor,
    selectedDayBackgroundColor: Colors.fadedSecondary,
    textDayStyle: {
        ...fontStyles.notoSansSemiBold14,
        color: Colors.offBlack75
    },
    //for month text
    textMonthFontFamily: 'NotoSans',
    textMonthFontWeight: 'bold',
    textMonthFontSize: moderateScale(14),

    //for day text
    textDayFontFamily: 'NotoSans',
    textDayFontWeight: '500',
    textDayFontSize: moderateScale(12),


    //highlighted the current date day 
    textDayHeaderFontFamily: 'NotoSans',
    textDayHeaderFontWeight: '500',
    textDayHeaderFontSize: moderateScale(14),
    textDayHeaderColor: Colors.secondaryColor,


    // 'stylesheet.calendar.header': {
    //     // dayTextAtIndex0: {
    //     //     color: 'red'
    //     // },
    //     //current day text color
    //     dayTextAtIndex6: {
    //         color: Colors.secondaryColor
    //     },
    // }

} as Theme