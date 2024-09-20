import { View, Text, Pressable, TextStyle, ViewStyle, StyleSheet, } from "react-native";
import React from "react";
import Colors from "../../constants/colors";
import commonStyles from "../../styles/common-styles";
import { moderateScale } from "react-native-size-matters";
import { fontStyles } from "../../styles";

type CustomButtonProp = {
    label: string | React.ReactNode;
    onPress?: () => void;
    customBtnStyle?: ViewStyle[];
    customTxtStyle?: TextStyle[];
    showIcon?: boolean;
    icon?: React.ReactNode | React.ElementType;
    onPressStyle?: () => ViewStyle;
    extraCusBtnStyle?: (ViewStyle | undefined)[];
    extraCusTxtStyle?: TextStyle[];
    btnWidth?: string | number | any;
    paddingProp?: any;
    disabled?: boolean;
};

const CustomButton = (props: CustomButtonProp): JSX.Element => {
    const { label, onPress, customBtnStyle = {}, customTxtStyle = {}, showIcon = false, extraCusBtnStyle = {}, extraCusTxtStyle = {}, btnWidth, icon, paddingProp, disabled } = props;

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={() => [
                customBtnStyle,
                commonStyles.centerJCAC,
                { width: btnWidth ? btnWidth : "90%" },
                {
                    padding: paddingProp ? paddingProp : moderateScale(12),
                    borderRadius: moderateScale(4),
                    backgroundColor: Colors.primaryColor,
                    opacity: disabled ? 0.5 : 1
                },
                extraCusBtnStyle,
            ]}
        >
            <View style={[commonStyles.RowJCAC, { columnGap: moderateScale(6, 0.3) }]}>
                {showIcon && icon && (
                    React.isValidElement(icon)
                        ? icon
                        : React.createElement(icon as React.ElementType)
                )}
                <Text style={[styles.pressableText, extraCusTxtStyle, customTxtStyle,]}>
                    {label}
                </Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressableText: {
        ...fontStyles.notoSansBold14,
        color: Colors.offWhite,
    },
    transparentMiniBtn: {
        backgroundColor: Colors.offWhite,
        borderWidth: 1,
        borderColor: Colors.primaryColor,
    },
});

export default CustomButton;
