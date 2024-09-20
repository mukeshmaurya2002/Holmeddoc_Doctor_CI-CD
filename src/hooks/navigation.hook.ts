import { ParamListBase, useNavigation, CommonActions } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type CombinedNavigationProp = StackNavigationProp<ParamListBase> & DrawerNavigationProp<ParamListBase>;

const navigationHook = () => {
    const navigation = useNavigation<CombinedNavigationProp>();
    const navigateTo = (module: string, params?: object | undefined) => {
        navigation.navigate(module, params);
    };
    const navigateReplace = (module: string, params?: object | undefined) => {
        navigation.replace(module, params);
    };
    const navigation1 = () => navigation;
    const navigateReset = (name: string, params?: object | undefined) => {
        navigation.reset({
            index: 0,
            routes: [{ name: name, params: params }],
        });
    };
    const navigateBack = () => { navigation.goBack() };

    const openDrawer = () => { navigation.openDrawer() };


    const navigatePush = (module: string, params?: object | undefined) => {
        navigation.push(module, params);
    };

    const navigateDispatch = (name: string, params?: any) => {
        navigation.dispatch({
            ...CommonActions.reset({
                index: 0,
                routes: [
                    {
                        name: "DrawerNav",
                        params: { screen: "BottomNav" }
                    },
                    { name: name, params: { params: params } },
                ],
            })
        });
    };

    return {
        navigateTo,
        navigateReset,
        navigateDispatch,
        navigateBack,
        navigatePush,
        openDrawer,
        navigation,
        navigateReplace,
        navigation1

    };
}

export { navigationHook };
