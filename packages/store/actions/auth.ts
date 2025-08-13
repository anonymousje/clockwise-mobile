import { User } from '../../features/types';
import apiClient from '../../features/ApiClient';
import COMMON_CONSTANTS from '../../constants/CommonConstants';
import ApiRoutes from '../../constants/ApiRoutes';

export const setUser = (userData: User) => {
  return {
    type: COMMON_CONSTANTS.REDUX_TYPES.SET_USER,
    payload: userData,
  };
};

export const setTokens = (accessToken: string, role?: string) => {
  return {
    type: COMMON_CONSTANTS.REDUX_TYPES.SET_TOKENS,
    payload: { accessToken, role },
  };
};

export const logInUser = async (email: string, password: string) => {
  try {
    const response = await apiClient.post(ApiRoutes.login, {
      email,
      password,
    });
    const {
      user_id,
      name,
      email: userEmail,
      role,
      token,
      status,
    } = response.data;

    return {
      type: COMMON_CONSTANTS.REDUX_TYPES.LOGIN_USER,
      payload: {
        userId: user_id,
        name,
        email: userEmail,
        role,
        accessToken: token,
        status,
      },
    };
  } catch (error: any) {
    return {
      type: COMMON_CONSTANTS.REDUX_TYPES.LOGIN_FAIL,
      payload: COMMON_CONSTANTS.DEFAULT,
    };
  }
};

export const logOutUser = () => {
  return {
    type: COMMON_CONSTANTS.REDUX_TYPES.LOGOUT,
    payload: COMMON_CONSTANTS.DEFAULT,
  };
};

export type Action = ReturnType<typeof setUser>;
