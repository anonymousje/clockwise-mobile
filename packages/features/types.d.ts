import { SCREENS } from '../constants/screens';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TextInputProps } from 'react-native-gesture-handler';

export type RoutesTypes = {
  [SCREENS.Login]: undefined;
  [SCREENS.ForgotPassword]: undefined;
  [SCREENS.Dashboard]: undefined;
  [SCREENS.NewPassword]: { email?: string; token?: string };
  [SCREENS.Staff]: undefined;
  [SCREENS.AddEmployee]: undefined;
  [SCREENS.MainTabs]: undefined;
  [SCREENS.StaffDetail]: { data: staffType };
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
  emailAddress: string;
  userName?: string;
  nickName?: string;
  address?: string;
  employeeId?: string;
  permissionLevel?: string;
  status?: 'Activated' | 'Deactivated';
};

export interface InputFieldProps extends TextInputProps {
  label: string;
  value: string;
  error?: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

export type staffType = {
  firstName: string;
  lastName: string;
  email: string;
  cellPhone?: string;
  homePhone?: string;
  userName?: string;
  nickName?: string;
  address?: string;
  employeeId?: string;
  permissionLevel?: string;
  status?: 'Activated' | 'Deactivated';
};
