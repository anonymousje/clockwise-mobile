import { Action } from '../actions/fetchUsers';

const initialState = {
  flag: false,
};

export const useFetch = (state = initialState, action: Action) => {
  switch (action.type) {
    case 'SET_UPDATED':
      return {
        ...state,
        flag: action.payload,
      };
    default:
      return state;
  }
};
