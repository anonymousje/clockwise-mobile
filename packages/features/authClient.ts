import axios from 'axios';

let accessToken: string | null = null;

export const setAccessToken = (token: string) => {
  accessToken = token;
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

  function (error) {
    console.log('response error;', JSON.stringify(error));
    return Promise.reject(error);
  },
);

export default apiClient;
