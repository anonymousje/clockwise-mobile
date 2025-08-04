import COMMON_CONSTANTS from '../../constants/CommonConstants';
import { Action } from '../actions/flags';

const initialState = {
  staffListUpdateFlag: false,
  whoIsOnListUpdateFlag: false,
};

export const useFetch = (state = initialState, action: Action) => {
  switch (action.type) {
    case COMMON_CONSTANTS.REDUX_TYPES.SET_UPDATED_STAFF_LIST:
      return {
        ...state,
        staffListUpdateFlag: action.payload,
      };
    case COMMON_CONSTANTS.REDUX_TYPES.SET_UPDATED_WHO_IS_ON_LIST:
      return {
        ...state,
        whoIsOnListUpdateFlag: action.payload,
      };
    default:
      return state;
  }
};
