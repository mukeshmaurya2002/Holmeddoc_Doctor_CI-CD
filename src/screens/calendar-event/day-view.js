// @flow
import {
    View,
    Text,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import _ from 'lodash';
import { commonStyles, fontStyles } from '../../styles';
import { moderateScale } from 'react-native-size-matters';
import { Colors } from '../../constants';
import RightPointTriangle from '../../../assets/svg/common/right-point-triangle';
import LeftPointingSvg from '../../../assets/svg/common/left-pointing-svg';
import useCurrentTime from './use-current-time.hooks';
import { TakeSpace } from '../../components';
import { AppointmentFilterSvg } from '../../../assets/svg';
import { Dropdown } from 'react-native-element-dropdown';
import { SCREEN_WIDTH } from '../../constants/responsive';
import populateEvents from './Packer';

const LEFT_MARGIN = moderateScale(60) - moderateScale(1);
const CALENDER_HEIGHT = moderateScale(2400);
const TEXT_LINE_HEIGHT = moderateScale(0);

function range(from, to) {
    return Array.from(Array(to), (_, i) => from + i);
}

const DayView = (props) => {
    const { width, events, format24h, scrollToFirst, styles } = props;
    const [packedEvents, setPackedEvents] = useState(populateEvents(events, width - LEFT_MARGIN));
    const [scrollY, setScrollY] = useState(0);
    const currentTime = useCurrentTime();
    const scrollViewRef = useRef(null);

    useEffect(() => {
        const initPosition = Math.max(_.min(_.map(packedEvents, 'top')) - CALENDER_HEIGHT / moderateScale(24), 0);
        setScrollY(initPosition);
    }, [packedEvents]);

    useEffect(() => {
        if (scrollToFirst) {
            scrollToInitialPosition();
        }
    }, [scrollToFirst, scrollY]);

    useEffect(() => {
        setPackedEvents(populateEvents(events, width - LEFT_MARGIN));
    }, [events, width]);

    const scrollToInitialPosition = () => {
        setTimeout(() => {
            if (scrollY && scrollViewRef.current) {
                scrollViewRef.current.scrollTo({ x: 0, y: scrollY, animated: true });
            }
        }, 1);
    };

    const renderRedLine = () => {
        const offset = CALENDER_HEIGHT / moderateScale(24);
        const timeNowHour = moment().hour();
        const timeNowMin = moment().minutes();

        return (
            <View key={`timeNow`}
                style={[styles.lineNow, { top: offset * timeNowHour + offset * timeNowMin / moderateScale(60) }]}
            >
                <View style={{
                    width: moderateScale(56),
                    height: moderateScale(30),
                    backgroundColor: Colors.primaryColor,
                    borderRadius: moderateScale(6),
                    left: moderateScale(12),
                    top: -moderateScale(14),
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Text style={{
                        position: "absolute",
                        ...fontStyles.notoSansSemiBold10,
                        color: Colors.offWhite,
                        textAlign: "center",
                        zIndex: 1,
                    }}>
                        {currentTime}
                    </Text>
                </View>
                <View style={{
                    position: 'absolute',
                    left: moderateScale(0),
                    top: -moderateScale(4),
                }}>
                    <RightPointTriangle />
                </View>
                <View style={{
                    position: 'absolute',
                    right: moderateScale(0),
                    top: -moderateScale(4),
                }}>
                    <LeftPointingSvg />
                </View>
            </View>
        );
    };

    const renderLines = () => {
        const offset = CALENDER_HEIGHT / moderateScale(24);

        return range(0, 24).map((item, i) => {
            // let timeText;
            // if (i === 0) {
            //     timeText = !format24h ? '12:00 am' : '0:00';
            // } else if (i < 12) {
            //     timeText = !format24h ? `${i}:00 am` : `${i}:00`;
            // } else if (i === 12) {
            //     timeText = !format24h ? '12:00 pm' : '12:00';
            // }
            // else if (i === 24) {
            //     timeText = !format24h ? '12:00 am' : '0:00';
            // } else {
            //     const hour = i - 12;
            //     timeText = !format24h ? `${hour}:00 pm` : `${i}:00`;
            // }
            let timeText;
            if (i === 0) {
                timeText = !format24h ? '12:00 am' : '0:00';
            } else if (i < 12) {
                timeText = !format24h ? `${i}:00 am` : `${i}:00`;
            } else if (i === 12) {
                timeText = !format24h ? '12:00 pm' : '12:00';
            } else {
                const hour = i - 12;
                timeText = !format24h ? `${hour}:00 pm` : `${i}:00`;
            }

            return [
                <Text
                    key={`timeLabel${i}`}
                    style={[styles.timeLabel, { top: offset * i - moderateScale(0.8) * TEXT_LINE_HEIGHT, marginTop: moderateScale(0), marginLeft: moderateScale(2) }]}
                >
                    {timeText}
                </Text>,
                i === 0 ?
                    <View key={`line${i}`} style={[styles.line, { top: offset * i + moderateScale(10), width: SCREEN_WIDTH * 0.73, }]} />
                    : (
                        <View key={`line${i}`} style={[styles.line, { top: offset * i + moderateScale(10), width: SCREEN_WIDTH * 0.73, }]} />

                    ),
                <View
                    key={`lineHalf${i}`}
                    style={[styles.halfLine, { top: offset * (i + 0.6), left: moderateScale(14), width: SCREEN_WIDTH * 0.90 }]}
                />
            ];
        });
    };


    const onEventTapped = (event) => {
        props.eventTapped(event);
    };

    const renderEvents = () => {

        return (
            <View >
                <View style={{
                    marginLeft: LEFT_MARGIN + moderateScale(16),
                }}>
                    {packedEvents.map((event, i) => {

                        const time = moment(event.start).format('HH:mm');

                        // console.log(event, 'event')
                        const style = {
                            height: event.height,
                            width: SCREEN_WIDTH * 0.74,
                            top: event.top + moderateScale(10),
                        };

                        const numberOfLines = Math.floor(event.height);
                        const formatTime = format24h ? 'HH:mm' : 'hh:mm A';

                        return (
                            <View
                                key={i}
                                style={[styles.event, style, {
                                    backgroundColor: event.color,

                                }]}
                            >
                                {props.renderEvent ? props.renderEvent(event) : (
                                    (event.status !== "null") ?
                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            onPress={() => onEventTapped(events[event.index])}
                                        >
                                            <View style={[commonStyles.RowJSB, { width: "100%", paddingHorizontal: moderateScale(2), paddingVertical: moderateScale(8) }]}>
                                                <Text style={[fontStyles.notoSansBold12, {
                                                    //adjust width and if large number of lines then move below
                                                    maxWidth: moderateScale(150),
                                                    marginBottom: numberOfLines > 1 ? moderateScale(5) : 0
                                                }]}>{event.title || 'Event'}</Text>
                                                <Text style={[fontStyles.notoSansMedium10, {
                                                    maxWidth: moderateScale(150),
                                                    alignSelf: 'flex-start',
                                                    marginBottom: numberOfLines > 1 ? moderateScale(5) : 0
                                                }]} >{moment(event.start).format(formatTime)} - {moment(event.end).format(formatTime)}</Text>

                                            </View>

                                            <Text

                                                style={[fontStyles.notoSansRegular12, {
                                                    paddingHorizontal: moderateScale(2),
                                                    maxWidth: "100%",
                                                    marginBottom: numberOfLines > 1 ? moderateScale(5) : 0
                                                }]}
                                            >
                                                {event.summary || ' '}
                                            </Text>


                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity
                                            activeOpacity={0.5}
                                            onPress={() => onEventTapped(events[event.index])}
                                        >

                                        </TouchableOpacity>
                                )
                                }
                            </View>
                        );
                    })}
                </View>
            </View >
        );
    };
    return (
        <ScrollView ref={scrollViewRef}
            contentContainerStyle={[styles.contentStyle, { width: width, backgroundColor: Colors.offWhite, }]}
        >
            {renderLines()}
            {renderRedLine()}
            {renderEvents()}
        </ScrollView>
    );
};

export default DayView;
