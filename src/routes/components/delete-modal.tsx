import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { moderateScale } from "react-native-size-matters";
import { Colors } from "../../constants";
import { commonStyles, fontStyles } from "../../styles";
import { BlackCrossIconSvg, CrossIconSvg, DeleteModalSvg } from "../../../assets/svg";
import { CustomButton } from "../../components";


const DeleteModal = (props: any) => {
    const { handleClose } = props

    const handleDelete = async () => {
        try {

        } catch (error: any) {

            console.log(error, "error in handleDelete")
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
                        <DeleteModalSvg />
                        <Text
                            style={[
                                fontStyles._notoSansBold(
                                    "NotoSans-Bold",
                                    moderateScale(18),
                                    Colors.offBlack
                                ),
                            ]}
                        >
                            Delete Account?
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
                    Are you sure you want to delete account? All the data will be erased from this account.
                </Text>
            </View>
            <View style={[commonStyles.RowJSB, styles.btnContainer,]} >
                <CustomButton
                    label={"No, go back"}
                    onPress={handleClose}
                    extraCusBtnStyle={[{ borderRadius: moderateScale(4), backgroundColor: Colors.offBlack5 }]}
                    extraCusTxtStyle={[fontStyles.notoSansMedium14]}
                    btnWidth={'48.5%'}
                />
                <CustomButton
                    label={"Yes Delete"}
                    onPress={handleDelete}
                    disabled={false}
                    extraCusBtnStyle={[{ borderRadius: moderateScale(4), backgroundColor: Colors.orange }]}
                    extraCusTxtStyle={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}
                    btnWidth={'48.5%'}
                />
            </View>
            <SafeAreaView style={[{ backgroundColor: Colors.offWhite }]} />

        </>
    );
};

export default DeleteModal;

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
