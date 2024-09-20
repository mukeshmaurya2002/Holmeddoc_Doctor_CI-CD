import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import BackgroundTimer from "react-native-background-timer";
import { moderateScale } from "react-native-size-matters";
import { setTimer, setTimerReachedToZero } from "../../redux/slices/otp-timer-slice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { fontStyles } from "../../styles";
import { Colors } from "../../constants";

const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds % 60;

    return `${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
};

const BackgroundTimerScreen = () => {
    // const [timer, setTimer] = useState(10);
    const dispatch = useAppDispatch();
    const timer = useAppSelector(state => state.otpTimer.timer);
    const timerReachedZero = useAppSelector(state => state.otpTimer.timerReachedToZero) || false;
    useEffect(() => {
        if (timer > 0) {
            BackgroundTimer.start();
        } else {
            dispatch(setTimerReachedToZero(true));
            BackgroundTimer.stop();
        }

        return () => {
            BackgroundTimer.stop();
        };
    }, [timer]);
    useEffect(() => {
        const interval = BackgroundTimer.setInterval(() => {
            // setTimer((prev) => Math.max(prev - 1, 0));
            if (timer > 0) {
                dispatch(setTimer(timer - 1));
            }
        }, 1000);

        return () => {
            BackgroundTimer.clearInterval(interval);
        };
    }, [timer]);

    return (
        <Text
            style={[
                fontStyles.notoSansRegular12,
                {
                    textAlign: "right",
                    color: Colors.offBlack75,
                    paddingVertical: moderateScale(5),
                },
            ]}
        >
            {formatTime(timer) + " sec"}
        </Text>
    );
};

export default BackgroundTimerScreen;
