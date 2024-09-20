import React, { act, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { commonStyles } from "../../styles";
import { Colors } from "../../constants";
import BackgroundTimerScreen from "./timer";

interface OTP {
    numDigits: number;
    showTimer: boolean;
    inputRefs: any;
    handleInputChange: any;
    handleKeyPress: any;
    otp: { [key: number]: string };
}
const SplitOTP = (props: OTP) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [trackValue, setTrackValue] = useState<any>({
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
    });
    const { numDigits, inputRefs, handleInputChange, handleKeyPress, otp, showTimer } = props;
    return (
        <>
            <View style={styles.otpContainer}>
                {Array.from({ length: numDigits }, (_, i) => (
                    <View style={[styles.otpBox, {
                        backgroundColor: trackValue[i + 1] || activeIndex === i
                            ? Colors.fadedSecondary : Colors.offBlack5,
                        borderColor: activeIndex === i ? Colors.secondaryColor : Colors.offBlack5,
                    }]}
                        key={i + 1}>
                        <TextInput
                            style={styles.otpText}
                            keyboardType="numeric"
                            cursorColor={Colors.offBlack}
                            maxLength={1}

                            //value={otp[i + 1]}
                            //ref={inputRefs.current[i]}
                            textContentType="oneTimeCode"
                            autoComplete="sms-otp"
                            selection={{ start: 1, end: 1 }}
                            value={otp[i + 1]}
                            ref={inputRefs[i]}
                            onChangeText={(text) => {
                                handleInputChange(i + 1, text);
                                setTrackValue({ ...trackValue, [i + 1]: text });
                            }}
                            onKeyPress={(event) => {
                                handleKeyPress(i + 1, event)
                                // setTrackValue({ ...trackValue, [i + 1]: event.nativeEvent.key });
                            }}
                            onFocus={() => setActiveIndex(i)}
                            onBlur={() => setActiveIndex(null)}
                        // onChangeText={(text) => handleInputChange(i, text)}
                        // onKeyPress={(event) => handleKeyPress(i, event)}
                        />
                    </View>
                ))}
            </View>
            {showTimer && <BackgroundTimerScreen />}
        </>
    );
};

const styles = StyleSheet.create({
    otpContainer: {
        ...commonStyles.RowJSBAC,
    },
    otpBox: {

        borderWidth: moderateScale(1),
        borderRadius: moderateScale(2),
        width: moderateScale(45),
        height: moderateScale(45),
    },
    otpText: {
        fontSize: moderateScale(14),
        color: Colors.offBlack,
        padding: 0,
        textAlign: "center",
        paddingVertical: moderateScale(10),
    },
});

export default SplitOTP;
