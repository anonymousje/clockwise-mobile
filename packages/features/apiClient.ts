import axios from 'axios';
import store from '../store';
import { setTokens } from '../store/actions/auth';
import VALUES from '../constants/values';

let accessToken = VALUES.DEFAULT;
let refreshToken = VALUES.DEFAULT;

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
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  function (response) {
    return response;
  },

  async function (error) {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401) {
      try {
        const response = await axios.post(
          'http://10.0.2.2:5135/api/auth/refresh-token',
          {
            accessToken: accessToken,
            refreshToken: refreshToken,
          },
        );

        accessToken = response.data.data.accessToken;
        refreshToken = response.data.data.refreshToken;

        store.dispatch(
          setTokens(
            response.data.data.accessToken,
            response.data.data.refreshToken,
          ),
        );

        originalRequest.headers.Authorization = `Bearer ${response.data.data.accessToken}`;

        return await axios(originalRequest);
      } catch (refreshError) {
        store.dispatch(setTokens(VALUES.DEFAULT, VALUES.DEFAULT));

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
