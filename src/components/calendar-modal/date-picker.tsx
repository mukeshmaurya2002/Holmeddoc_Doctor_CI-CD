import React from 'react';
import moment from 'moment';
import Modal from 'react-native-modal'
import { Colors } from '../../constants';
import { StyleSheet, View } from 'react-native'
import { moderateScale } from 'react-native-size-matters';
import { SCREEN_HEIGHT } from '../../constants/responsive';
import { Calendar, DateData } from 'react-native-calendars';

type filterProps = {
    isVisible?: boolean;
    closeModal?: () => void;
    setDate?: (value: any) => void;
}


const DatePicker = (props: filterProps) => {
    const { isVisible, closeModal, setDate } = props;

    const [selectedDate, setSelectedDate] = React.useState(moment(new Date()).format('YYYY-MM-DD'));

    const isDateDisabled = (date: string) => {
        const currentDate = moment(new Date()).format('YYYY-MM-DD');
        const selectedDate = moment(new Date(date)).format('YYYY-MM-DD');
        if (selectedDate === currentDate) {
            return;
        } else {
            return selectedDate < currentDate;
        }
    };

    const handleDate = (date: string) => {
        setSelectedDate(date);
        setDate?.(date);
        closeModal?.()
    }

    const markedDates: any = { [selectedDate]: { selected: true, disableTouchEvent: true } };

    // Mark previous dates with a different color
    const currentDate = moment(new Date()).format('YYYY-MM-DD');
    for (let i = moment(currentDate).subtract(1, 'days'); i.isAfter('2022-01-01', 'days'); i.subtract(1, 'days')) {
        markedDates[i.format('YYYY-MM-DD')] = { disabled: true, disableTouchEvent: true, dotColor: 'red' };
    }



    return (
        <Modal
            isVisible={isVisible}
            animationIn={'slideInUp'}
            animationInTiming={600}
            onBackButtonPress={closeModal}
            animationOut={'slideOutDown'}
            backdropOpacity={0.1}
            onBackdropPress={closeModal}
        >
            <View style={{ height: SCREEN_HEIGHT * 0.45 }}>
                <Calendar
                    disableAllTouchEventsForDisabledDays={true}
                    hideExtraDays
                    style={styles.cont}
                    onDayPress={(date: DateData) => {
                        if (!isDateDisabled(date.dateString)) {
                            handleDate(date.dateString)
                        }
                    }}
                    markedDates={markedDates}
                    theme={{
                        backgroundColor: Colors.offWhite,
                        calendarBackground: Colors.offWhite,
                        textSectionTitleColor: '#b6c1cd',
                        selectedDayBackgroundColor: Colors.primaryColor,
                        selectedDayTextColor: Colors.offWhite,
                        todayTextColor: Colors.primaryColor,
                        dayTextColor: '#2d4150',
                        textDisabledColor: Colors.offBlack25,
                        arrowColor: Colors.primaryColor,
                        textDayFontFamily: 'NotoSans-Medium',
                        textDayFontSize: moderateScale(14, 0.3),
                        textMonthFontFamily: 'NotoSans-Medium',
                        textMonthFontSize: moderateScale(16, 0.3),
                        todayButtonFontFamily: 'NotoSans-Medium',
                        todayButtonFontSize: moderateScale(14, 0.3),
                        textDayHeaderFontFamily: 'NotoSans-Medium',
                        textDayHeaderFontSize: moderateScale(12, 0.3),
                    }}
                />
            </View>

        </Modal>
    )
}

export default DatePicker

const styles = StyleSheet.create({
    cont: { height: 'auto', borderRadius: moderateScale(8), padding: moderateScale(10), },
})