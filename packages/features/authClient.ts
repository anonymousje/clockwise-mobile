import axios from 'axios';
import useContainer from './container/useContainer';

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
        setAccessToken(response.data.data.accessToken);
        setRefreshToken(response.data.data.refreshToken);

        const { tokenSetter } = useContainer();

        tokenSetter(
          response.data.data.accessToken,
          response.data.data.refreshToken,
        );

        console.log('New access token:', accessToken);
        console.log('New refresh token:', refreshToken);

        console.log(
          'Retrying original request with new token:',
          originalRequest,
        );
        const response2 = await apiClient(originalRequest);
        console.log('Retried original request with new token:', response2);
        return response2;
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
        return Promise.reject(refreshError);
      }
    } else {
      console.error('API error:', error);
    }
    return Promise.reject(error);
  },
);

export default apiClient;
