import { setAccessToken, setRefreshToken } from '../../authClient';
import { Action } from '../actions/auth';

const initialState = {
  email: '',
  accessToken: '',
  refreshToken: '',
  role: '',
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
