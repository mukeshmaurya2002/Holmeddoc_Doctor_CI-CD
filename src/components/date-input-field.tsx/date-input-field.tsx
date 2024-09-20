import { ActivityIndicator, KeyboardType, Pressable, StyleSheet, Text, TextInput, TextStyle, View, ViewStyle } from "react-native";
import { commonStyles, fontStyles } from "../../styles";
import React from "react";
import { moderateScale } from "react-native-size-matters";
import { helpers } from "../../utility/helpers";
import { Colors } from "../../constants";
import CustomButton from "../custom-button/custom-button";

interface FiieldBoxProps {
    value?: any;
    leftIcon?: React.ElementType;
    onChangeText?: (value: any) => void;
    placeHolder?: string;
    keyBoardType?: KeyboardType;
    onBlur?: any;
    label?: string;
    rootStyle?: ViewStyle;
    pressContStyle?: ViewStyle[];
    labelStyle?: (TextStyle[] | any);
    TxtStyle?: (TextStyle[] | any);
    rightSideContent?: React.ReactNode;
    showActivityIndicator?: boolean;
    onPress?: () => void;
    maxLength?: number;
    showCountryPhoneCode?: boolean;
    showBottomMargin?: boolean;
    editable?: boolean;
    pressOnInput?: boolean;
    isValid?: boolean;
    secureTextEntry?: boolean;
    mandatory?: boolean;
    manualStatus?: number;
    showBorder?: boolean;
    placeholderTextColor?: string;
    errorMessg?: string;
}

const InputFieldBox = (props: FiieldBoxProps) => {
    const { placeholderTextColor, value, isValid, secureTextEntry, leftIcon, onChangeText, placeHolder, keyBoardType, onBlur, label, rootStyle, labelStyle, showActivityIndicator, rightSideContent, onPress, maxLength, showCountryPhoneCode, showBottomMargin, editable = true, pressOnInput = false, mandatory = false, showBorder = true, pressContStyle, TxtStyle, errorMessg } = props;
    return (
        <View style={{ ...rootStyle, }} >
            {label &&
                <Text style={[fontStyles.notoSansRegular12, { paddingVertical: moderateScale(5) }, labelStyle]} >
                    {label} {mandatory && <Text style={[fontStyles.notoSansMedium12, { color: Colors.primaryColor }]}>*</Text>}
                </Text>
            }
            <Pressable onPress={pressOnInput ? onPress : () => { }} style={[styles.inputContainer, { borderColor: showBorder ? Colors.offBlack : "transparent", backgroundColor: "transparent", marginBottom: showBottomMargin ? moderateScale(10) : moderateScale(0), }, pressContStyle]} >
                {leftIcon && React.createElement(leftIcon)}
                {showCountryPhoneCode && <Text style={[fontStyles.notoSansRegular12, { paddingLeft: moderateScale(5), paddingTop: moderateScale(3) }]}>+91</Text>}
                <TextInput
                    style={[fontStyles.notoSansRegular12, {
                        paddingHorizontal: leftIcon
                            ? moderateScale(10)
                            : moderateScale(0),
                        fontSize: moderateScale(12),
                        flex: 1,

                    }, TxtStyle]}
                    placeholderTextColor={Colors.offBlack50}
                    cursorColor={placeholderTextColor}
                    placeholder={placeHolder}
                    keyboardType={keyBoardType}
                    value={value}
                    secureTextEntry={secureTextEntry ? secureTextEntry : false}
                    editable={editable}
                    onBlur={onBlur}
                    onChangeText={onChangeText}
                    maxLength={maxLength}
                />

                <View style={{ ...commonStyles.RowJFSAC, }} >
                    {false ? (
                        showActivityIndicator ? (
                            <ActivityIndicator size="small" color={Colors.secondaryColor} />
                        )
                            : (
                                <CustomButton
                                    label={showActivityIndicator ? "" : ""}
                                    disabled={isValid}
                                    extraCusTxtStyle={[{ ...fontStyles.notoSansBold12, fontSize: moderateScale(10), color: Colors.offWhite }]}
                                    extraCusBtnStyle={[{
                                        paddingHorizontal: moderateScale(12),
                                        paddingVertical: moderateScale(8),
                                    }]}
                                    btnWidth={moderateScale(60)}
                                    onPress={onPress}
                                />
                            )
                    ) : (

                        showActivityIndicator ? <ActivityIndicator size="small" color={Colors.secondaryColor} />
                            : <Pressable onPress={onPress}>
                                {rightSideContent && rightSideContent}
                            </Pressable>
                    )}
                </View>
            </Pressable>
            {errorMessg &&
                <View style={{ paddingHorizontal: moderateScale(4), paddingTop: moderateScale(4) }}>
                    <Text style={[fontStyles.notoSansMedium10, { color: Colors.errorColor }]}>{errorMessg}</Text>
                </View>
            }
        </View>
    );
};

export default InputFieldBox;

const styles = StyleSheet.create({
    inputContainer: {
        ...commonStyles.RowJFSAC,
        borderWidth: moderateScale(1),
        borderRadius: moderateScale(5),
        // paddingHorizontal: moderateScale(10),
        paddingVertical: helpers.isTablet ? moderateScale(10) : 0
    },
});
