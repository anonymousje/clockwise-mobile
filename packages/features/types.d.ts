import { SCREENS } from '../constants/screens';

export type RoutesTypes = {
  [SCREENS.Login]: undefined;
  [SCREENS.ForgotPassword]: undefined;
  [SCREENS.Dashboard]: undefined;
  [SCREENS.NewPassword]: undefined;
};

export interface User {
  email: string;
  accessToken: string;
  refreshToken: string;
  role: string;
}
