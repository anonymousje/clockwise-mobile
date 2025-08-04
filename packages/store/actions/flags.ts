import COMMON_CONSTANTS from '../../constants/CommonConstants';

export const fetchUpdatedStaffList = (flag: boolean) => {
  return {
    type: COMMON_CONSTANTS.REDUX_TYPES.SET_UPDATED_STAFF_LIST,
    payload: flag,
  };
};

export const fetchUpdatedWhoIsOnList = (flag: boolean) => {
  return {
    type: COMMON_CONSTANTS.REDUX_TYPES.SET_UPDATED_WHO_IS_ON_LIST,
    payload: flag,
  };
};

export type Action = ReturnType<
  typeof fetchUpdatedStaffList | typeof fetchUpdatedWhoIsOnList
>;
