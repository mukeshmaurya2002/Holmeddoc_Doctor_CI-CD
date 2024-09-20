import { Pressable, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants'
import { BorderBottom, CustomButton, Header, TakeSpace } from '../../../components'
import { BackArrowSvg, DoctorSvg, FilledCompletionSvg, ForwardArrow, LogoutSvg, ProfileCompleteSvg, ProfileIncompleteSvg, ProfileInsuranceCompleteSvg, ProfileInsuranceIncompleteSvg, ProfileTimeSlotCompleteSvg, ProfileTimeSlotIncompleteSvg, ProfileVerificationSuccessSvg, ProfileVerifiedSvg, profileVerifiedTouchSoonSvg, UnderVerificationSvg, UnfilledCompletionSvg } from '../../../../assets/svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { helpers } from '../../../utility/helpers'
import { moderateScale, s } from 'react-native-size-matters'
import { commonStyles, fontStyles } from '../../../styles'
import { navigationHook } from '../../../hooks/navigation.hook'
import CustomModal from '../../../components/custom-modal/custom-modal'
import ProfileCompleteLogoutModal from './screens/profile-complete-logout-modal'
import ProfileCompletionStatus from './screens/profile-completion-status'
import { useAppDispatch } from '../../../redux/hook'
import { setIsProfileComplete } from '../../../redux/slices/common.slice'

const CompleteProfileScreen = (props: any) => {
    const { navigateTo } = navigationHook()
    const dispatch = useAppDispatch()
    let isProfileComplete = true;
    let isInsuranceComplete = true;
    let isTimeSlotComplete = false;

    let isProfileUnderVerification = true;
    let isProifileVerified = true;

    const [isLogoutModalVisible, setIsLogoutModalVisible] = React.useState(false);
    const handleLogoutModal = () => {
        setIsLogoutModalVisible(!isLogoutModalVisible);
    }

    const profileCompletionData = [
        {
            title: "Complete the following",
            data: [
                {
                    id: 1,
                    label: 'Profile',
                    icon: isProfileComplete ? ProfileCompleteSvg : ProfileIncompleteSvg,
                    onPress: () => navigateTo('ProfileCompleteStack', { screen: "ProfileCompleteStepScreen" }),
                    isVisible: true
                },
                {
                    id: 2,
                    label: 'Insurance',
                    icon: isInsuranceComplete ? ProfileInsuranceCompleteSvg : ProfileInsuranceIncompleteSvg,
                    onPress: () => navigateTo('ProfileCompleteStack', { screen: "ProfileCompleteInsuranceScreen" }),
                    isVisible: true
                },
                {
                    id: 3,
                    label: 'Time Slot',
                    icon: isTimeSlotComplete ? ProfileTimeSlotCompleteSvg : ProfileTimeSlotIncompleteSvg,
                    onPress: () => navigateTo('ProfileCompleteStack', { screen: "ProfileCompleteTimeSlotScreen" }),
                    isVisible: true
                },
                {
                    id: 4,
                    label: 'Logout',
                    icon: LogoutSvg,
                    onPress: handleLogoutModal,
                    // onPress: () => handleDrawerPress({ screenName: 'DrawerPrescriptionScreen' }),
                    isVisible: true
                }
            ]
        },

    ];
    const ProfileCompletionItem = React.useCallback(({ item }: { item: any }) => {
        const isLastItem = profileCompletionData[profileCompletionData?.length - 1]?.data[profileCompletionData[profileCompletionData?.length - 1].data?.length - 1]?.id === item?.id
        return (
            <View style={{ paddingHorizontal: moderateScale(16), rowGap: moderateScale(2) }}>
                <Pressable style={[commonStyles.RowJSBAC]} onPress={item?.onPress}>
                    <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(15) }]}>
                        {React.createElement(item?.icon)}
                        <Text style={fontStyles.notoSansSemiBold14}>{item?.label}</Text>
                    </View>
                    <ForwardArrow />
                </Pressable>
                {isLastItem ? null : <BorderBottom />}
            </View>
        )
    }, []);

    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={styles.container} >
                <Header
                    label='Complete Profile'
                    headText=''
                    hideBackArrow={true}
                />
                <View style={styles.secondaryContainer}>
                    <View style={[commonStyles.flexRow, { columnGap: moderateScale(12), padding: moderateScale(16) }]}>
                        <View>
                            <DoctorSvg />
                        </View>
                        <View style={styles.profileColContainer}>
                            <Text style={[fontStyles.notoSansMedium16]}>
                                Dr. Anusha Hemsworth
                            </Text>
                            <View style={[commonStyles.flexRow, { columnGap: moderateScale(5) }]}>
                                {isProfileComplete ? <FilledCompletionSvg /> : <UnfilledCompletionSvg />}
                                {isInsuranceComplete ? <FilledCompletionSvg /> : <UnfilledCompletionSvg />}
                                {isTimeSlotComplete ? <FilledCompletionSvg /> : <UnfilledCompletionSvg />}
                            </View>
                            <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack50 }]}>
                                {helpers.getProfileCompletionPercentage(isProfileComplete, isInsuranceComplete, isTimeSlotComplete) + '  completed'}
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: moderateScale(16) }}>
                        <BorderBottom />
                    </View>
                    {
                        isProfileUnderVerification &&
                        <>
                            <TakeSpace space={10} />
                            <View style={{ paddingHorizontal: moderateScale(16) }}>
                                <ProfileCompletionStatus icon={ProfileVerifiedSvg} title='Your profile is verified' description='Congratulations! Your profile request has been approved. You can now access all features' status='completed' />
                                {/* <ProfileCompletionStatus icon={UnderVerificationSvg} title='Profile is under verification' description='Registration submitted. Awaiting admin approval' status='pending' /> */}
                                {
                                    isProifileVerified ?
                                        <>
                                            <TakeSpace space={10} />
                                            <CustomButton label='Proceed'
                                                paddingProp={moderateScale(14)}
                                                btnWidth={"100%"}
                                                customTxtStyle={[fontStyles.notoSansMedium14, { color: Colors.offWhite }]}
                                                customBtnStyle={[{ alignSelf: 'center' }]}
                                                onPress={() => navigateTo('ProfileSubmissionInfoModalScreen',
                                                    {
                                                        title: 'Profile approved',
                                                        message: 'Congratulations! Your profile request has been approved. You can now access all features',
                                                        btnText: 'Proceed',
                                                        icon: ProfileVerificationSuccessSvg,
                                                        showButton: true,
                                                        onPress: () => dispatch(setIsProfileComplete(true)),
                                                    })}

                                            />
                                        </>
                                        :
                                        <ProfileCompletionStatus icon={UnderVerificationSvg} title='Profile is under verification' description='Registration submitted. Awaiting admin approval' status='pending' />
                                }

                            </View>
                        </>
                    }
                    <SectionList
                        sections={profileCompletionData}
                        scrollEnabled={false}
                        contentContainerStyle={{ padding: moderateScale(10) }}
                        ItemSeparatorComponent={() => (<TakeSpace space={10} />)}
                        renderSectionHeader={({ section: { title } }) => {
                            return (
                                <View style={{ padding: moderateScale(16), opacity: 0.75 }}>
                                    <Text style={fontStyles.notoSansRegular12}>{title}</Text>
                                </View>
                            )
                        }}
                        renderItem={ProfileCompletionItem}
                    />

                </View>
            </View>
            {
                isLogoutModalVisible &&
                <CustomModal isVisible={isLogoutModalVisible} closeModal={() => setIsLogoutModalVisible(false)} >
                    <ProfileCompleteLogoutModal handleClose={() => setIsLogoutModalVisible(false)} />
                </CustomModal>
            }
        </>
    )
}

export default CompleteProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.offWhite
    },
    profileColContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        rowGap: moderateScale(6)
        // marginRight: moderateScale(16)
        // paddingHorizontal: moderateScale(10),

    },
    secondaryContainer: {
        // flex: 1,
        // backgroundColor: Colors.offWhite,
        // padding: moderateScale(16)
    }
})