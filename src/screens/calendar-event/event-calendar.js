import React, { useState, useRef, useEffect } from 'react';
import {
    VirtualizedList,
    View,
    FlatList
} from 'react-native';
import moment from 'moment';
import _ from 'lodash';

import styleConstructor from './style';
import DayView from './day-view';

const EventCalendar = (props) => {
    const styles = styleConstructor(props.styles);
    const initialDate = moment(props.initDate);
    const [date, setDate] = useState(initialDate);
    const [index, setIndex] = useState(props.size);
    const calendarRef = useRef(null);

    const {
        size = 30,
        initDate = new Date(),
        formatHeader = 'DD MMMM YYYY',
        width,
        format24h,
        scrollToFirst,
        headerStyle,
        renderEvent,
        eventTapped,
        events,
        virtualizedListProps,
        onEventDateChanged
    } = props;

    const _getItemLayout = (data, index) => {
        return { length: width, offset: width * index, index, };
    };

    const _getItem = (events, index) => {
        const date = moment(initDate).add(index - size, 'days');
        return _.filter(events, event => {
            const eventStartTime = moment(event.start);
            return eventStartTime >= date.clone().startOf('day') &&
                eventStartTime <= date.clone().endOf('day');
        });
    };

    const _renderItem = ({ index, item }) => {
        const date = moment(initDate).add(index - size, 'days');
        return (

            <DayView
                date={date}
                index={index}
                format24h={format24h}
                formatHeader={formatHeader}
                headerStyle={headerStyle}
                renderEvent={renderEvent}
                eventTapped={eventTapped}
                events={item}
                width={width}
                styles={styles}
                scrollToFirst={scrollToFirst}
            />
        );
    };
    // const handleMomentumScrollEnd = (event) => {
    //     const newIndex = Math.round(event.nativeEvent.contentOffset.x / width); // Use Math.round to avoid skipping dates
    //     const newDate = moment(initDate).add(newIndex - size, 'days');
    //     console.log('handleMomentumScrollEnd newIndex: ', newIndex);
    //     console.log('handleMomentumScrollEnd newDate: ', newDate.format('YYYY-MM-DD'));
    //     // dispatch(setCurrentDate(newDate.format('YYYY-MM-DD')))
    //     setIndex(newIndex);
    //     setDate(newDate);
    //     if (onEventDateChanged) {
    //         onEventDateChanged(newDate.format('YYYY-MM-DD'));
    //     }
    // };

    // const handleMomentumScrollEnd = (event) => {
    //     const newIndex = parseInt(event.nativeEvent.contentOffset.x / width);
    //     const newDate = moment(initDate).add(newIndex - size, 'days');
    //     console.log('handleMomentumScrollEnd newIndex: ', newIndex);
    //     console.log('handleMomentumScrollEnd newDate: ', newDate.format('YYYY-MM-DD'));
    //     // dispatch(setEventChangeDate(newDate.format('YYYY-MM-DD')))
    //     dispatch(setCurrentDate(newDate.format('YYYY-MM-DD')))
    //     setIndex(newIndex);
    //     setDate(newDate);
    //     if (onEventDateChanged) {
    //         onEventDateChanged(newDate.format('YYYY-MM-DD'));
    //     }
    // };

    console.log(events, 'events')
    return (
        <View style={[styles.container]}>
            {/* <VirtualizedList
                ref={calendarRef}
                windowSize={2}
                initialNumToRender={2}
                initialScrollIndex={size}
                data={events}
                getItemCount={() => size * 2}
                getItem={_getItem}
                keyExtractor={(item, index) => index.toString()}
                getItemLayout={_getItemLayout}
                horizontal
                pagingEnabled
                renderItem={_renderItem}
                style={{ width: width }}
                onMomentumScrollEnd={handleMomentumScrollEnd}
                {...virtualizedListProps}
            /> */}
            <VirtualizedList
                ref={calendarRef}
                windowSize={2}
                initialNumToRender={2}
                initialScrollIndex={size}
                data={events}
                getItemCount={() => size * 2}
                getItem={_getItem}
                keyExtractor={(item, index) => index.toString()}
                getItemLayout={_getItemLayout}
                horizontal
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                pagingEnabled={false}
                renderItem={_renderItem}
                style={{ width: width, }}
                //  onMomentumScrollEnd={handleMomentumScrollEnd}
                {...virtualizedListProps}
            />

        </View >
    );
};

export default EventCalendar;
