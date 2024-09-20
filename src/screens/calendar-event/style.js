// @flow
import { StyleSheet } from 'react-native'
import { Colors } from '../../constants'
import { moderateScale } from 'react-native-size-matters'
import { fontStyles } from '../../styles'
import { helpers } from '../../utility/helpers'
import { SCREEN_WIDTH } from '../../constants/responsive'

const calendarHeight = 2400
// const eventPaddingLeft = 4
const leftMargin = moderateScale(74) - moderateScale(1)

export default function styleConstructor(
    theme = {}
) {
    let style = {
        container: {
            flex: 1,
            backgroundColor: Colors.offWhite,
            ...theme.container,
        },
        contentStyle: {
            backgroundColor: Colors.offWhite,
            height: calendarHeight,
        },
        header: {
            paddingHorizontal: moderateScale(30),

            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            ...theme.header
        },
        headerText: {
            fontSize: moderateScale(16),
        },
        arrow: {
            width: moderateScale(10),
            height: moderateScale(10),
            resizeMode: 'contain'
        },
        event: {
            position: 'absolute',
            opacity: 0.8,
            top: 10,

            borderRadius: moderateScale(5),
            padding: moderateScale(10),
            flex: 1,
            paddingTop: moderateScale(5),
            paddingBottom: moderateScale(0),
            flexDirection: 'column',
            alignItems: 'flex-start',
            overflow: 'hidden',
            ...theme.event
        },
        eventTitle: {
            color: Colors.offBlack,
            fontWeight: '600',
            ...theme.eventTitle
        },
        eventSummary: {
            color: '#615B73',
            fontSize: moderateScale(12),
            flexWrap: 'wrap',
            ...theme.eventSummary
        },
        eventTimes: {
            marginTop: moderateScale(3),
            fontSize: moderateScale(10),
            fontWeight: 'bold',
            color: '#615B73',
            flexWrap: 'wrap',
            ...theme.eventTimes
        },
        halfLine: {
            paddingLeft: moderateScale(10),

            borderBottomWidth: moderateScale(1),
            position: 'absolute',
            left: 0,
            borderStyle: 'dashed',
            borderColor: Colors.offBlack,
            opacity: 0.2,
            borderTopColor: 'white',
            //shw


            position: 'absolute',
            left: leftMargin,
            // backgroundColor: 'rgb(216,216,216)',
            ...theme.halfLine
        },
        line: {
            height: moderateScale(1),
            position: 'absolute',
            left: leftMargin + moderateScale(3),
            backgroundColor: 'rgb(216,216,216)',
            ...theme.line
        },
        lineNow: {
            height: moderateScale(2),
            position: 'absolute',
            left: 0,
            width: '100%',
            zIndex: 100,
            backgroundColor: Colors.primaryColor,
            ...theme.line
        },
        timeLabel: {
            position: 'absolute',
            left: moderateScale(10),
            // marginBottom: 10,
            // bottom: 10,
            ...fontStyles.notoSansSemiBold12,
            ...theme.timeLabel
        },
        dropdownTest: {
            height: helpers.isIos ? moderateScale(46) : moderateScale(20),
            width: SCREEN_WIDTH * 0.3,
            backgroundColor: Colors.white,
            paddingHorizontal: moderateScale(16),
            left: moderateScale(4),
            // marginTop: -moderateScale(16),

        },
        placeHolder: { ...fontStyles.notoSansSemiBold12, marginLeft: moderateScale(6) },

    }
    return StyleSheet.create(style)
}