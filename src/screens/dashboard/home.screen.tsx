import React from 'react'
import { useHomeHook } from './home.hooks'
import { commonStyles } from '../../styles'
import { TakeSpace } from '../../components'
import { Colors, Images } from '../../constants'
import { BackGroundLine } from '../../../assets/svg'
import GreetSection from './components/greet-section'
import { moderateScale } from 'react-native-size-matters'
import LineChartWithBars from '../graphs-chart/line-chart-screen'
import { PieChartComponent } from '../graphs-chart/pie-chart-screen'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/responsive'
import TimelineCalendarScreen from '../calendar-event/time-line-calendar'
import { AppointmentSection, StatSection, YourPatientSect } from './components'
import { FlatList, ImageBackground, PermissionsAndroid, Platform, StyleSheet, View } from 'react-native'

const Home = () => {
    const { openDrawer } = useHomeHook();

    const StoragePermission = async () => {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
        const hasPermission = await PermissionsAndroid.check(permission);
        if (hasPermission) { return true; }
        const status = await PermissionsAndroid.request(permission);
        return status === 'granted';
    };

    React.useEffect(() => {
        if (Platform.OS === 'android') StoragePermission();
    }, []);


    const renderHome = React.useCallback(() => {
        return (
            <>
                <ImageBackground source={Images.MainScreenBanner} style={styles.BgImgStyle} >
                    <TakeSpace space={15} />
                    <View style={styles.SectionCont}>
                        <GreetSection openDrawer={openDrawer} />
                        <TakeSpace space={10} />
                        <View style={styles.statCont}>
                            <StatSection />
                        </View>
                    </View>
                </ImageBackground>
                <TakeSpace space={moderateScale(10)} />
                <View style={styles.secondaryConatiner}>
                    <YourPatientSect />
                    <BackGroundLine />
                    <AppointmentSection />
                    <BackGroundLine />
                    <PieChartComponent data={undefined} />
                    <BackGroundLine />
                    <LineChartWithBars />
                    {/* <CalendarEventScreen /> */}
                </View>

            </>
        )
    }, []);

    return (
        <View style={commonStyles._flexOneBg(Colors.offWhite)}>
            <FlatList
                data={[1]}
                bounces={false}
                renderItem={renderHome}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    BgImgStyle: { width: SCREEN_WIDTH, height: SCREEN_HEIGHT * (0.35) },
    SectionCont: { position: 'relative', padding: moderateScale(16) },
    secondaryConatiner: { flex: 1, backgroundColor: Colors.offWhite },
    statCont: { zIndex: 9999 }
})