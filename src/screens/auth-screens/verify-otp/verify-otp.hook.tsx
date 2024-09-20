import React, { useEffect, useRef, useState } from "react"
import { SignUpStackProps } from "../../../routes/type";
import { RouteProp, useRoute } from "@react-navigation/native";
import { navigationHook } from "../../../hooks/navigation.hook"
import { TextInput } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { resetTimer } from "../../../redux/slices/otp-timer-slice";

const useVerifyOtp = () => {
    const { params: { isFormForgotPass = false, mobNo } } = useRoute<RouteProp<SignUpStackProps, 'VerifyOtp'>>()
    const { navigateTo, navigateBack } = navigationHook();
    const [otp, setOtp] = useState(Object.fromEntries(Array.from({ length: 6 }, (_, i) => [i + 1, ""])));
    const numDigits = 6;
    const dispatch = useAppDispatch();
    const timerReachedZero = useAppSelector(state => state.otpTimer.timerReachedToZero) || false;
    const inputRefs = Array.from({ length: numDigits }, () =>
        useRef<TextInput>(null)
    );
    const handleInputChange = (index: number, text: string): void => {
        setOtp((prevOtp) => ({
            ...prevOtp,
            [index]: text,
        }));
        if (text && index < 6) {
            inputRefs[index]?.current?.focus();
        } else if (!text && index > 1) {
            inputRefs[index - 2]?.current?.focus();
        }
    };
    const handleKeyPress = (index: number, event: any): void => {
        if (event?.nativeEvent?.key === "Backspace" && !otp[index] && index > 1) {
            inputRefs[index - 2]?.current?.focus();
        }
        //if focus and key pressed then move to next input
        if (event?.nativeEvent?.key !== "Backspace" && index < 6) {
            setOtp((prevOtp) => ({
                ...prevOtp,
                [index]: event?.nativeEvent?.key,
            }));
            inputRefs[index]?.current?.focus()
        }
    };

    useEffect(() => {
        inputRefs[0]?.current?.focus();
        // inputRefs.current[0]?.current?.focus();
    }, []);

    console.log(timerReachedZero, "timerReachedZero")
    const resendOtp = () => {
        if (timerReachedZero) {
            setOtp(Object.fromEntries(Array.from({ length: 6 }, (_, i) => [i + 1, ""])));
            dispatch(resetTimer())
            inputRefs[0]?.current?.focus();
        }
    }


    return {
        navigateTo,
        handleInputChange,
        handleKeyPress,
        otp,
        inputRefs,
        isFormForgotPass,
        navigateBack,
        resendOtp
    }
}

export { useVerifyOtp }