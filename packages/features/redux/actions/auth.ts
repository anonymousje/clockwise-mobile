import { User } from '../../types';
import apiClient from '../../authClient';

export const setUser = (userData: User) => {
  return {
    type: 'SET_USER',
    payload: userData,
  };
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await apiClient.post('/Auth/login', {
      email,
      password,
    });

    const { accessToken, refreshToken } = response.data;

    return {
      type: 'LOGIN_USER',
      payload: {
        email: 'admin@example.com',
        password,
        accessToken,
        refreshToken,
      },
    };
  } catch (error) {
    return { type: 'LOGIN_FAIL', payload: '' };
  }
};

export type Action = ReturnType<typeof setUser>;
