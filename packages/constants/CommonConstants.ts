import { COMMON_CONSTANTS_TYPE } from '../features/types';

const COMMON_CONSTANTS: COMMON_CONSTANTS_TYPE = {
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

  ICONS: {
    HOME: 'home-outline',
    PEOPLE: 'people-outline',
    ADD: 'add-outline',
    EDIT: 'create-outline',
    SAVE: 'save-outline',
    CREATE: 'create-outline',
    SEARCH: 'search-outline',
    FILTER: 'filter-outline',
    ARROW: 'arrow-back-outline',
  },

  DATE_TIME: {
    NUMERIC: 'numeric',
    SHORT: 'short',
    TWO_DIGIT: '2-digit',
    EN_US: 'en-US',
  },

  FORM_CONTROLLER_VALUES: {
    FIRST_NAME: 'firstName',
    LAST_NAME: 'lastName',
    EMAIL: 'email',
    PASSWORD: 'password',
    PHONE_NUMBER: 'phoneNumber',
    USERNAME: 'username',
    NICKNAME: 'nickname',
    ADDRESS: 'address',
    USER_CODE: 'userCode',
    DEPARTMENT: 'department',
    LOCATION: 'location',
    JOB_ROLE: 'jobRole',
    ROLE: 'role',
  },
};

export default COMMON_CONSTANTS;
