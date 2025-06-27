import { Alert } from 'react-native';
import { Theme } from '../actions/theme';

const initialState = {
  mode: 'light',
};

export const themeReducer = (state = initialState, action: Theme) => {
  switch (action.type) {
    case 'THEME_CHANGE':
      return { ...state, mode: action.payload };

    default:
      return state;
  }
};
