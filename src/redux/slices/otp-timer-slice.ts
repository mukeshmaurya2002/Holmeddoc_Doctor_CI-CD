import { createSlice } from "@reduxjs/toolkit";
//This slice created to manage the timer and resend logic of OTP
interface TimerState {
    timerReachedToZero: boolean;
    timer: number;
}

const initialState: TimerState = {
    timerReachedToZero: false,
    timer: 60,
};

const otpTimerSlice = createSlice({
    name: 'otpTimer',
    initialState,
    reducers: {
        resetTimer: (state) => {
            state.timer = 60;
            state.timerReachedToZero = false;
        },
        setTimerReachedToZero: (state, action) => {
            state.timerReachedToZero = action.payload;
        },
        setTimer: (state, action) => {
            // console.log('action.payload', action.payload);
            state.timer = action.payload;
        }
    }
});

export const { resetTimer, setTimerReachedToZero, setTimer } = otpTimerSlice.actions;

export default otpTimerSlice.reducer;
