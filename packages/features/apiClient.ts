import axios from 'axios';
import store from '../store';
import { setTokens } from '../store/actions/auth';
import { logoutCore } from '../features/container/useContainer';

let accessToken = '';
let refreshToken = '';

export function setAccessToken(token: string) {
  accessToken = token;
}

export function setRefreshToken(token: string) {
  refreshToken = token;
}

const apiClient = axios.create({
  baseURL: 'http://10.0.2.2:5135/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

apiClient.interceptors.request.use(
  function (config) {
    console.log(accessToken, refreshToken);
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
    //const accessToken = store.getState().user.accessToken;
    //const refreshToken = store.getState().user.refreshToken;

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

        console.log('Refresh token response:', response.data);

        accessToken = response.data.data.accessToken;
        refreshToken = response.data.data.refreshToken;

        store.dispatch(
          setTokens(
            response.data.data.accessToken,
            response.data.data.refreshToken,
          ),
        );

        originalRequest.headers.Authorization = `Bearer ${response.data.data.accessToken}`;

        console.log(
          'Retrying original request with new token:',
          originalRequest,
        );

        return await axios(originalRequest);
      } catch (refreshError) {
        store.dispatch(setTokens('', ''));
        console.error('Refresh token failed:', refreshError);
        logoutCore(store);

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
