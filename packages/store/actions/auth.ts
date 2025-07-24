import { User } from '../../features/types';
import apiClient from '../../features/apiClient';

export const setUser = (userData: User) => {
  return {
    type: 'SET_USER',
    payload: userData,
  };
};

export const setTokens = (accessToken: string, refreshToken: string) => {
  return {
    type: 'SET_TOKEN',
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
      type: 'LOGIN_USER',
      payload: {
        email,
        accessToken,
        refreshToken,
        role,
      },
    };
  } catch (error) {
    return { type: 'LOGIN_FAIL', payload: '' };
  }
};

export type Action = ReturnType<typeof setUser>;
