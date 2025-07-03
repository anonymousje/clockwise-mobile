import { SCREENS } from '../constants/screens';

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
