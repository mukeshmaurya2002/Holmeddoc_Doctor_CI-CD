import { View, Text, StyleSheet, Pressable, ViewStyle, KeyboardAvoidingView, Platform } from "react-native";
import Modal from "react-native-modal";
import { moderateScale } from "react-native-size-matters";
import React from "react";
import { Colors } from "../../constants";

type FilterProps = {
    isVisible: any;
    closeModal?: any;
    onPress?: () => void;
    showIcon?: any;
    title?: string;
    desc?: string;
    children: React.ReactNode;
    rootStyle?: ViewStyle;
};

const CustomModal = (props: FilterProps) => {
    const { isVisible, closeModal, children, rootStyle } = props;

    return (
        <Modal
            onBackButtonPress={closeModal}
            useNativeDriver
            isVisible={isVisible}
            animationIn={"slideInUp"}
            animationInTiming={500}
            animationOut={"slideOutDown"}
            backdropOpacity={0.5}
            onBackdropPress={closeModal}
            animationOutTiming={800}
            style={[
                { justifyContent: "flex-end", margin: 0, padding: moderateScale(0) },
            ]}
        >
            <KeyboardAvoidingView style={{}} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <View style={[styles.modalContainer, rootStyle]}>{children}</View>
            </KeyboardAvoidingView>

        </Modal>
    );
};

export default CustomModal;

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: Colors.offWhite,
        borderTopLeftRadius: moderateScale(16),
        borderTopRightRadius: moderateScale(16),
    },
});
