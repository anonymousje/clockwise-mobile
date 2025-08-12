import axios from 'axios';
import store from '../store';
import { setTokens } from '../store/actions/auth';
import COMMON_CONSTANTS from '../constants/CommonConstants';
import ApiRoutes from '../constants/ApiRoutes';

let accessToken = COMMON_CONSTANTS.DEFAULT;
let refreshToken = COMMON_CONSTANTS.DEFAULT;

export const setAccessToken = (token: string) => {
  accessToken = token;
};

export const setRefreshToken = (token: string) => {
  refreshToken = token;
};

const apiClient = axios.create({
  baseURL: ApiRoutes.BaseURL,
  headers: {
    [COMMON_CONSTANTS.API_HEADERS.CONTENT_TYPE]:
      COMMON_CONSTANTS.API_HEADERS.APPLICATION_JSON,
    Accept: COMMON_CONSTANTS.API_HEADERS.ACCEPT,
  },
});

apiClient.interceptors.request.use(
  function (config) {
    if (accessToken) {
      config.headers.Authorization = `${COMMON_CONSTANTS.API_HEADERS.BEARER} ${accessToken}`;
    }
    console.log('Request made with ', config);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  function (response) {
    console.log('Response received:', response);
    return response;
  },

  async function (error) {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401) {
      try {
        const response = await axios.post(ApiRoutes.refreshToken, {
          accessToken: accessToken,
          refreshToken: refreshToken,
        });

        accessToken = response.data.data.accessToken;
        refreshToken = response.data.data.refreshToken;

        store.dispatch(
          setTokens(
            response.data.data.accessToken,
            response.data.data.refreshToken,
          ),
        );

        originalRequest.headers.Authorization = `${COMMON_CONSTANTS.API_HEADERS.BEARER} ${response.data.data.accessToken}`;

        return await axios(originalRequest);
      } catch (refreshError) {
        store.dispatch(
          setTokens(COMMON_CONSTANTS.DEFAULT, COMMON_CONSTANTS.DEFAULT),
        );

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default apiClient;
