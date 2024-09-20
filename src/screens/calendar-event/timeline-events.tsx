import { TimelineEventProps, CalendarUtils } from 'react-native-calendars';

const EVENT_COLOR = '#EDFCF2';

const today = new Date();
export const getDate = (offset = 0) => CalendarUtils.getCalendarDateString(new Date().setDate(today.getDate() + offset));

export const timelineEvents: TimelineEventProps[] = [
    {
        start: `${getDate()} 00:00:00`,
        end: `${getDate()} 01:00:00`,
        title: 'Meeting Test',
        summary: 'Summary for meeting A',
        color: "#EDFCF2",
        status: "virtual"
    },
    {
        start: `${getDate()} 01:30:00`,
        end: `${getDate()} 08:00:00`,
        title: 'Close',
        summary: 'Close for the day',
        color: "#EBECEF",
        status: "null"
    },
    {
        start: `${getDate()} 08:20:00`,
        end: `${getDate()} 09:30:00`,
        title: 'InPerson',
        summary: 'Summary for meeting B',
        color: "#F9F5FF",
        status: "in-person"
    },
    {
        start: `${getDate()} 10:00:00`,
        end: `${getDate()} 11:00:00`,
        title: 'Leave',
        summary: 'Leave for the day',
        color: "#FEF3F2",
        status: "null"
    },
    {
        start: `${getDate()} 11:00:00`,
        end: `${getDate()} 12:00:00`,
        title: 'Leave',
        summary: 'Leave for the day',
        color: "#FEF3F2",
        status: "null"
    },
    {
        start: `${getDate()} 12:30:00`,
        end: `${getDate()} 15:00:00`,
        title: 'InPerson',
        summary: 'Summary for meeting B',
        color: "#EDFCF2",
        status: "in-person"
    },
    {
        start: `${getDate()} 16:00:00`,
        end: `${getDate()} 18:00:00`,
        title: 'Virtual',
        summary: 'Summary for meeting V',
        color: "#F9F5FF",
        status: "virtual"
    },
    {
        start: `${getDate()} 19:00:00`,
        end: `${getDate()} 22:00:00`,
        title: 'Inperson',
        summary: 'Summary for meeting V',
        color: "#EDFCF2",
        status: "in-person"
    },
];