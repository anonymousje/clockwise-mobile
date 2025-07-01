import { setAccessToken } from '../../authClient';
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
      return {
        ...state,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        role: action.payload.role,
        authenticated: true,
      };

    default:
      return state;
  }
};
