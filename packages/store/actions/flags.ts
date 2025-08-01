export const fetchUpdatedStaffList = (flag: boolean) => {
  return {
    type: 'SET_UPDATED',
    payload: flag,
  };
};

export const fetchUpdatedWhoIsOnList = (flag: boolean) => {
  return {
    type: 'SET_UPDATED_WHO_IS_ON_LIST',
    payload: flag,
  };
};

export type Action = ReturnType<
  typeof fetchUpdatedStaffList | typeof fetchUpdatedWhoIsOnList
>;
