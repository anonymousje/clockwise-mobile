import { setAccessToken } from '../../features/ApiClient';
import { Action } from '../actions/auth';
import COMMON_CONSTANTS from '../../constants/CommonConstants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  userId: COMMON_CONSTANTS.DEFAULT,
  name: COMMON_CONSTANTS.DEFAULT,
  email: COMMON_CONSTANTS.DEFAULT,
  accessToken: COMMON_CONSTANTS.DEFAULT,
  role: COMMON_CONSTANTS.DEFAULT,
  status: COMMON_CONSTANTS.DEFAULT,
  authenticated: false,
};

export const useSession = (state = initialState, action: Action) => {
  switch (action.type) {
    case COMMON_CONSTANTS.REDUX_TYPES.SET_USER:
      return {
        ...state,
        userId: action.payload.userId || state.userId,
        name: action.payload.name || state.name,
        email: action.payload.email || state.email,
        role: action.payload.role || state.role,
        status: action.payload.status || state.status,
      };

    case COMMON_CONSTANTS.REDUX_TYPES.LOGIN_USER:
      setAccessToken(action.payload.accessToken);

      AsyncStorage.setItem(
        'user',
        JSON.stringify({
          userId: action.payload.userId,
          name: action.payload.name,
          email: action.payload.email,
          accessToken: action.payload.accessToken,
          role: action.payload.role,
          status: action.payload.status,
        }),
      );

      return {
        ...state,
        userId: action.payload.userId,
        name: action.payload.name,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
        role: action.payload.role,
        status: action.payload.status,
        authenticated: true,
      };

    case COMMON_CONSTANTS.REDUX_TYPES.SET_TOKENS:
      setAccessToken(action.payload.accessToken);
      AsyncStorage.setItem(
        'user',
        JSON.stringify({
          accessToken: action.payload.accessToken,
          role: action.payload.role || state.role,
        }),
      );
      return {
        ...state,
        accessToken: action.payload.accessToken,
        role: action.payload.role || state.role,
        authenticated: true,
      };

    case COMMON_CONSTANTS.REDUX_TYPES.LOGOUT:
      setAccessToken(COMMON_CONSTANTS.DEFAULT);
      AsyncStorage.removeItem('user');
      return {
        ...state,
        userId: COMMON_CONSTANTS.DEFAULT,
        name: COMMON_CONSTANTS.DEFAULT,
        email: COMMON_CONSTANTS.DEFAULT,
        accessToken: COMMON_CONSTANTS.DEFAULT,
        role: COMMON_CONSTANTS.DEFAULT,
        status: COMMON_CONSTANTS.DEFAULT,
        authenticated: false,
      };

    default:
      return state;
  }
};
