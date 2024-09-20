// React States and hooks
import React from "react";
import { StatusBar } from "react-native";

// Screens
import { Login, OnboardScreen, RegisterScreen, VerifyOtp, ForgotPassword, ResetPassword, DrawerAppointment, AppointmentDetails, DrawerPatients, PatientDetails, AddPatient, Setting, CalenderFilter } from "../screens";
import { PrescriptionHistory, AboutUs, AdditionalInfoScreen, CompletedProfileScreen, DrawerChangePassword, DrawerContactUs, DrawerPrescriptionScreen, PersonalInfoScreen, PoliciesScreen, PractiseInfoScreen, PrivacyPolicies, ProfessionalInfoScreen, TermsAndCondition, VitalSigns } from "../screens/drawer-screen";

//  custome hook and context
import { MainStackNavigatorRef } from "../ref/main-stack-navigator-ref";

// other libraries
import notifee from '@notifee/react-native';
import LottieSplashScreen from 'react-native-lottie-splash-screen';

// types
import { DrawerStackScreenProps, MainStackNavigatorProps, SignUpStackProps, ProfileCompleteScreenProps } from "./type";

// Navigation Imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Helpers, utils and constant
import { helpers } from "../utility/helpers";

// Redux store slices
import { Colors } from "../constants";
import DrawerStack from "./drawer-stack";
import SuccessModalScreen from "../components/modals/success-modal";
import FailureModalScreen from "../components/modals/failure-modal";
import { AddTimeSlot, ProfileCompleteInsuranceScreen, ProfileCompleteLogoutModal, ProfileCompleteStepScreen, ProfileCompleteTimeSlotScreen } from "../screens/auth-screens/profile-completion";
import ProfileSubmissionInfoModalScreen from "../screens/auth-screens/profile-completion/screens/profile-submission-info-modal.screen";
import CompleteProfileScreen from "../screens/auth-screens/profile-completion/complete-profile.screen";
import TimelineCalendarScreen from "../screens/calendar-event/time-line-calendar";
import AppointmentSectionDetails from "../screens/dashboard/screens/appointment-section-details";
import CalendarAppointmentDetails from "../screens/calendar-event/calendar-appointment-details";


// stacks
const Stack = createNativeStackNavigator<MainStackNavigatorProps>();
const SignUpStack = createNativeStackNavigator<SignUpStackProps>();
const DrawerScreenStack = createNativeStackNavigator<DrawerStackScreenProps>();
const ProfileCompleteScreenStack = createNativeStackNavigator<ProfileCompleteScreenProps>();


const getInitialNotification = async () => {
  const remoteMessage = await notifee.getInitialNotification();
  if (remoteMessage) {
    const screenName = remoteMessage?.notification?.data?.screen;
    if (screenName) {
      helpers.navigateThroughFCM(screenName);
    }
  }
};

const AuthStack = () => {
  return (
    <SignUpStack.Navigator screenOptions={{ headerShown: false }}>
      <SignUpStack.Screen name={'Onboard'} component={OnboardScreen} />
      <SignUpStack.Screen name={'Login'} component={Login} />
      <SignUpStack.Screen name={'VerifyOtp'} component={VerifyOtp} />
      <SignUpStack.Screen name={'Register'} component={RegisterScreen} />
      <SignUpStack.Screen name={'ResetPassword'} component={ResetPassword} />
      <SignUpStack.Screen name={'ForgotPassword'} component={ForgotPassword} />
      <SignUpStack.Screen name={'TermsAndCondition'} component={TermsAndCondition} />
      <SignUpStack.Screen name={'PrivacyPolicies'} component={PrivacyPolicies} />

    </SignUpStack.Navigator>
  )
}
const ProfileCompleteStack = () => {
  return (
    <ProfileCompleteScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileCompleteScreenStack.Screen name={'CompleteProfileScreen'} component={CompleteProfileScreen} />
      <ProfileCompleteScreenStack.Screen name={'ProfileCompleteStepScreen'} component={ProfileCompleteStepScreen} />
      <ProfileCompleteScreenStack.Screen name={'ProfileCompleteInsuranceScreen'} component={ProfileCompleteInsuranceScreen} />
      <ProfileCompleteScreenStack.Screen name={'ProfileCompleteTimeSlotScreen'} component={ProfileCompleteTimeSlotScreen} />
      <ProfileCompleteScreenStack.Screen name={'AddTimeSlot'} component={AddTimeSlot} />
      <ProfileCompleteScreenStack.Screen name={'ProfileCompleteLogoutModal'} component={ProfileCompleteLogoutModal} />
    </ProfileCompleteScreenStack.Navigator>
  )
}



const DrawerScreen = () => {
  return (
    <DrawerScreenStack.Navigator screenOptions={{ headerShown: false }}>
      <DrawerScreenStack.Screen name={'Setting'} component={Setting} />
      <DrawerScreenStack.Screen name={'AboutUs'} component={AboutUs} />
      <DrawerScreenStack.Screen name={'AddPatient'} component={AddPatient} />
      <DrawerScreenStack.Screen name={'CalenderFilter'} component={CalenderFilter} />
      <DrawerScreenStack.Screen name={'PersonalInfoScreen'} component={PersonalInfoScreen} />
      <DrawerScreenStack.Screen name={'ProfessionalInfoScreen'} component={ProfessionalInfoScreen} />
      <DrawerScreenStack.Screen name={'PractiseInfoScreen'} component={PractiseInfoScreen} />
      <DrawerScreenStack.Screen name={'AdditionalInfoScreen'} component={AdditionalInfoScreen} />
      <DrawerScreenStack.Screen name={'VitalSigns'} component={VitalSigns} />
      <DrawerScreenStack.Screen name={'ContactUs'} component={DrawerContactUs} />
      <DrawerScreenStack.Screen name={'DrawerPatients'} component={DrawerPatients} />
      <DrawerScreenStack.Screen name={'PatientDetails'} component={PatientDetails} />
      <DrawerScreenStack.Screen name={'PoliciesScreen'} component={PoliciesScreen} />
      <DrawerScreenStack.Screen name={'PrivacyPolicies'} component={PrivacyPolicies} />
      <DrawerScreenStack.Screen name={'TermsAndCondition'} component={TermsAndCondition} />
      <DrawerScreenStack.Screen name={'ChangePassword'} component={DrawerChangePassword} />
      <DrawerScreenStack.Screen name={'PrescriptionHistory'} component={PrescriptionHistory} />
      <DrawerScreenStack.Screen name={'DrawerAppointment'} component={DrawerAppointment} />
      <DrawerScreenStack.Screen name={'AppointmentDetails'} component={AppointmentDetails} />
      <DrawerScreenStack.Screen name={'DrawerPrescriptionScreen'} component={DrawerPrescriptionScreen} />
      <DrawerScreenStack.Screen name={'CompletedProfileScreen'} component={CompletedProfileScreen} />
      <DrawerScreenStack.Screen name={'AppointmentCalendar'} component={TimelineCalendarScreen} />

    </DrawerScreenStack.Navigator>
  )
}

const MainStack = () => {
  const [routeName, setRouteName] = React.useState<string>('Onboard');

  const getBackground = (routeName: string) => {
    if (helpers.setTranslucent(routeName)) {
      return 'transparent';
    }
    return Colors.primaryColor;
  };

  const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
  const hideSplash = () => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        LottieSplashScreen.hide();
        return resolve();
      }, 1000);
    });
  };

  const initialiseApp = async () => {
    await hideSplash()
    await getInitialNotification();
    // await getLinkingName();
  };

  React.useEffect(() => {
    // delay(1000);
    initialiseApp()
  }, [])

  return (
    <>
      <NavigationContainer ref={MainStackNavigatorRef}
        onStateChange={(state) => {
          const currentRoute = state?.routes[state?.index];
          setRouteName(currentRoute?.name!)
        }}
      >
        <StatusBar translucent backgroundColor={getBackground(routeName)} barStyle={'light-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Group key={'Guest'}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
            <Stack.Screen name="ProfileCompleteStack" component={ProfileCompleteStack} />
            <Stack.Screen name="DrawerStack" component={DrawerStack} />
            <Stack.Screen name="DrawerScreen" component={DrawerScreen} />
            <Stack.Screen name="SuccessModalScreen" component={SuccessModalScreen} />
            <Stack.Screen name="AppointmentSectionDetails" component={AppointmentSectionDetails} />
            <Stack.Screen name="CalendarAppointmentDetails" component={CalendarAppointmentDetails} />

            <Stack.Screen name="ProfileSubmissionInfoModalScreen" component={ProfileSubmissionInfoModalScreen} />
            <Stack.Screen name="FailureModalScreen" component={FailureModalScreen} />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default MainStack;