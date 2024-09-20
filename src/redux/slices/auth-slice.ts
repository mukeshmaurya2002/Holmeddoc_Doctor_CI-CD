import { createSlice, PayloadAction } from "@reduxjs/toolkit";
//This slice used on storing token mkey msalt and user details once user verify otp

// Define the type for the payload of setUserData action
type UserDataPayload = {
    username: string,
    phone: string,
    image: string,
    mkey: null,
    msalt: null,
    _id: string,
    referralCode: string

}

export interface AuthState {
    token: string,
    refreshToken: string,
    session: "Guest" | "User",
    userDetails: UserDataPayload;
}

const initialState: AuthState = {
    token: "",
    refreshToken: '',
    session: "Guest",
    userDetails: {
        username: "",
        phone: "",
        image: "",
        mkey: null,
        msalt: null,
        _id: '',
        referralCode: ''
    },
}

const authSlice = createSlice({
    name: "Auth",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        setRefreshToken: (state, action: PayloadAction<string>) => {
            state.refreshToken = action.payload
        },
        setUserData: (state, action: PayloadAction<UserDataPayload>) => {
            // Here action.payload is of type UserDataPayload
            state.userDetails = { ...state.userDetails, ...action.payload };
        },
        setSession: (state, action: PayloadAction<"Guest" | "User">) => {
            state.session = action.payload
        },
        resetAuthSlice: (state) => {
            state.token = ""
            state.refreshToken = ""
            state.session = 'Guest',
                state.userDetails = {
                    username: "",
                    phone: "",
                    image: "",
                    mkey: null,
                    msalt: null,
                    _id: '',
                    referralCode: ''
                }
        }
    },
})

export const { setToken, setRefreshToken, resetAuthSlice, setSession, setUserData } = authSlice.actions;
export default authSlice.reducer;
