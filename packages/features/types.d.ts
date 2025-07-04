import { SCREENS } from '../constants/screens';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RoutesTypes = {
  [SCREENS.Login]: undefined;
  [SCREENS.ForgotPassword]: undefined;
  [SCREENS.Dashboard]: undefined;
  [SCREENS.NewPassword]: { email?: string; token?: string };
};

export interface User {
  email: string;
  accessToken: string;
  refreshToken: string;
  role: string;
}
export type NavigationProp = NativeStackNavigationProp<RoutesTypes>;

export type NewPasswordRouteProp = RouteProp<
  RoutesTypes,
  typeof SCREENS.NewPassword
>;
