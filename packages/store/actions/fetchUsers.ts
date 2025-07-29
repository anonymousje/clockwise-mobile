export const fetchUpdated = (flag: boolean) => {
  return {
    type: 'SET_UPDATED',
    payload: flag,
  };
};

export type Action = ReturnType<typeof fetchUpdated>;
