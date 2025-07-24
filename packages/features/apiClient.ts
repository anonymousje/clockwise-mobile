import axios from 'axios';
import store from '../store';
import { setTokens } from '../store/actions/auth';
import { SCREENS } from '../constants/screens';
import { NavigationProp } from '../features/types';
import { useNavigation } from '@react-navigation/native';

let accessToken: string | null = null;
let refreshToken: string | null = null;

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export const setRefreshToken = (token: string) => {
  refreshToken = token;
};

const apiClient = axios.create({
  baseURL: 'http://10.0.2.2:5135/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

apiClient.interceptors.request.use(
  function (config) {
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    console.log('config;', JSON.stringify(config));
    return config;
  },
  function (error) {
    console.log('request error;', JSON.stringify(error));
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  function (response) {
    console.log('response;', JSON.stringify(response));
    return response;
  },

  async function (error) {
    console.log('response error;', JSON.stringify(error));
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const response = await axios.post(
          'http://10.0.2.2:5135/api/auth/refresh-token',
          {
            accessToken: accessToken,
            refreshToken: refreshToken,
          },
        );

        store.dispatch(
          setTokens(
            response.data.data.accessToken,
            response.data.data.refreshToken,
          ),
        );

        return await apiClient(originalRequest);
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    } else {
      store.dispatch(setTokens('', ''));

      const navigation = useNavigation<NavigationProp>();

      navigation.replace(SCREENS.Login);
    }

    return Promise.reject(error);
  },
);

export default apiClient;
