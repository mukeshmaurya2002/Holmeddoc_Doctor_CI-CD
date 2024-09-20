import React from "react";
import { Colors } from "../../constants";
import { fontStyles } from "../../styles";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { moderateScale } from "react-native-size-matters";

const ErrorHelper = (props: { errorMsg: string, rootStyle?: ViewStyle[] }) => {
    const { errorMsg, rootStyle } = props;
    return (
        <View style={[rootStyle]}>
            <Text style={styles.Container} >
                {errorMsg}
            </Text>
        </View>
    );
};

export default ErrorHelper;
const styles = StyleSheet.create({
    Container: { ...fontStyles.notoSansMedium10, color: Colors.errorColor, paddingHorizontal: moderateScale(4), paddingTop: moderateScale(4) }
})