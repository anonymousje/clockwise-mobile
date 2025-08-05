import { SCREENS } from '../constants/screens';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TouchableOpacityProps } from 'react-native';
import { TextInputProps } from 'react-native-gesture-handler';

export type RoutesTypes = {
  [SCREENS.Login]: undefined;
  [SCREENS.ForgotPassword]: undefined;
  [SCREENS.Dashboard]: undefined;
  [SCREENS.NewPassword]: { email?: string; token?: string };
  [SCREENS.Staff]: undefined;
  [SCREENS.AddEmployee]: undefined;
  [SCREENS.MainTabs]: undefined;
  [SCREENS.TimeClockDetails]: undefined;
  [SCREENS.StaffDetail]: { recordId: string };
};

export type User = {
  email: string;
  accessToken: string;
  refreshToken: string;
  role: string;
};

export type breakArrayType = {
  startTime: string;
  endTime: string | null;
};
export type NavigationProp = NativeStackNavigationProp<RoutesTypes>;

export type StaffDetailNavigationProp = RouteProp<
  RoutesTypes,
  typeof SCREENS.StaffDetail
>;

export type NewPasswordRouteProp = RouteProp<
  RoutesTypes,
  typeof SCREENS.NewPassword
>;

export type StaffFormData = {
  firstName: string;
  lastName: string;
  password: string;
  cellPhone?: string;
  homePhone?: string;
  email: string;
  userName?: string;
  nickName?: string;
  address?: string;
  employeeId?: string;
  permissionLevel?: string;
  status?: string;
};

export type GetUserResponse = {
  status: boolean;
  response: staffType | null;
  exceptionMessage?: string | undefined;
};

export interface InputFieldProps extends TextInputProps {
  label: string;
  value: string;
  error?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export interface FORM_CONTROLLER_VALUES {
  FIRST_NAME: const;
  LAST_NAME: const;
  EMAIL: const;
  PASSWORD: const;
  PHONE_NUMBER: const;
  USERNAME: const;
  NICKNAME: const;
  ADDRESS: const;
  USER_CODE: const;
  DEPARTMENT: const;
  LOCATION: const;
  JOB_ROLE: const;
  ROLE: const;
}

export interface COMMON_CONSTANTS_TYPE {
  DEFAULT: string;
  PICKER_VALUES: {
    ADMIN: string;
    USER: string;
  };
  API_HEADERS: {
    CONTENT_TYPE: string;
    APPLICATION_JSON: string;
    ACCEPT: string;
    BEARER: string;
  };
  ADMIN: string;
  REDUX_TYPES: {
    SET_USER: string;
    SET_TOKENS: string;
    LOGIN_USER: string;
    LOGIN_FAIL: string;
    LOGOUT: string;
    SET_UPDATED_STAFF_LIST: string;
    SET_UPDATED_WHO_IS_ON_LIST: string;
    SET_REFRESH_FLAG: string;
  };
  ZERO: number;
  ONE: number;
  ICONS: {
    HOME: const;
    PEOPLE: const;
    ADD: const;
    EDIT: const;
    SAVE: const;
    CREATE: const;
    SEARCH: const;
    FILTER: const;
    ARROW: const;
    ALARM: const;
    SETTINGS: const;
    LOG_OUT: const;
    CLOCK: const;
    CLOSE: const;
    ELLIPSE: const;
    CAFE: const;
  };
  SPACE: string;
  DATE_TIME: {
    NUMERIC: const;
    SHORT: const;
    TWO_DIGIT: const;
    EN_US: const;
  };
  FORM_CONTROLLER_VALUES: {
    FIRST_NAME: const;
    LAST_NAME: const;
    EMAIL: const;
    PASSWORD: const;
    PHONE_NUMBER: const;
    USERNAME: const;
    NICKNAME: const;
    ADDRESS: const;
    USER_CODE: const;
    DEPARTMENT: const;
    LOCATION: const;
    JOB_ROLE: const;
    ROLE: const;
  };
  SIZE: {
    SIZE_1: number;
    SIZE_3: number;
    SIZE_5: number;
    SIZE_8: number;
    SIZE_10: number;
    SIZE_12: number;
    SIZE_14: number;
    SIZE_15: number;
    SIZE_16: number;
    SIZE_17: number;
    SIZE_18: number;
    SIZE_20: number;
    SIZE_21: number;
    SIZE_22: number;
    SIZE_24: number;
    SIZE_26: number;
    SIZE_28: number;
    SIZE_30: number;
    SIZE_32: number;
    SIZE_34: number;
    SIZE_33: number;
    SIZE_36: number;
    SIZE_40: number;
    SIZE_48: number;
    SIZE_50: number;
    SIZE_57: number;
    SIZE_60: number;
    SIZE_100: number;
    SIZE_120: number;
    SIZE_150: number;
    SIZE_200: number;
    SIZE_220: number;
  };
  TIME_CONSTANTS: {
    ZERO: number;
    ONE: number;
    DECIMAL: number;
    MINUTE: number;
    HOUR: number;
    MINUTE_IN_MS: number;
  };
}

export type WhoIsOnUser = {
  name: string;
  jobRole: string | null;
  clockInTime: string;
  shiftStartTime: string | null;
  shiftEndTime: string | null;
};

export type WhoIsOnResponseType = {
  status: boolean;
  response: {
    onlineUsers?: Array<WhoIsOnUser>;
    onlineUsersCount?: number;
  };
  exceptionMessage?: string | undefined;
};

export interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  label: string;
  color?: string;
}

export type staffSearchQueryType = {
  location?: string;
  department?: string;
  role?: string;
};

export type ClockStatusResponse = {
  status: boolean;
  response: {
    clockInTime?: string | undefined;
    currentTime?: string | undefined;
    hoursWorked?: string | undefined;
    isClockedIn?: boolean | undefined;
  };
  exceptionMessage?: string | undefined;
};

export type BreakStatusResponse = {
  status: boolean;
  response: {
    isOnBreak?: boolean;
    shiftBreaks?: Array<BreakType>;
  };
  exceptionMessage?: string | undefined;
};
export type ApiResponseType = {
  status: boolean;
  response: string | undefined;
  exceptionMessage?: string | undefined;
};
export type BreakType = {
  timeEntryId: number;
  startTime: string;
  endTime: string | null;
  breakDuration: string;
};
export type ResponseType = {
  status: boolean;
  response: string | undefined;
  exceptionMessage: string | undefined;
};

export type staffType = {
  iconColor?: string;
  recordId: string;
  firstName: string;
  lastName: string;
  email: string;
  role?: string;
  phoneNumber?: string | null;
  lastLoginDate?: string | null;
  userStatus?: number;
  username?: string;
  nickname?: string | null;
  address?: string | null;
  departmentName?: string | null;
  locationName?: string | null;
  jobRoleName?: string | null;
  userCode?: string | null;
  departmentRecordId?: string | null;
  locationRecordId?: string | null;
  jobRoleRecordId?: string | null;
  isDeleted?: boolean;
};

export type filterItemsType = {
  recordId: string;
  name: string;
};

export type errorType = {
  [key: string]: string;
};
