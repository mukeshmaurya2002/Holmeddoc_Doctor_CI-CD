import { FlatList, Pressable, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../../constants'
import { BorderBottom, CustomButton, Header, TakeSpace } from '../../../components'
import { AdditionalInfoSvg, BackArrowSvg, DeleteAccountArrowSvg, DoctorSvg, DrawerChangePassword, DrawerDeleteAccountSvg, FilledCompletionSvg, ForwardArrow, LogoutSvg, PersonalSvg, practiseInfoSvg, ProfessionalInfoSvg, ProfileCompleteSvg, ProfileIncompleteSvg, ProfileInsuranceCompleteSvg, ProfileInsuranceIncompleteSvg, ProfileTimeSlotCompleteSvg, ProfileTimeSlotIncompleteSvg, ProfileVerificationSuccessSvg, ProfileVerifiedSvg, profileVerifiedTouchSoonSvg, UnderVerificationSvg, UnfilledCompletionSvg } from '../../../../assets/svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import { helpers } from '../../../utility/helpers'
import { moderateScale, s } from 'react-native-size-matters'
import { commonStyles, fontStyles } from '../../../styles'
import { navigationHook } from '../../../hooks/navigation.hook'
import CustomModal from '../../../components/custom-modal/custom-modal'
import { useAppDispatch } from '../../../redux/hook'
import { ProfileCompleteLogoutModal } from '../../auth-screens/profile-completion'
import DeleteModal from '../../../routes/components/delete-modal'
import LogoutModal from '../../../routes/components/logout-modal'

const CompletedProfileScreen = (props: any) => {
    const { navigateTo } = navigationHook()
    const [isModalVisible, setModalVisible] = React.useState({ delete: false, logout: false });
    const [open, setOpen] = React.useState<boolean>(false);
    const toggleOpen = () => setOpen(!open);

    const profileCompletionData = [
        {
            title: "Completed",
            data: [
                // {
                //     id: 1,
                //     label: 'Profile',
                //     icon: ProfileIncompleteSvg,
                //     onPress: toggleOpen,
                //     isVisible: true
                // },
                {
                    id: 2,
                    label: 'Insurance',
                    icon: ProfileInsuranceIncompleteSvg,
                    onPress: () => navigateTo('ProfileCompleteStack', { screen: "ProfileCompleteInsuranceScreen" }),
                    isVisible: true
                },
                {
                    id: 3,
                    label: 'Time Slot',
                    icon: ProfileTimeSlotIncompleteSvg,
                    onPress: () => navigateTo('ProfileCompleteStack', { screen: "ProfileCompleteTimeSlotScreen" }),
                    isVisible: true
                },
                {
                    id: 4,
                    label: "Change Password",
                    icon: DrawerChangePassword,
                    isVisible: true,
                    onPress: () => navigateTo('DrawerScreen', { screen: "ChangePassword" }),

                },
                {
                    id: 5,
                    label: "Delete Account",
                    icon: DrawerDeleteAccountSvg,
                    onPress: () => setModalVisible({ ...isModalVisible, delete: true }),
                    isVisible: true,
                },

                {
                    id: 6,
                    label: 'Logout',
                    icon: LogoutSvg,
                    onPress: () => setModalVisible({ ...isModalVisible, logout: true }),
                    // onPress: () => handleDrawerPress({ screenName: 'DrawerPrescriptionScreen' }),
                    isVisible: true
                }
            ]
        },

    ];
    const profileDetailsList = [
        {
            id: 1,
            label: "Personal info",
            icon: PersonalSvg,
            onPress: () => navigateTo('DrawerScreen', { screen: "PersonalInfoScreen" })
        },
        {
            id: 2,
            label: "Professional info",
            icon: ProfessionalInfoSvg,
            onPress: () => navigateTo('DrawerScreen', { screen: "ProfessionalInfoScreen" })
        },
        {
            id: 3,
            label: "Practice info",
            icon: practiseInfoSvg,
            onPress: () => navigateTo('DrawerScreen', { screen: "PractiseInfoScreen" })
        },
        {
            id: 4,
            label: "Additional info",
            icon: AdditionalInfoSvg,
            onPress: () => navigateTo('DrawerScreen', { screen: "AdditionalInfoScreen" })
        }
    ]
    const ProfileDetailsList = () => {
        return (
            <View style={{ paddingVertical: moderateScale(10), borderWidth: moderateScale(1), borderColor: 'rgba(207, 139, 21, 0.15)', borderRadius: moderateScale(10), marginHorizontal: moderateScale(8), marginVertical: moderateScale(8) }}>
                <FlatList
                    data={profileDetailsList}
                    renderItem={profileDetailsItem}
                    keyExtractor={item => item.id.toString()}
                    scrollEnabled={false}
                    ItemSeparatorComponent={() => <TakeSpace space={moderateScale(6)} />}
                />
            </View>
        )
    }
    const profileDetailsItem = React.useCallback(({ item }: { item: any }) => {
        const isLastItem = profileDetailsList[profileDetailsList?.length - 1]?.id === item?.id
        return (
            <>
                <Pressable style={[commonStyles.RowJSBAC, { paddingHorizontal: moderateScale(16), }]} onPress={item?.onPress}>
                    <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(15) }]}>
                        {React.createElement(item?.icon)}
                        <Text style={[fontStyles.notoSansRegular14, { opacity: 0.75 }]}>{item?.label}</Text>
                    </View>
                </Pressable>
                <View style={{ paddingHorizontal: moderateScale(16), paddingTop: moderateScale(6) }}>
                    {isLastItem ? null : <BorderBottom />}
                </View>
            </>
        )
    }, []);
    const ProfileCompletionItem = React.useCallback(({ item }: { item: any }) => {
        const isLastItem = profileCompletionData[profileCompletionData?.length - 1]?.data[profileCompletionData[profileCompletionData?.length - 1].data?.length - 1]?.id === item?.id
        return (
            <>
                <Pressable style={[commonStyles.RowJSBAC, { paddingHorizontal: moderateScale(8) }]} onPress={item?.onPress}>
                    <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(15) }]}>
                        {React.createElement(item?.icon)}
                        <Text style={[fontStyles.notoSansSemiBold14, {
                            color: item?.label === "Delete Account" ? Colors.dangerTextColor : Colors.offBlack
                        }]}>{item?.label}</Text>
                        {/* {
                            open && <ProfileDetailsList />
                        } */}
                    </View>
                    {item?.label === "Delete Account" ? <DeleteAccountArrowSvg /> : <ForwardArrow />}
                </Pressable>
                <View style={{ paddingHorizontal: moderateScale(16), paddingTop: moderateScale(6) }}>
                    {isLastItem ? null : <BorderBottom />}
                </View>
            </>
        )
    }, []);

    return (
        <>
            <SafeAreaView style={[{ backgroundColor: Colors.primaryColor }, helpers.isIos && { paddingTop: moderateScale(-38) }]} />
            <View style={styles.container} >
                <Header
                    label='Profile'
                    headText=''
                />
                <ScrollView style={styles.secondaryContainer} showsVerticalScrollIndicator={false}>
                    <View style={[commonStyles.flexRow, { columnGap: moderateScale(12), padding: moderateScale(16) }]}>
                        <View>
                            <DoctorSvg />
                        </View>
                        <View style={styles.profileColContainer}>
                            <Text style={[fontStyles.notoSansMedium16]}>
                                DR. Mukesh Maurya
                            </Text>
                            <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack50 }]}>
                                General Physician
                            </Text>
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: moderateScale(16) }}>
                        <BorderBottom />
                    </View>

                    <SectionList
                        sections={profileCompletionData}
                        scrollEnabled={false}
                        contentContainerStyle={{ padding: moderateScale(10) }}
                        ItemSeparatorComponent={() => (<TakeSpace space={6} />)}
                        renderSectionHeader={({ section: { title } }) => {
                            return (
                                <>
                                    <View style={{ padding: moderateScale(8), marginBottom: moderateScale(10), opacity: 0.75 }}>
                                        <Text style={fontStyles.notoSansRegular12}>{title}</Text>
                                    </View>
                                    <Pressable style={[commonStyles.RowJSBAC, { paddingHorizontal: moderateScale(8) }]} onPress={toggleOpen}>
                                        <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(15) }]}>
                                            {React.createElement(ProfileIncompleteSvg)}
                                            <Text style={[fontStyles.notoSansSemiBold14]}>
                                                Profile
                                            </Text>
                                        </View>
                                        <Pressable style={[open && styles.openStyle]} onPress={toggleOpen}>
                                            <ForwardArrow />
                                        </Pressable>
                                    </Pressable>
                                    {
                                        !open && <View style={{ paddingHorizontal: moderateScale(16), paddingTop: moderateScale(6) }}>
                                            <BorderBottom />
                                        </View>
                                    }
                                    {
                                        open && <ProfileDetailsList />
                                    }
                                    <TakeSpace space={4} />
                                </>
                            )
                        }}
                        renderItem={ProfileCompletionItem}
                    />
                </ScrollView>
            </View>
            {isModalVisible.delete && (
                <CustomModal isVisible={isModalVisible.delete} closeModal={() => setModalVisible({ ...isModalVisible, delete: false })}>
                    <DeleteModal handleClose={() => setModalVisible({ ...isModalVisible, delete: false })} />
                </CustomModal>
            )}
            {isModalVisible.logout && (
                <CustomModal isVisible={isModalVisible.logout} closeModal={() => setModalVisible({ ...isModalVisible, logout: false })}>
                    <LogoutModal handleClose={() => setModalVisible({ ...isModalVisible, logout: false })} />
                </CustomModal>
            )}
        </>
    )
}

export default CompletedProfileScreen

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
    openStyle: { transform: [{ rotate: '90deg' }] }
    ,
    secondaryContainer: {
        // flex: 1,
        // backgroundColor: Colors.offWhite,
        // padding: moderateScale(16)
    }
})