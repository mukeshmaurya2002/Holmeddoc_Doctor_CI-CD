import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { moderateScale } from "react-native-size-matters";
import { Colors } from "../../constants";
import { commonStyles, fontStyles } from "../../styles";
import { BlackCrossIconSvg, CrossIconSvg, DrawerLogoutSvg, } from "../../../assets/svg";
import { CustomButton } from "../../components";


const LogoutModal = (props: any) => {
    const { handleClose } = props
    const handleLogout = () => {
        try {

        } catch (error: any) {

            console.log(error, "error in handleLogout")
        }
    }
    return (
        <>
            <StatusBar backgroundColor={Colors.primaryColor} barStyle={"light-content"} />
            <View style={styles.mainContainer}>
                <View style={commonStyles.RowJSBAC}>
                    <View
                        style={[
                            commonStyles.RowJSBAC,
                            {
                                columnGap: moderateScale(12),
                            },
                        ]}
                    >
                        <DrawerLogoutSvg />
                        <Text
                            style={[
                                fontStyles._notoSansBold(
                                    "NotoSans-Bold",
                                    moderateScale(18),
                                    Colors.offBlack
                                ),
                            ]}
                        >
                            Logout?
                        </Text>
                    </View>
                    <View>
                        <Pressable onPress={handleClose}>
                            <BlackCrossIconSvg />
                        </Pressable>
                    </View>
                </View>
                <Text
                    style={[
                        fontStyles.notoSansRegular14,
                        {
                            paddingVertical: moderateScale(16),
                            color: Colors.offBlack75,
                        },
                    ]}
                >
                    Are you sure you want to logout? You can log in later anytime.
                </Text>
            </View>
            <View style={[commonStyles.RowJSB, styles.btnContainer,]} >
                <CustomButton
                    label={"No, go back"}
                    onPress={() => handleClose()}
                    extraCusBtnStyle={[{ borderRadius: moderateScale(4), backgroundColor: Colors.offBlack5 }]}
                    extraCusTxtStyle={[fontStyles.notoSansMedium14]}
                    btnWidth={'48.5%'}
                />
                <CustomButton
                    label={"Logout"}
                    onPress={() => handleLogout()}
                    disabled={false}
                    extraCusBtnStyle={[{ borderRadius: moderateScale(4), backgroundColor: Colors.primaryColor }]}
                    extraCusTxtStyle={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}
                    btnWidth={'48.5%'}
                />
            </View>
            <SafeAreaView style={[{ backgroundColor: Colors.offWhite }]} />

        </>
    );
};

export default LogoutModal;

const styles = StyleSheet.create({
    mainContainer: {
        padding: moderateScale(16),
    },
    btnContainer: {
        ...commonStyles.RowJSBAC,
        // borderTopColor: Colors.offBlack5,
        // borderTopWidth: moderateScale(1),
        paddingVertical: moderateScale(10),
        columnGap: moderateScale(5),
        paddingHorizontal: moderateScale(10),
    },
});
