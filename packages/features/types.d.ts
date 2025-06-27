import { SCREENS } from '../constants/screens';

export interface Mode {
  flag: boolean;
}

export type RoutesTypes = {
  [SCREENS.Login]: undefined;
  [SCREENS.ForgotPassword]: undefined;
  [SCREENS.Dashboard]: undefined;
};

export interface User {
  email: string;
  accessToken: string;
  refreshToken: string;
}
