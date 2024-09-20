// import notifee, { AndroidBigPictureStyle, AndroidBigTextStyle, AndroidImportance, AndroidStyle } from '@notifee/react-native';
import DeviceInfo from "react-native-device-info";
import { Platform } from "react-native";
import Share from 'react-native-share';
import { MainStackNavigatorRef } from '../ref/main-stack-navigator-ref';
import { Dispatch, ThunkDispatch, UnknownAction } from '@reduxjs/toolkit';
import { userData } from '../local-storage/user-data/user-data';
import { resetAuthSlice, setSession } from '../redux/slices/auth-slice';
import { Colors } from "../constants";
import { StatusColorsMapping } from "./type";
import notifee, { AndroidBigPictureStyle, AndroidBigTextStyle, AndroidImportance, AndroidStyle } from "@notifee/react-native";


const helpers = {
  checkPlatform: (android: undefined | unknown, ios: undefined | unknown) => {
    return Platform.OS === 'android' ? android : ios;
  },
  getProfileCompletionPercentage: (isProfileComplete: boolean, isInsuranceComplete: boolean, isTimeSlotComplete: boolean) => {
    let count = 0;
    if (isProfileComplete) count++;
    if (isInsuranceComplete) count++;
    if (isTimeSlotComplete) count++;
    return `${Math.round((count / 3) * 100)}%`;
  },
  isEmptyObject: (obj: any) => {
    return Object.keys(obj)?.length === 0;
  },
  isEmpty: (value: string) => {
    return value === '';
  },
  isValidEmail: (value: string) => {
    const regex = new RegExp(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/);
    return regex.test(value);
  },
  isValidPhone: (value: string) => {
    const regex = new RegExp(/^[0-9]{10}$/);
    return regex.test(value);
  },
  isValidEmailRegex: (value: string) => {
    const regex = new RegExp(
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    );
    return regex.test(value);
  },


  shareAppPress: async (referalCode: number) => {
    try {
      const shareOptions = {
        //refreal code in this
        message: `Hey, I am using Gaminggle App. Download the app and use my referral code: ${referalCode} to get a bonus.`,
        url: "https://urlgeni.us/shareapp",
      };
      await Share.open(shareOptions);
    } catch (error: any) {

      console.log("shareAppPress in hlpers", error);
    }
  },

  clearReduxState: async (dispatch: ThunkDispatch<any, undefined, UnknownAction> & Dispatch<UnknownAction>) => {
    dispatch(resetAuthSlice());
    dispatch(setSession('Guest'));
    await userData.clearAsyncItem('token');
    await userData.clearAsyncItem("refreshToken");
  },

  isTablet: DeviceInfo.getDeviceType() === 'Tablet',
  isIos: Platform.OS === "ios",

  screens: ['AuthStack', 'Verify', 'Onboard', 'HomeStack', 'DrawerStack'],

  setTranslucent: (routeName: string) => {
    if (helpers.screens.includes(routeName)) {
      return true;
    }
    return false;
  },


  // This is used to display the notification  when app is in background or closed state or open
  onDisplayNotification: async (remoteMessage: any) => {
    const notificationConfig: any = {
      title: Platform.OS === 'ios' ? helpers.removeTags(remoteMessage?.data?.title) : remoteMessage.data.title,
      body: Platform.OS === 'ios' ? helpers.removeTags(remoteMessage?.data?.body) : remoteMessage.data.body,
      data: { ...remoteMessage?.data },
      android: {
        channelId: 'Channel-ID',
        color: Colors.primaryColor,
        pressAction: {
          id: 'default',
          launchActivity: 'default',
        },
        largeIcon: 'ic_launcher',
        smallIcon: 'ic_stat_hp',
        importance: AndroidImportance.HIGH,
        sound: 'default',
      },
      apns: { payload: { aps: { contentAvailable: true } } },
      ios: {
        channelId: 'Channel-ID',
        color: Colors.primaryColor,
        pressAction: {
          id: 'default',
          launchActivity: 'default',
        },
        circularLargeIcon: true,
        largeIcon: 'ic_launcher',
        smallIcon: 'ic_stat_hp',
        sound: 'default',
      },
    };
    // Determine the style based on the presence of image and body
    if (remoteMessage.data.image) {
      notificationConfig.android!.style = {
        type: AndroidStyle.BIGPICTURE,
        picture: remoteMessage.data.image,
      } as AndroidBigPictureStyle;
    } else if (remoteMessage.data.body) {
      notificationConfig.android!.style = {
        type: AndroidStyle.BIGTEXT,
        text: remoteMessage.data.body,
      } as AndroidBigTextStyle;
    }
    // Specify attachments for iOS
    if (remoteMessage.data.image) {
      notificationConfig.ios!.attachments = [{ url: remoteMessage.data.image, thumbnailHidden: false }];
    }
    await notifee.displayNotification(notificationConfig);
  },

  navigateThroughFCM: (name?: string | any, params?: object | undefined | any) => {
    MainStackNavigatorRef.current?.navigate(name, params);
  },

  removeTags: (str: string) => {
    if (str === null || str === "") return "";
    else str = str.toString();
    return str.replace(/(<([^>]+)>|\n)/gi, " ").trim();
  },


  statusColors: {
    Pending: {
      textColor: Colors.pendingColor,
      backColor: Colors.pendingbg
    },
    Booked: {
      textColor: Colors.pendingColor,
      backColor: Colors.pendingbg
    },
    Cancelled: {
      textColor: Colors.cancelColor,
      backColor: Colors.cancelbg
    },
    Completed: {
      textColor: Colors.completedlColor,
      backColor: Colors.completedlbg
    },
    Rescheduled: {
      textColor: Colors.reschedulColor,
      backColor: Colors.reschedulbg
    }
  } as StatusColorsMapping,
};

export { helpers };
