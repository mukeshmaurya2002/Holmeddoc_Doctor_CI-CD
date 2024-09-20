import { createAsyncThunk } from "@reduxjs/toolkit";
import networkRequest from "../../services/network-request";
import { endpoints } from "../../services/endpoints";
// import crashlytics from '@react-native-firebase/crashlytics';
import { MyThunkAPITypes } from "../hook";
/*
This thunck is used to get the all the startup related data
*/
const fetchStartup = createAsyncThunk(
    'Startup/fetchStartup',
    async (fetchdata: { acceptLanguage: string, formdata?: {} }, thunkAPI: MyThunkAPITypes) => {
        try {
            // crashlytics().log('inside fetchStartUp thunk ')
            const token = thunkAPI.getState().auth?.token;
            const response = await networkRequest({ token, acceptLanguage: fetchdata.acceptLanguage }).post('');
            // console.log("response in fetchStartup", JSON.stringify(response.data, undefined, 4))
            return response.data;
        } catch (err: any) {
            // crashlytics().recordError(err, 'inside fetchStartup Thunk')
        }
    }
)

export { fetchStartup }