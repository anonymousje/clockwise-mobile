import axios from 'axios';
import store from '../store';
import { setTokens } from '../store/actions/auth';
import COMMON_CONSTANTS from '../constants/CommonConstants';
import ApiRoutes from '../constants/ApiRoutes';

console.log('ApiClient module loaded');

let accessToken = COMMON_CONSTANTS.DEFAULT;

export const setAccessToken = (token: string) => {
  accessToken = token;
};

const apiClient = axios.create({
  baseURL: ApiRoutes.BaseURL,
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
    if (error.response && error.response.status === 401) {
      store.dispatch(setTokens(COMMON_CONSTANTS.DEFAULT));

      return Promise.reject(error);
    }

    return Promise.reject(error);
  },
);

export default apiClient;
