import React from 'react';
import { Colors, Images } from '../../constants';
import FastImage from 'react-native-fast-image';
import { helpers } from '../../utility/helpers';
import DeviceInfo from 'react-native-device-info';
import { commonStyles, fontStyles } from '../../styles';
import { DrawerActions } from '@react-navigation/native';
import { moderateScale } from 'react-native-size-matters';
import { TakeSpace, BorderBottom } from '../../components';
import { navigationHook } from '../../hooks/navigation.hook';
import { DrawerContentComponentProps, } from '@react-navigation/drawer';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/responsive';
import { View, Text, FlatList, Pressable, SectionList, StyleSheet, StatusBar } from 'react-native';
import { CrossIconSvg, DrawerAboutUsSvg, DrawerAppointmentSvg, DrawerContactUsSvg, DrawerDashBoardSvg, DrawerPatientSvg, DrawerPencil, DrawerPoliciesSvg, DrawerRightArrowSvg, DrawerSettinSvg, ForwardArrow } from '../../../assets/svg'

const Header = () => {
    const { navigateTo } = navigationHook()
    return (
        <View style={[commonStyles.RowJSBAC, { paddingHorizontal: moderateScale(10) }]}>
            <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(10) }]}>
                <View>
                    <FastImage
                        source={Images.profileImage}
                        style={styles.usreImg}
                        resizeMode={FastImage.resizeMode.cover}
                    />
                </View>
                <View style={{ rowGap: moderateScale(10) }}>
                    <Text style={[fontStyles.notoSansSemiBold16, { color: Colors.offWhite }]}>
                        Dr. John Doe
                    </Text>
                    <Text style={[fontStyles.notoSansRegular12, { color: Colors.offBlack75 }]}>+1 789955412</Text>
                </View>
            </View>
            <Pressable onPress={() => navigateTo('DrawerScreen', { screen: "CompletedProfileScreen" })}>
                <DrawerRightArrowSvg />
            </Pressable>
        </View>
    )
};
const DrawerComp = (props: DrawerContentComponentProps) => {

    const drawerData = [
        {
            title: "Main",
            data: [
                {
                    id: 1,
                    label: 'Dashboard',
                    icon: DrawerDashBoardSvg,
                    onPress: () => CloseDrawer(),
                    isVisible: true
                },
                {
                    id: 2,
                    label: 'Appointments',
                    icon: DrawerAppointmentSvg,
                    onPress: () => handleDrawerPress({ screenName: 'DrawerAppointment' }),
                    isVisible: true
                },
                {
                    id: 3,
                    label: 'Patients',
                    icon: DrawerPatientSvg,
                    onPress: () => handleDrawerPress({ screenName: 'DrawerPatients' }),
                    isVisible: true
                },
            ]
        },
        {
            title: "Other",
            data: [
                {
                    id: 1,
                    label: 'About us',
                    icon: DrawerAboutUsSvg,
                    onPress: () => handleDrawerPress({ screenName: 'AboutUs' }),
                    isVisible: true
                },
                {
                    id: 2,
                    label: 'Contact us',
                    icon: DrawerContactUsSvg,
                    onPress: () => handleDrawerPress({ screenName: 'ContactUs' }),
                    isVisible: true
                },
                {
                    id: 3,
                    label: 'Settings',
                    icon: DrawerSettinSvg,
                    onPress: () => handleDrawerPress({ screenName: 'Setting' }),
                    isVisible: true
                },
                {
                    id: 4,
                    label: 'Policies',
                    icon: DrawerPoliciesSvg,
                    onPress: () => handleDrawerPress({ screenName: 'PoliciesScreen' }),
                    isVisible: true
                }
            ]
        }
    ];

    const { navigation } = props;
    const showStatusBarRef = React.useRef(false);
    const CloseDrawer = () => navigation.dispatch(DrawerActions.closeDrawer());
    const handleDrawerPress = React.useCallback(({ screenName }: { screenName: string }) => {
        navigation.navigate('DrawerScreen', { screen: screenName });
        // navigation.closeDrawer();
    }, [navigation]);

    const [imageHeight, setImageHeight] = React.useState(0);
    const [scrollY, setScrollY] = React.useState(0);

    const handleScroll = React.useCallback((event: any) => {
        const y = event.nativeEvent.contentOffset.y;
        setScrollY(y);
        if (y > imageHeight) {
            showStatusBarRef.current = false;
        } else if (y <= imageHeight) {
            showStatusBarRef.current = true;
        }
    }, [setScrollY, showStatusBarRef, imageHeight]);


    const DrawerItem = React.useCallback(({ item }: { item: any }) => {
        const isLastItem = drawerData[drawerData?.length - 1]?.data[drawerData[drawerData?.length - 1].data?.length - 1]?.id === item?.id
        return (
            <>
                <Pressable style={[commonStyles.RowJSBAC, { paddingHorizontal: moderateScale(16) }]} onPress={item?.onPress}>
                    <View style={[commonStyles.RowJFSAC, { columnGap: moderateScale(15) }]}>
                        {React.createElement(item?.icon)}
                        <Text style={fontStyles.notoSansSemiBold14}>{item?.label}</Text>
                    </View>
                    <ForwardArrow />
                </Pressable>
                <View style={{ paddingHorizontal: moderateScale(16) }}>
                    {isLastItem ? null : <BorderBottom />}
                </View>
            </>
        )
    }, []);

    const renderDrawer = () => {
        return (
            <View style={commonStyles._flexOneBg(Colors.offWhite)}>
                <FastImage
                    source={Images.drawerBg}
                    style={styles.bgImg}
                    resizeMode={FastImage.resizeMode.stretch}
                />
                <Pressable onPress={CloseDrawer} style={styles.crossIcon}>
                    <CrossIconSvg />
                </Pressable>
                <View style={{ marginTop: moderateScale(-34) }}>
                    <Header />
                    <View style={styles.bottBord}>
                        <BorderBottom />
                    </View>
                </View>
                <SectionList
                    sections={drawerData}
                    scrollEnabled={false}
                    contentContainerStyle={{ padding: moderateScale(10) }}
                    ItemSeparatorComponent={() => (<TakeSpace space={moderateScale(6)} />)}
                    renderSectionHeader={({ section: { title } }) => {
                        return (
                            <View style={{ padding: moderateScale(16), opacity: 0.75 }}>
                                <Text style={fontStyles.notoSansRegular12}>{title}</Text>
                            </View>
                        )
                    }}
                    renderItem={DrawerItem}
                />
            </View>
        )
    }
    return (
        <>
            {showStatusBarRef.current === true && scrollY >= 72 && <StatusBar barStyle="light-content" backgroundColor={Colors.primaryColor} />}
            <FlatList
                data={[1]}
                onScroll={handleScroll}
                keyExtractor={(item, index) => index.toString()}
                scrollEventThrottle={16}
                renderItem={renderDrawer}
                showsVerticalScrollIndicator={false}
            />
            <Text style={[fontStyles.notoSansRegular10, styles.appVersion]}>
                {`App version ${DeviceInfo.getVersion()}`}
            </Text>
        </>
    )
}

export default DrawerComp;

const styles = StyleSheet.create({
    appVersion: { opacity: 0.5, position: 'absolute', alignSelf: 'center', bottom: helpers.isIos ? moderateScale(80) : moderateScale(10) },
    bgImg: { width: SCREEN_WIDTH, height: SCREEN_HEIGHT * 0.19, justifyContent: 'flex-end', paddingHorizontal: moderateScale(10) },
    bottBord: { paddingHorizontal: moderateScale(16), paddingTop: moderateScale(10) },
    crossIcon: { position: 'absolute', top: moderateScale(36), right: moderateScale(10) },
    usreImg: { width: moderateScale(64), height: moderateScale(64), borderRadius: moderateScale(20) }
})
