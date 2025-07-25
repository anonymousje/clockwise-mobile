import { setTokens } from '../../store/actions/auth';
import { NavigationProp } from '../../features/types';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../constants/screens';
import { useSelector } from 'react-redux';

export function logoutCore(store: any) {
  store.dispatch(setTokens('', ''));
}

export default function useContainer() {
  const navigation = useNavigation<NavigationProp>();

  const [accessToken, refreshToken] = useSelector((state: any) => [
    state.auth.accessToken,
    state.auth.refreshToken,
  ]);

  function tokenGetter() {
    return { accessToken, refreshToken };
  }

  function logout() {
    setTokens('', '');
    console.log('User logged out');
    navigation.navigate(SCREENS.Login);
  }

  return {
    logout,
    tokenGetter,
  };
}
