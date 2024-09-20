import Modal from "react-native-modal";
import React, { useState } from "react";
import { Colors } from "../../../../constants";
import { StyleSheet, Text, View } from "react-native";
import { BackArrowSvg } from "../../../../../assets/svg";
import { moderateScale } from "react-native-size-matters";
import { commonStyles, fontStyles } from "../../../../styles";
import { RouteProp, useRoute } from "@react-navigation/native";
import { MainStackNavigatorProps } from "../../../../routes/type";
import { CustomButton, Header, TakeSpace } from "../../../../components";
import { navigationHook } from "../../../../hooks/navigation.hook";


const ProfileSubmissionInfoModalScreen = ({ navigation }: any) => {
    
    const { params: { message = '', icon, title, showButton, btnText, onPress } } = useRoute<RouteProp<MainStackNavigatorProps, 'ProfileSubmissionInfoModalScreen'>>();
    const [renderModal, setRenderModal] = useState(true);
    const { navigateTo } = navigationHook();

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
                        <Header
                            label=''
                            headText=''
                            icon={BackArrowSvg}
                        />

                        <View style={styles.container}>
                            {React.createElement(icon)}
                            <Text
                                style={[
                                    fontStyles.notoSansSemiBold18,
                                    { textAlign: 'center' },
                                ]}
                            >
                                {title}
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
                                {message}
                            </Text>
                            <TakeSpace space={moderateScale(5)} />
                        </View>
                        {
                            showButton && <View style={{ rowGap: moderateScale(10) }}>
                                <View
                                    style={{
                                        borderTopWidth: moderateScale(1),
                                        borderTopColor: Colors.borderColor,
                                    }}
                                />
                                <View style={[{ paddingHorizontal: moderateScale(14) }]}>
                                    <CustomButton
                                        label={btnText}
                                        customTxtStyle={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}
                                        onPress={() => {
                                            setRenderModal(false)
                                            onPress();
                                            navigateTo('DrawerStack', { screen: 'Home' })
                                        }}
                                        btnWidth={"100%"}
                                    />
                                </View>
                                <TakeSpace space={moderateScale(0)} />
                            </View>
                        }
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

export default ProfileSubmissionInfoModalScreen;
