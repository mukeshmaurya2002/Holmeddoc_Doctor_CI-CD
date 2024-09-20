// import messaging from '@react-native-firebase/messaging';
import { Linking, PermissionsAndroid, Platform } from 'react-native';
import { userData } from "../local-storage/user-data/user-data";
import { store } from '../redux/store';

const dispatch = store.dispatch;

// export async function requestUserPermission() {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     await getFCMToken();
//   } else {
//     if (Platform.OS === 'android') {
//       if (Platform.Version >= 33) {
//         const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS, {
//           title: 'Gaminggle App',
//           message: 'Gaminggle App wants to send you notifications',
//           buttonNeutral: 'Ask Me Later',
//           buttonNegative: 'Cancel',
//           buttonPositive: 'OK',
//         });

//         if (granted === PermissionsAndroid.RESULTS.GRANTED || messaging.AuthorizationStatus.PROVISIONAL) {
//           await getFCMToken();
//         } else {
//         }
//       }
//     }
//   }


// }
// const getFCMToken = async () => {
//   try {
//     await messaging().registerDeviceForRemoteMessages();
//     const token = await messaging().getToken();
//     if (token) {
//       const formdata = { fcmToken: token }
//       await userData.storeInLocalData('fcmToken', token);
//       console.log('FCM Token::::::::', token);
//       return token;
//     }
//   } catch (error) {
//     console.log('getFCMToken error', error);
//   }
// }
// This are the suffix used to navigate specific screen name
// export const linking: any = {
//   prefixes: ['gaminggle-app://'],
//   config: {
//     initialRouteName: "Login",
//     screens: {
//       Login: "Login",
//       Verify: 'Verify',
//       Notification: 'Notification',
//       Wallet: 'Wallet',
//       DrawerNav: {
//         screens: {
//           BottomNav: {
//             screens: {
//               Home: 'Home',
//               MyContest: 'MyContest',
//               Profile: 'Profile',
//               Promo: 'Promo'
//             }
//           },
//         },
//       },
//       ProfileStack: {
//         screens: {
//           VerifyDetails: 'VerifyDetails',
//           BankCard: 'BankCard',
//           VerifyPan: 'VerifyPan',
//           VerifyAdhar: 'VerifyAdhar',
//           VerifyEmail: 'VerifyEmail',
//           ReferEarn: 'ReferEarn',
//           RunSpin: 'RunSpin',
//           WhatIsSpin: 'WhatIsSpin',
//           EditProfile: 'EditProfile',
//           HowToPlay: 'HowToPlay',
//           ProfileWallet: 'ProfileWallet',
//           GradeDetails: 'GradeDetails',
//           Settings: 'Settings',
//           PlayMore: 'PlayMore',
//           ContestHistory: 'ContestHistory',
//         },
//       },
//     },
//   },
// };

// type ScreenNameType = keyof typeof navigation_screenNames;

// const navigation_screenNames = {
//   Login: 'Login',
//   Verify: 'Verify',
//   DrawerNav: 'DrawerNav',
//   Notification: 'Notification',
//   BottomNav: 'BottomNav',
//   MyContest: 'MyContest',
//   Wallet: 'Wallet',
//   Promo: 'Promo',
//   Profile: 'Profile',
//   ReferEarn: 'ReferEarn',
// } as const;

// export const DeepLinkNavigation = (screenName: ScreenNameType) => {
//   if (navigation_screenNames[screenName]) {
//     return Linking.openURL(`gaminggle-app://${screenName}`);
//   } else {
//     return null;
//   }
// };
