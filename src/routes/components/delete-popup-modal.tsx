import { Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import { moderateScale } from "react-native-size-matters";
import { Colors } from "../../constants";
import { commonStyles, fontStyles } from "../../styles";
import { BlackCrossIconSvg, CrossIconSvg, DeleteModalSvg } from "../../../assets/svg";
import { CustomButton, TakeSpace } from "../../components";
import DeletePopUpSvg from "../../../assets/svg/common/delete-popup-svg";
import { SCREEN_HEIGHT } from "../../constants/responsive";
import Modal from 'react-native-modal';

const DeletePopUpModal = (props: any) => {
    const { handleClose, handleDelete } = props
    return (
        <>
            <StatusBar backgroundColor={Colors.primaryColor} />
            <Modal
                animationOut={'bounceOutDown'}
                animationOutTiming={1200}
                useNativeDriver={true}
                avoidKeyboard
                useNativeDriverForBackdrop
                collapsable
                onBackdropPress={handleClose}
                hardwareAccelerated
                style={styles.modalStyle}
                animationIn={'slideInUp'}
                isVisible={true}
            >
                <View style={styles.modalView}>
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: moderateScale(10),
                    }}>

                        <DeletePopUpSvg />
                        <Text
                            style={[
                                fontStyles._notoSansBold(
                                    "NotoSans-Bold",
                                    moderateScale(18),
                                    Colors.offBlack
                                ),
                            ]}
                        >
                            Delete?
                        </Text>

                        {/* <View>
                        <Pressable onPress={handleClose}>
                            <BlackCrossIconSvg />
                        </Pressable>
                    </View> */}
                    </View>
                    <Text
                        style={[
                            fontStyles.notoSansRegular14,
                            {
                                paddingVertical: moderateScale(16),
                                paddingHorizontal: moderateScale(10),
                                color: Colors.offBlack75,
                            },
                        ]}
                    >
                        Are you sure you want to delete?
                    </Text>
                    <TakeSpace space={10} />
                    <View style={[styles.sbtBtn, { bottom: moderateScale(20), }]}>
                        <CustomButton
                            label={"No, go back"}
                            onPress={handleClose}
                            extraCusBtnStyle={[{ borderRadius: moderateScale(4), backgroundColor: Colors.offBlack5 }]}
                            extraCusTxtStyle={[fontStyles.notoSansMedium14]}
                            btnWidth={'52%'}
                        />
                        <CustomButton
                            label={"Yes Delete"}
                            onPress={handleDelete}
                            disabled={false}
                            extraCusBtnStyle={[{ borderRadius: moderateScale(4), backgroundColor: Colors.orange }]}
                            extraCusTxtStyle={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}
                            btnWidth={'52%'}
                        />
                    </View>
                </View>
            </Modal>
        </>

    );
};

export default DeletePopUpModal;

const styles = StyleSheet.create({
    modalStyle: {
        flex: 1,
        margin: moderateScale(12),
        height: SCREEN_HEIGHT * 0.36,
    },
    modalView: {
        borderRadius: moderateScale(4),
        backgroundColor: Colors.offWhite,
        // paddingHorizontal: moderateScale(16),
        // rowGap: moderateScale(16),
        padding: moderateScale(16),
        // ...commonStyles.centerJCAC,
        height: SCREEN_HEIGHT * 0.30,
    },
    btnContainer: {
        ...commonStyles.RowJSBAC,
        // borderTopColor: Colors.offBlack5,
        // borderTopWidth: moderateScale(1),
        paddingVertical: moderateScale(10),
        columnGap: moderateScale(5),
        paddingHorizontal: moderateScale(10),
    },
    sbtBtn: {
        backgroundColor: Colors.offWhite,
        paddingHorizontal: moderateScale(16),
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: moderateScale(20),
        bottom: moderateScale(0),
        width: '100%',
        // borderTopWidth: moderateScale(1),
        // borderTopColor: Colors.offBlack5,
        padding: moderateScale(10)
    },

});
