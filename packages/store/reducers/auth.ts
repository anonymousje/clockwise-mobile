import { setAccessToken, setRefreshToken } from '../../features/ApiClient';
import { Action } from '../actions/auth';
import COMMON_CONSTANTS from '../../constants/CommonConstants';

const initialState = {
  email: COMMON_CONSTANTS.DEFAULT,
  accessToken: COMMON_CONSTANTS.DEFAULT,
  refreshToken: COMMON_CONSTANTS.DEFAULT,
  role: COMMON_CONSTANTS.DEFAULT,
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

    case 'LOGOUT':
      setAccessToken(COMMON_CONSTANTS.DEFAULT);
      setRefreshToken(COMMON_CONSTANTS.DEFAULT);
      return {
        ...state,
        email: COMMON_CONSTANTS.DEFAULT,
        accessToken: COMMON_CONSTANTS.DEFAULT,
        refreshToken: COMMON_CONSTANTS.DEFAULT,
        role: COMMON_CONSTANTS.DEFAULT,
        authenticated: false,
      };

    default:
      return state;
  }
};
