import { setAccessToken, setRefreshToken } from '../../features/ApiClient';
import { Action } from '../actions/auth';
import COMMON_CONSTANTS from '../../constants/CommonConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  email: COMMON_CONSTANTS.DEFAULT,
  accessToken: COMMON_CONSTANTS.DEFAULT,
  refreshToken: COMMON_CONSTANTS.DEFAULT,
  role: COMMON_CONSTANTS.DEFAULT,
  authenticated: false,
};

export const useSession = (state = initialState, action: Action) => {
  switch (action.type) {
    case COMMON_CONSTANTS.REDUX_TYPES.LOGIN_USER:
      setAccessToken(action.payload.accessToken);
      setRefreshToken(action.payload.refreshToken);

      AsyncStorage.setItem(
        'user',
        JSON.stringify({
          email: action.payload.email,
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
          role: action.payload.role,
        }),
      );

      return {
        ...state,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        role: action.payload.role,
        authenticated: true,
      };

    case COMMON_CONSTANTS.REDUX_TYPES.SET_TOKENS:
      setAccessToken(action.payload.accessToken);
      setRefreshToken(action.payload.refreshToken);
      AsyncStorage.setItem(
        'user',
        JSON.stringify({
          accessToken: action.payload.accessToken,
          refreshToken: action.payload.refreshToken,
          role: action.payload.role || state.role,
        }),
      );
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        role: action.payload.role || state.role,
        authenticated: true,
      };

    case COMMON_CONSTANTS.REDUX_TYPES.LOGOUT:
      setAccessToken(COMMON_CONSTANTS.DEFAULT);
      setRefreshToken(COMMON_CONSTANTS.DEFAULT);
      AsyncStorage.removeItem('user');
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
