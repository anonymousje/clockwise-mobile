import VALUES from '../../constants/values';
import { setAccessToken, setRefreshToken } from '../../features/apiClient';
import { Action } from '../actions/auth';

const initialState = {
  email: VALUES.DEFAULT,
  accessToken: VALUES.DEFAULT,
  refreshToken: VALUES.DEFAULT,
  role: VALUES.DEFAULT,
  authenticated: false,
};

export const useSession = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      setAccessToken(action.payload.accessToken);
      setRefreshToken(action.payload.refreshToken);
      return {
        ...state,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        role: action.payload.role,
        authenticated: true,
      };
    case 'SET_TOKENS':
      setAccessToken(action.payload.accessToken);
      setRefreshToken(action.payload.refreshToken);
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };

    default:
      return state;
  }
};
