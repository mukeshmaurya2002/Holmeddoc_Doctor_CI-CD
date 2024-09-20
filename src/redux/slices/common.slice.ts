import { createSlice } from "@reduxjs/toolkit";
import { s } from "react-native-size-matters";
import { getDate } from "../../screens/calendar-event/timeline-events";
import moment from "moment";

//This is common slice for the whole app
type CommonState = {
    isProfileComplete?: boolean,
    eventChangeDate?: string
    currentDate?: string

};
const initialCommonState: CommonState = {
    isProfileComplete: false,
    eventChangeDate: '',
    currentDate: moment(new Date()).format('YYYY-MM-DD')


};
const commonSlice = createSlice({
    name: 'common',
    initialState: initialCommonState,
    reducers: {
        setIsProfileComplete(state, action) {
            state.isProfileComplete = action.payload;
        },
        setEventChangeDate(state, action) {
            state.eventChangeDate = action.payload;
        },
        setCurrentDate(state, action) {
            state.currentDate = action.payload;
        }
    },
});

export const { setIsProfileComplete, setEventChangeDate, setCurrentDate } = commonSlice.actions;
export default commonSlice.reducer;
