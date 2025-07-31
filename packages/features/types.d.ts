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
  [SCREENS.StaffDetail]: { recordId: string };
};

export type User = {
  email: string;
  accessToken: string;
  refreshToken: string;
  role: string;
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
  ADMIN: string;
  REDUX_TYPES: {
    SET_USER: string;
    SET_TOKEN: string;
    LOGIN_USER: string;
    LOGIN_FAIL: string;
    LOGOUT: string;
  };
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
  };
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
}

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
    shiftBreaks?: Array<{
      timeEntryId: number;
      startTime: string;
      endTime: string | null;
      breakDuration: string;
    }>;
  };
  exceptionMessage?: string | undefined;
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
