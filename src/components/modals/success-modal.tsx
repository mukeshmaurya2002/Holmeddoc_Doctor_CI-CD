import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { moderateScale } from "react-native-size-matters";
import { CommonActions, RouteProp, useRoute } from "@react-navigation/native";
import { MainStackNavigatorProps } from "../../routes/type";
import { useAppDispatch } from "../../redux/hook";
import { Colors } from "../../constants";
import { SuccessModalSvg } from "../../../assets/svg";
import { commonStyles, fontStyles } from "../../styles";
import TakeSpace from "../take-space/take-space";
import CustomButton from "../custom-button/custom-button";

const SuccessModalScreen = ({ navigation }: any) => {
    const [renderModal, setRenderModal] = useState(true);
    const { params: { message = '' } } = useRoute<RouteProp<MainStackNavigatorProps, 'SuccessModalScreen'>>();
    const dispatch = useAppDispatch();
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
                            <SuccessModalSvg />
                            <Text
                                style={[
                                    fontStyles.notoSansBold20,
                                    { fontSize: moderateScale(24) },
                                ]}
                            >
                                Success!
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
                            <View style={[{ paddingHorizontal: moderateScale(14), flexDirection: "row", columnGap: moderateScale(8) }]} >
                                <CustomButton
                                    label={"Back to Home"}
                                    extraCusBtnStyle={[{ borderRadius: moderateScale(4), backgroundColor: Colors.offBlack5 }]}
                                    extraCusTxtStyle={[fontStyles.notoSansMedium14]}
                                    btnWidth={'48.5%'}
                                    onPress={() => {
                                        navigation.dispatch(
                                            CommonActions.reset({
                                                index: 0,
                                                routes: [
                                                    { name: 'DrawerStack' },
                                                ],
                                            })
                                        );
                                    }}
                                />
                                <CustomButton
                                    label={"Appointments"}
                                    extraCusTxtStyle={[{ color: Colors.offWhite }]}
                                    onPress={() => {
                                        // dispatch(setCallUserDetailsApi(true));
                                        // navigation.navigate('ProfileStack', { screen: "VerifyDetails" });
                                        setRenderModal(false);
                                        navigation.dispatch(
                                            CommonActions.reset({
                                                index: 0,
                                                routes: [
                                                    { name: 'DrawerStack' },
                                                    {
                                                        name: 'DrawerScreen',
                                                        state: {
                                                            routes: [
                                                                {
                                                                    name: 'DrawerAppointment',
                                                                },
                                                            ],
                                                        },
                                                    },
                                                ],
                                            })
                                        );
                                    }}
                                    btnWidth={"48.5%"}
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

export default SuccessModalScreen;
