import { Action } from '../actions/flags';

const initialState = {
  staffListUpdateFlag: false,
  whoIsOnListUpdateFlag: false,
};

export const useFetch = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_UPDATED':
      return {
        ...state,
        flag: action.payload,
      };
    case 'SET_UPDATED_WHO_IS_ON_LIST':
      return {
        ...state,
        whoIsOnListUpdateFlag: action.payload,
      };
    default:
      return state;
  }
};
