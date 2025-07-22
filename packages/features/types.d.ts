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

export interface ButtonProps extends TouchableOpacityProps {
  onPress: () => void;
  label: string;
  color?: string;
}

export type staffSearchQueryType = {
  locations?: string;
  departments?: string;
  roles?: string;
};

export type staffType = {
  recordId: string;
  firstName: string;
  lastName: string;
  email: string;
  role?: string;
  phoneNumber?: string | null;
  lastLoginDate?: string | null;
  status?: string;
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
