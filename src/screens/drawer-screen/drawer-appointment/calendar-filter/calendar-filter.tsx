import React from 'react';
import { Colors } from '../../../../constants';
import { Header } from '../../../../components';
import { commonStyles } from '../../../../styles';
import { helpers } from '../../../../utility/helpers';
import { moderateScale } from 'react-native-size-matters';
import { Agenda, DateData } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AgendaEntry, AgendaSchedule } from 'react-native-calendars/src/types';

const dataItem = {
    "2024-07-01": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-07-01" }],
    "2024-07-02": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-07-02" }],
    "2024-07-03": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-07-03" }],
    "2024-07-04": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-07-04" }],
    "2024-07-05": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-07-05" }],
    "2024-07-06": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-07-06" }],
    "2024-07-07": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-07-07" }],
    "2024-07-08": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-07-08" }],
    "2024-07-09": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-07-08" }],
    "2024-07-10": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-07-08" }],
    "2024-07-11": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-07-08" }],
    "2024-07-12": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-06-24" },],
    "2024-07-13": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-06-25" }],
    "2024-07-14": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-06-26" }],
    "2024-07-15": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-06-27" }],
    "2024-07-16": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-06-28" },],
    "2024-07-17": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-06-29" }],
    "2024-07-18": [{ "name": "Testing List Item", "height": moderateScale(40), "day": "2024-06-30" }],

}

const CalenderFilter = () => {
    const [items, setItems] = React.useState<AgendaSchedule>({});

    const timeToString = (time: number) => {
        const date = new Date(time);
        return date.toISOString().split('T')[0];
    };

    const loadItems = (day: DateData) => {
        setTimeout(() => {
            const newItems = { ...items };
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);

                if (!newItems[strTime]) {
                    newItems[strTime] = [];

                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        newItems[strTime].push({
                            name: 'Testing List Item ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150)),
                            day: strTime
                        });
                    }
                }
            }
            setItems(newItems);
        }, 1000);
    };

    const renderEmptyDate = () => {
        return (
            <View style={commonStyles.centerJCAC}>
                <Text>This is empty date!</Text>
            </View>
        );
    };

    const renderItem = (item: AgendaEntry, isFirst: boolean) => {
        const fontSize = isFirst ? 16 : 14;
        const color = isFirst ? Colors.offBlack : Colors.offBlack;

        return (
            <>
                <Pressable
                    style={[styles.item, { height: item.height }]}
                    onPress={() => { }}
                >
                    <Text style={{ fontSize, color }}>{item.name}</Text>
                </Pressable>
            </>
        );
    };

    const rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
        return r1.name !== r2.name;
    };
    const reservationsKeyExtractor = (item: any, index: number) => {
        return `${item?.reservation?.day}${index}`;
    };

    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={commonStyles._flexOneBg(Colors.bgGreen)}>
                <Header label='Appointment' rootStyle={{ height: moderateScale(60) }} />
                <Agenda
                    items={dataItem}
                    loadItemsForMonth={loadItems}
                    selected={'2024-07-09'}
                    renderItem={renderItem}
                    renderEmptyDate={renderEmptyDate}
                    rowHasChanged={rowHasChanged}
                    showClosingKnob={true}
                    hideExtraDays={false}
                    reservationsKeyExtractor={reservationsKeyExtractor}
                />
            </View>
        </>
    );
};

export default CalenderFilter;

const styles = StyleSheet.create({
    item: {
        flex: 1,
        backgroundColor: Colors.greenCyanBg,
        padding: moderateScale(10),
        borderRadius: moderateScale(5),
        marginRight: moderateScale(6),
        marginTop: moderateScale(10),
        paddingBottom: moderateScale(10),
    },
});