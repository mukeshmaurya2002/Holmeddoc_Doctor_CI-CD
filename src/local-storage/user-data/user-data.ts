import AsyncStorage from '@react-native-async-storage/async-storage';
import { userDataKeys } from './keys';

const userData = {

    storeInLocalData : async (key:keyof typeof userDataKeys,value:unknown) => {
        try {
            await AsyncStorage.setItem(userDataKeys[key],JSON.stringify(value))
        } catch (error) {
            console.log(error)
        }
    },
    retreiveInLocalData : async (key:keyof typeof userDataKeys,) => {
        try {
            const awaitedResult = await AsyncStorage.getItem(userDataKeys[key])
            return awaitedResult !== null ? JSON.parse(awaitedResult) : null 
        } catch (error) {
            console.log(error)
        }
    },
    
    
    clearAsyncItem : async (key:keyof typeof userDataKeys) => {
        try {
            await AsyncStorage.removeItem(userDataKeys[key])
        } catch (error) {
            console.log(error)
        }
    },
}




export {userData}