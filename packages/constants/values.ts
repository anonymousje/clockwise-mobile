const VALUES = {
  DEFAULT: '',
  PICKER_VALUES: {
    ADMIN: 'Admin',
    USER: 'User',
  },

  ADMIN: 'Admin',

  REDUX_TYPES: {
    SET_USER: 'SET_USER',
    SET_TOKEN: 'SET_TOKEN',
    LOGIN_USER: 'LOGIN_USER',
    LOGIN_FAIL: 'LOGIN_FAIL',
  },
  DATE_TIME: {
    NUMERIC: 'numeric' as const,
    SHORT: 'short' as const,
    TWO_DIGIT: '2-digit' as const,
    EN_US: 'en-US' as const,
  },

  FORM_CONTROLLER_VALUES: {
    FIRST_NAME: 'firstName' as const,
    LAST_NAME: 'lastName' as const,
    EMAIL: 'email' as const,
    PASSWORD: 'password' as const,
    PHONE_NUMBER: 'phoneNumber' as const,
    USERNAME: 'username' as const,
    NICKNAME: 'nickname' as const,
    ADDRESS: 'address' as const,
    USER_CODE: 'userCode' as const,
    DEPARTMENT: 'department' as const,
    LOCATION: 'location' as const,
    JOB_ROLE: 'jobRole' as const,
    ROLE: 'role' as const,
  },
};

export default VALUES;
