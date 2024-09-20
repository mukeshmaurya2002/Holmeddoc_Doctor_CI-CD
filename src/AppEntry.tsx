import { StyleSheet, LogBox, KeyboardAvoidingView, Platform, View, Text } from "react-native";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MainStack from "./routes/main-stack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistAppStore, store } from "./redux/store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { helpers } from "./utility/helpers";
import messaging from '@react-native-firebase/messaging';
// import { requestUserPermission } from "./utility/notification-service";


LogBox.ignoreLogs(['new NativeEventEmitter', 'new NativeEventEmitter()']);

const AppEntry = () => {

    // React.useEffect(() => {
    //     requestUserPermission();
    //     const unsubscribe = messaging().onMessage(async remoteMessage => {
    //         if (!remoteMessage) return;
    //         //   console.log('Message handled in the background!', remoteMessage);
    //         helpers.onDisplayNotification(remoteMessage);
    //     });
    //     return () => unsubscribe();
    // }, []);

    return (
        <SafeAreaProvider style={[styles.rootStyle]}>
            <Provider store={store}>
                <PersistGate persistor={persistAppStore}>
                    <GestureHandlerRootView style={[styles.rootStyle]}>
                        <KeyboardAvoidingView style={[styles.rootStyle]}
                            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                            <MainStack />

                        </KeyboardAvoidingView>
                    </GestureHandlerRootView>
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    rootStyle: { flex: 1 },
});

export default AppEntry;
