import COMMON_CONSTANTS from '../../constants/CommonConstants';
import { Action } from '../actions/fetchUsers';

const initialState = {
  flag: false,
};

export const useFetch = (state = initialState, action: Action) => {
  switch (action.type) {
    case COMMON_CONSTANTS.REDUX_TYPES.SET_UPDATED:
      return {
        ...state,
        flag: action.payload,
      };
    default:
      return state;
  }
};
