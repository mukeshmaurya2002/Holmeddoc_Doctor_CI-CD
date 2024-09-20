// import React, { useState, useCallback } from 'react';
// import { Dimensions, Alert } from 'react-native';

// const { width } = Dimensions.get('window');

// // const events = [
// //     { start: '2017-09-07 00:30:00', end: '2017-09-07 01:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
// //     { start: '2017-09-07 01:30:00', end: '2017-09-07 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
// //     { start: '2017-09-07 04:10:00', end: '2017-09-07 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
// //     { start: '2017-09-07 01:05:00', end: '2017-09-07 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
// //     { start: '2017-09-07 14:30:00', end: '2017-09-07 16:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
// //     { start: '2017-09-08 01:20:00', end: '2017-09-08 02:20:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
// //     { start: '2017-09-08 04:10:00', end: '2017-09-08 04:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
// //     { start: '2017-09-08 00:45:00', end: '2017-09-08 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
// //     { start: '2017-09-08 11:30:00', end: '2017-09-08 12:30:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
// //     { start: '2017-09-09 01:30:00', end: '2017-09-09 02:00:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
// //     { start: '2017-09-09 03:10:00', end: '2017-09-09 03:40:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' },
// //     { start: '2017-09-09 00:10:00', end: '2017-09-09 01:45:00', title: 'Dr. Mariana Joseph', summary: '3412 Piedmont Rd NE, GA 3032' }
// // ];
// const events = [
//     {
//         start: "2024-07-05 00:00:00",
//         end: "2024-07-05 00:59:59",
//         title: "Dr. ty Joseph",
//         summary: "3412 Piedmont Rd NE, GA 3032"
//     },
//     {
//         start: "2024-07-06 00:00:00",
//         end: "2024-07-06 00:59:59",
//         title: "Dr. Ab Joseph",
//         summary: "3412 Piedmont Rd NE, GA 3032"
//     },

// ]

// const CalendarEventScreen: React.FC = () => {
//     const [eventsState, setEventsState] = useState(events);

//     const eventTapped = useCallback((event: any) => {
//         Alert.alert('Event Tapped', JSON.stringify(event));
//     }, []);

//     return (
//         <EventCalendar
//             eventTapped={eventTapped}
//             events={eventsState}
//             width={width}
//             format24h={false}
//         // initDate={'2024-07-05'}
//         />
//     );
// };

// export default CalendarEventScreen;



import React, { useState, useCallback } from 'react';
import { Dimensions, Alert, View } from 'react-native';
import EventCalendar from './event-calendar';
import { navigationHook } from '../../hooks/navigation.hook';

const { width } = Dimensions.get('window');

const CalendarEventScreen = (props: any) => {
    const [eventsState, setEventsState] = useState(props.events);

    const { navigateTo } = navigationHook()
    const eventTapped = useCallback(() => {
        // Alert.alert('Event Tapped', JSON.stringify(event));
        navigateTo('CalendarAppointmentDetails')
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <EventCalendar
                eventTapped={eventTapped}
                events={eventsState}
                width={width}
                format24h={false}
                initDate={props.currentDate}
                onEventDateChanged={props.onEventDateChanged}

            />
        </View>
    );
};

export default CalendarEventScreen;
