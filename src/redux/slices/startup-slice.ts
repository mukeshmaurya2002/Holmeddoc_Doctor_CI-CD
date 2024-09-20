import { createSlice } from "@reduxjs/toolkit"
import { fetchStartup } from "../actions/startup-action"

/*
This slice is used to store the all the startup related data
*/

interface initialStateProps {
    startUpKeys: {};
    bottom_nav: {
        home: boolean,
        myContest: boolean,
        promo: boolean,
        profile: boolean
    },
    menu: {
        profile: boolean,
        balance: boolean,
        redeemCoupons: boolean,
        policies: boolean,
        faq: boolean,
        rules: boolean,
        contactUs: boolean,
        aboutUs: boolean,
        deleteAccount: boolean,
        logout: boolean,
        login: boolean
    },
    home: {
        carousel: boolean,
        feed: boolean,
        fantasy: boolean,
        gaming: boolean
    },
    fantasy: {
        sports: boolean,
        matches: boolean
    },
    gaming: {
        games: boolean
    },
    myContest: {
        fantasy: boolean,
        gaming: boolean
    },
    promo: {
        all: boolean,
        firstDeposit: boolean,
        depositRange: boolean,
        deposit: boolean,
        contestJoin: boolean
    },
    profile: {
        myProfile: boolean,
        contestWon: boolean,
        totalContest: boolean,
        totalMatches: boolean,
        series: boolean,
        verifyDetails: boolean,
        gradeLevels: boolean,
        personal: boolean,
        other: {
            inviteFriends: boolean,
            settings: boolean,
            howToPlay: boolean
        }
    },
    myProfile: {
        updateImage: boolean,
        name: boolean,
        mobileNumber: boolean,
        email: boolean,
        dob: boolean,
        gender: boolean,
        address: boolean,
        pincode: boolean,
        country: boolean,
        state: boolean,
        city: boolean
    },
    verifyAadhar: {
        mobileNumber: boolean,
        email: boolean,
        pan: boolean,
        aadhar: boolean,
        bankDetails: boolean
    },
    personal: {
        walletBalance: boolean,
        runs: boolean,
        contestHistory: boolean,
        bonus: boolean
    },
    loginWith: {
        skipLoginAndroid: boolean,
        skipLoginIos: boolean,
        password: boolean,
        fb: boolean,
        google: boolean,
        apple: boolean
    },
    paymentMode: {
        online: boolean
    },
    wallet: boolean,
    notification: boolean,
    isNotificationEnabled: boolean,
    mandatoryUpdate: boolean,
    redirectionUrl: string,
    userImage: string;
    supportEmail: string;
    guestMSalt: string;
    guestMkey: string;
    supportContact: string;
    androidVersion: string[],
    iosVersion: string[],
    supportAddress: string,
    youtubeLink: string,
    twitterLink: string,
    fbLink: string,
    shareRefrralMessage: string,
    zeroSpinRunsMessage: string,
    manualAadharMessage: string,
    manualPanMessage: string,
    manualBankMessage: string
}

const initialState: initialStateProps = {
    startUpKeys: {},
    bottom_nav: {
        home: true,
        myContest: true,
        promo: true,
        profile: true
    },
    menu: {
        profile: false,
        balance: false,
        redeemCoupons: false,
        policies: true,
        faq: true,
        rules: true,
        contactUs: true,
        aboutUs: true,
        deleteAccount: false,
        logout: false,
        login: true
    },
    home: {
        carousel: true,
        feed: true,
        fantasy: true,
        gaming: true
    },
    fantasy: {
        sports: true,
        matches: true
    },
    gaming: {
        games: true
    },
    myContest: {
        fantasy: true,
        gaming: true
    },
    promo: {
        all: true,
        firstDeposit: true,
        depositRange: true,
        deposit: true,
        contestJoin: true
    },
    profile: {
        myProfile: false,
        contestWon: false,
        totalContest: false,
        totalMatches: false,
        series: false,
        verifyDetails: false,
        gradeLevels: false,
        personal: false,
        other: {
            inviteFriends: false,
            settings: true,
            howToPlay: true
        }
    },
    myProfile: {
        updateImage: true,
        name: true,
        mobileNumber: true,
        email: true,
        dob: true,
        gender: true,
        address: true,
        pincode: true,
        country: true,
        state: true,
        city: true
    },
    verifyAadhar: {
        mobileNumber: true,
        email: true,
        pan: true,
        aadhar: true,
        bankDetails: true
    },
    personal: {
        walletBalance: true,
        runs: true,
        contestHistory: true,
        bonus: true
    },
    loginWith: {
        skipLoginAndroid: true,
        skipLoginIos: true,
        password: true,
        fb: false,
        google: false,
        apple: false
    },
    paymentMode: {
        online: false
    },
    wallet: false,
    notification: false,
    isNotificationEnabled: false,
    mandatoryUpdate: false,
    guestMSalt: '',
    guestMkey: '',
    redirectionUrl: "https://www.flipkart.com/vendor",
    userImage: "http://skyonliners.com/demo/fitness-studio/backend/default_image/profile.png",
    supportEmail: '',
    supportContact: '',
    androidVersion: [],
    iosVersion: [],
    supportAddress: '',
    youtubeLink: '',
    twitterLink: '',
    fbLink: '',
    shareRefrralMessage: '',
    zeroSpinRunsMessage: '',
    manualAadharMessage: '',
    manualPanMessage: '',
    manualBankMessage: ''
}




const startUpSlice = createSlice({
    name: 'Startup',
    initialState,
    reducers: {
        setIsNotificationEnabled: (state, action) => {
            state.isNotificationEnabled = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchStartup.fulfilled, (state, action) => {
            // simple but conjucted solution
            state.startUpKeys = action.payload.data;
            // guset mkey and msalt for guest login hashkey h9dling

            state.guestMSalt = action.payload.data?.guestMSalt;
            state.guestMkey = action.payload.data?.guestMkey;
            //home screen
            state.home.carousel = action.payload.data?.screens?.home.carousel;
            state.home.feed = action.payload.data?.screens?.home.feed;
            state.home.fantasy = action.payload.data?.screens?.home.fantasy;
            state.home.gaming = action.payload.data?.screens?.home.gaming;
            // bottom_nav
            state.bottom_nav.home = action.payload.data?.screens?.bottom_nav.home;
            state.bottom_nav.myContest = action.payload.data?.screens?.bottom_nav.myContest;
            state.bottom_nav.profile = action.payload.data?.screens?.bottom_nav.profile;
            state.bottom_nav.promo = action.payload.data?.screens?.bottom_nav.promo;
            // menu
            state.menu.profile = action.payload.data?.screens?.menu.profile;
            state.menu.aboutUs = action.payload.data?.screens?.menu.aboutUs;
            state.menu.balance = action.payload.data?.screens?.menu.balance;
            state.menu.contactUs = action.payload.data?.screens?.menu.contactUs;
            state.menu.deleteAccount = action.payload.data?.screens?.menu.deleteAccount;
            state.menu.faq = action.payload.data?.screens?.menu.faq;
            state.menu.login = action.payload.data?.screens?.menu.login;
            state.menu.logout = action.payload.data?.screens?.menu.logout;
            state.menu.policies = action.payload.data?.screens?.menu.policies;
            state.menu.redeemCoupons = action.payload.data?.screens?.menu.redeemCoupons;
            state.menu.rules = action.payload.data?.screens?.menu.rules;
            // profile
            state.profile.contestWon = action.payload.data?.screens?.profile.contestWon;
            state.profile.gradeLevels = action.payload.data?.screens?.profile.gradeLevels;
            state.profile.myProfile = action.payload.data?.screens?.profile.myProfile;
            state.profile.other = action.payload.data?.screens?.profile.other;
            state.profile.personal = action.payload.data?.screens?.profile.personal;
            state.profile.series = action.payload.data?.screens?.profile.series;
            state.profile.totalContest = action.payload.data?.screens?.profile.totalContest;
            state.profile.totalMatches = action.payload.data?.screens?.profile.totalMatches;
            state.profile.verifyDetails = action.payload.data?.screens?.profile.verifyDetails;
            state.profile.other.howToPlay = action.payload.data?.screens?.profile.other.howToPlay;
            state.profile.other.inviteFriends = action.payload.data?.screens?.profile.other.inviteFriends;
            state.profile.other.settings = action.payload.data?.screens?.profile.other.settings;
            // myProfile
            state.myProfile.updateImage = action.payload.data?.screens?.myProfile.updateImage;
            state.myProfile.name = action.payload.data?.screens?.myProfile.name;
            state.myProfile.mobileNumber = action.payload.data?.screens?.myProfile.mobileNumber;
            state.myProfile.email = action.payload.data?.screens?.myProfile.email;
            state.myProfile.dob = action.payload.data?.screens?.myProfile.dob;
            state.myProfile.gender = action.payload.data?.screens?.myProfile.gender;
            state.myProfile.address = action.payload.data?.screens?.myProfile.address;
            state.myProfile.pincode = action.payload.data?.screens?.myProfile.pincode;
            state.myProfile.country = action.payload.data?.screens?.myProfile.country;
            state.myProfile.state = action.payload.data?.screens?.myProfile.state;
            state.myProfile.city = action.payload.data?.screens?.myProfile.city;
            //verifyAadhar
            state.verifyAadhar.aadhar = action.payload.data?.screens?.verifyAadhar.aadhar;
            state.verifyAadhar.bankDetails = action.payload.data?.screens?.verifyAadhar.bankDetails;
            state.verifyAadhar.email = action.payload.data?.screens?.verifyAadhar.email;
            state.verifyAadhar.mobileNumber = action.payload.data?.screens?.verifyAadhar.mobileNumber;
            state.verifyAadhar.pan = action.payload.data?.screens?.verifyAadhar.pan;
            // personal
            state.personal.bonus = action.payload.data?.screens?.personal.bonus;
            state.personal.contestHistory = action.payload.data?.screens?.personal.contestHistory;
            state.personal.runs = action.payload.data?.screens?.personal.runs;
            state.personal.walletBalance = action.payload.data?.screens?.personal.walletBalance;
            // promo
            state.promo.all = action.payload.data?.screens?.promo.all;
            state.promo.contestJoin = action.payload.data?.screens?.promo.contestJoin;
            state.promo.deposit = action.payload.data?.screens?.promo.deposit;
            state.promo.depositRange = action.payload.data?.screens?.promo.depositRange;
            // state.promo.completed = action.payload.data?.screens?.promo.completed;
            // state.promo.firstDeposit = action.payload.data?.screens?.promo.firstDeposit;
            // state.promo.levelUpBenefit = action.payload.data?.screens?.promo.levelUpBenefit;
            // state.promo.live = action.payload.data?.screens?.promo.live;
            // myContest
            state.myContest.fantasy = action.payload.data?.screens?.myContest.fantasy;
            state.myContest.gaming = action.payload.data?.screens?.myContest.gaming;
            // fantasy
            state.fantasy.matches = action.payload.data?.screens?.fantasy.matches;
            state.fantasy.sports = action.payload.data?.screens?.fantasy.sports;
            // gaming
            state.gaming.games = action.payload.data?.screens?.gaming.games;
            // loginWith
            state.loginWith.apple = action.payload.data?.loginWith.apple;
            state.loginWith.fb = action.payload.data?.loginWith.fb;
            state.loginWith.google = action.payload.data?.loginWith.google;
            state.loginWith.password = action.payload.data?.loginWith.password;
            state.loginWith.skipLoginAndroid = action.payload.data?.loginWith.skipLoginAndroid;
            state.loginWith.skipLoginIos = action.payload.data?.loginWith.skipLoginIos;
            // paymentMode
            state.paymentMode.online = action.payload.data?.paymentMode.online;
            // other
            state.mandatoryUpdate = action.payload.data?.mandatoryUpdate;
            state.redirectionUrl = action.payload.data?.redirectionUrl;
            state.userImage = action.payload.data?.userImage;
            // version
            state.androidVersion = action.payload.data?.androidVersion;
            state.iosVersion = action.payload.data?.iosVersion;
            // wallet
            state.wallet = action.payload.data?.wallet;
            // notification
            state.notification = action.payload.data?.notification;
            state.isNotificationEnabled = action.payload.data?.isNotificationEnabled;
            state.supportEmail = action.payload.data?.supportEmail;
            state.supportContact = action.payload.data?.supportContact;

            state.supportAddress = action.payload.data?.supportAddress;
            state.youtubeLink = action.payload.data?.youtubeLink;
            state.twitterLink = action.payload.data?.twitterLink;
            state.fbLink = action.payload.data?.fbLink;

            state.shareRefrralMessage = action.payload.data?.shareRefrralMessage;
            state.zeroSpinRunsMessage = action.payload.data?.zeroSpinRunsMessage;

            //manual message 
            state.manualAadharMessage = action.payload.data?.manualAadharMessage;
            state.manualPanMessage = action.payload.data?.manualPanMessage;
            state.manualBankMessage = action.payload.data?.manualBankMessage;
        })
    }
})

export const { setIsNotificationEnabled } = startUpSlice.actions;
export default startUpSlice.reducer;
