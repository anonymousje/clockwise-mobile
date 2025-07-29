import { User } from '../../features/types';
import apiClient from '../../features/apiClient';
import COMMON_CONSTANTS from '../../constants/CommonConstants';

export const setUser = (userData: User) => {
  return {
    type: COMMON_CONSTANTS.REDUX_TYPES.SET_USER,
    payload: userData,
  };
};

export const setTokens = (accessToken: string, refreshToken: string) => {
  return {
    type: COMMON_CONSTANTS.REDUX_TYPES.SET_TOKEN,
    payload: { accessToken, refreshToken },
  };
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/Auth/login', {
      email,
      password,
    });

    const { accessToken, refreshToken, role } = response.data.data;

    return {
      type: COMMON_CONSTANTS.REDUX_TYPES.LOGIN_USER,
      payload: {
        email,
        accessToken,
        refreshToken,
        role,
      },
    };
  } catch (error) {
    return {
      type: COMMON_CONSTANTS.REDUX_TYPES.LOGIN_FAIL,
      payload: COMMON_CONSTANTS.DEFAULT,
    };
  }
};

export type Action = ReturnType<typeof setUser>;
