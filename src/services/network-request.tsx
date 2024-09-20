import axios, { AxiosRequestHeaders, GenericAbortSignal, InternalAxiosRequestConfig } from 'axios';
import { Keyboard, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { store } from '../redux/store';
import { userData } from '../local-storage/user-data/user-data';
import { setRefreshToken, setSession, setToken } from '../redux/slices/auth-slice';

interface NetworkConfig {
  signal?: GenericAbortSignal;
  token?: string;
  acceptLanguage?: string;
  uuid?: string;
  hashkey?: string;
  fcmToken?: string;
  content_type?: boolean;
}

const DEVICE_ID = DeviceInfo.getDeviceId();
const APP_VERSION = DeviceInfo.getVersion()

const networkRequest = (networkConfig?: NetworkConfig) => {
  const { acceptLanguage, fcmToken, hashkey, signal, token, uuid, content_type = false } = networkConfig!;

  const headers: Partial<AxiosRequestHeaders> = {
    'Content-Type': content_type ? 'multipart/form-data' : 'application/json',
    Authorization: `Basic ${process.env.AUTHORIZATION_KEY}`,
    version: APP_VERSION,
    platform: Platform.OS,
    deviceId: DEVICE_ID,
  };

  if (token) headers['appAccessToken'] = token;
  if (acceptLanguage) headers['language'] = acceptLanguage;
  if (uuid) headers['uuid'] = uuid;
  if (hashkey) headers['hashkey'] = hashkey;
  if (fcmToken) headers['fcmToken'] = fcmToken;

  const axiosInstance = axios.create({
    baseURL: `${process.env.AWS_HOST_URL}/`,
    timeout: 10000,
    headers,
    signal: signal,
  });

  axiosInstance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
    Keyboard.dismiss();
    //console.log("return request in Network-Request", JSON.stringify(request, null, 2))
    return request;
  });

  createAxiosResponseInterceptor();

  function createAxiosResponseInterceptor() {
    const interceptor = axiosInstance.interceptors.response.use(
      (response) => {
        // console.log("RETURN REPONSE IN NETWORK-REQUEST", JSON.stringify(response.status, null, 2));
        return response
      },
      async (error) => {
        // console.log("error.response.status inside network-request", error.response.status)
        if (!error.response || error.response.status !== 401) {
          return Promise.reject(error);
        }
        const refreshToken = await userData.retreiveInLocalData('refreshToken');
        if (error.response.status === 401 && refreshToken) {
          axiosInstance.interceptors.response.eject(interceptor);
          try {
            const url = `${process.env.AWS_HOST_URL}/refreshToken`;
            const headers = {
              'Content-Type': 'application/json',
              Authorization: `Basic ${process.env.AUTHORIZATION_KEY}`,
              platform: Platform.OS,
              refreshToken: refreshToken,
            };

            const response = await axios.post(url, {}, { headers });
            const { token, refreshToken: newRefreshToken } = response.data.data;

            /*Store the new token and refreshToken */
            await userData.storeInLocalData('token', token);
            await userData.storeInLocalData('refreshToken', newRefreshToken);
            store.dispatch(setToken(token));
            store.dispatch(setRefreshToken(newRefreshToken));
            store.dispatch(setSession('User'));

            /*Return the previous request which got statusCode 401 with new token and get the data*/
            error.response.config.headers['appAccessToken'] = token;
            return axios(error.response.config);
          } catch (err: any) {
            if (err.response && err.response.status === 400) {
              throw { response: { status: 401 } };
            }
            return Promise.reject(err);
          }
          finally {
            createAxiosResponseInterceptor();
          }
        }
        return Promise.reject(error);
      }
    );
  }

  return axiosInstance;
};

export default networkRequest;
