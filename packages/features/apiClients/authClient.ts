import axios from 'axios';

//TODO FIX
const apiClient = axios.create({
  baseURL: 'http://10.0.2.2:5135/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: '*/*',
  },
});

apiClient.interceptors.request.use(
  function (config) {
    console.log('config;', JSON.stringify(config));
    // Do something before the request is sent
    return config;
  },

  function (error) {
    console.log('request error;', JSON.stringify(error));
    // Do something with request error
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  function (response) {
    // Any status code that lies within the range of 2xx will trigger this function
    // Do something with response data
    console.log('response;', JSON.stringify(response));
    return response;
  },

  function (error) {
    // Any status code that falls outside the range of 2xx will trigger this function
    // Do something with response error
    console.log('response error;', JSON.stringify(error));
    return Promise.reject(error);
  },
);

export default apiClient;
