import { Action } from '../actions/auth';

const initialState = {
  email: '',
  accessToken: '',
  refreshToken: '',
  authenticated: false,
};

export const useSession = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        email: action.payload.email,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
        authenticated: true,
      };

    default:
      return state;
  }
};
