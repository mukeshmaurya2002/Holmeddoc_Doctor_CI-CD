
import { combineReducers } from "@reduxjs/toolkit";
import { commonSlice, otpTimerSlice, reloadSlice, startUpSlice } from "..";


const rootReducers: any = combineReducers({
    reload: reloadSlice,
    common: commonSlice,
    startup: startUpSlice,
    otpTimer: otpTimerSlice,
});

export default rootReducers;