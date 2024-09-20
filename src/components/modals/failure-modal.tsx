import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { moderateScale } from "react-native-size-matters";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackNavigatorProps } from "../../routes/type";
import { useAppDispatch } from "../../redux/hook";
import { Colors } from "../../constants";
import { FailureModalSvg } from "../../../assets/svg";
import { commonStyles, fontStyles } from "../../styles";
import TakeSpace from "../take-space/take-space";
import { navigationHook } from "../../hooks/navigation.hook";
import CustomButton from "../custom-button/custom-button";
const FailureModalScreen = ({ navigation }: any) => {
    const [renderModal, setRenderModal] = useState(true);
    const { params: { message = '' } } = useRoute<RouteProp<MainStackNavigatorProps, 'FailureModalScreen'>>();
    const dispatch = useAppDispatch();
    const { navigateBack } = navigationHook()
    return (
        <>
            {renderModal && (
                <Modal
                    useNativeDriver={true}
                    animationInTiming={500}
                    style={{
                        margin: 0,
                        padding: 0,
                        backgroundColor: Colors.offWhite,
                    }}
                    animationIn={"slideInUp"}
                    isVisible={true}
                >
                    <>
                        <View style={styles.container}>
                            <FailureModalSvg />
                            <Text
                                style={[
                                    fontStyles.notoSansBold20,
                                    { fontSize: moderateScale(24) },
                                ]}
                            >
                                Failure!
                            </Text>
                            <Text
                                style={[
                                    fontStyles.notoSansRegular12,
                                    {
                                        paddingTop: moderateScale(8),
                                        flexShrink: 1,
                                        textAlign: 'center',
                                        paddingHorizontal: moderateScale(16),
                                    },
                                ]}
                                numberOfLines={3}
                            >
                                {message ? message : " You have successfully booked an appointment with Dr. Mike G on May 30 at 10:00 am"}
                            </Text>
                            <TakeSpace space={moderateScale(5)} />
                        </View>
                        <View style={{ rowGap: moderateScale(10) }}>
                            <View
                                style={{
                                    borderTopWidth: moderateScale(1),
                                    borderTopColor: Colors.borderColor,
                                }}
                            />
                            <View style={[{ paddingHorizontal: moderateScale(14) }]} >
                                <CustomButton
                                    label={"Retry"}
                                    onPress={() => navigateBack()}
                                    extraCusBtnStyle={[{ borderRadius: moderateScale(4), backgroundColor: Colors.cancelColor }]}
                                    extraCusTxtStyle={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}
                                    btnWidth={'100%'}
                                />
                            </View>
                            <TakeSpace space={moderateScale(0)} />
                        </View>
                    </>
                </Modal>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        ...commonStyles._flexOneBg(Colors.offWhite),
        ...commonStyles.centerJCAC,
        gap: moderateScale(20),
        paddingHorizontal: moderateScale(16),
    },
});

export default FailureModalScreen;
