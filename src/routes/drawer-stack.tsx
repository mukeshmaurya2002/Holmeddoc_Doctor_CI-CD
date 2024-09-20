import React from 'react';

import DrawerComp from './components/drawer-comp';
import { SCREEN_WIDTH } from '../constants/responsive';
import { moderateScale } from 'react-native-size-matters';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens';
import { useAppSelector } from '../redux/hook';
import CompleteProfileScreen from '../screens/auth-screens/profile-completion/complete-profile.screen';

const Drawer = createDrawerNavigator()

const DrawerStack = ({ navigation }: { navigation: any }) => {
    const { isProfileComplete } = useAppSelector(state => state.common)
    console.log('isProfileComplete', isProfileComplete)
    const renderHome = React.useCallback(() => {
        return (
            isProfileComplete ? <Home /> : <CompleteProfileScreen />
        )
    }, [isProfileComplete]);
    return (
        <Drawer.Navigator drawerContent={(props) => <DrawerComp {...props} navigation={navigation} />}
            screenOptions={{
                drawerPosition: 'right',
                drawerType: 'slide',
                headerShown: false,
                drawerStyle: { width: SCREEN_WIDTH },
                swipeEdgeWidth: moderateScale(20)
            }}
        >
            <Drawer.Screen name='Home' component={renderHome} />
        </Drawer.Navigator>
    )
}

export default DrawerStack
