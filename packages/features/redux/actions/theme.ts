import { Mode } from '../../types';
import { Alert } from 'react-native';
export const switchTheme = (mode: any) => {
  return { type: 'THEME_CHANGE', payload: mode };
};
export type Theme = ReturnType<typeof switchTheme>;
