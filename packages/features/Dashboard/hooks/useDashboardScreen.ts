import { useNavigation } from '@react-navigation/native';

import { NavigationProp } from '../../types';
import { SCREENS } from '../../../constants/screens';

export default function useDashboardScreen() {
  const navigation = useNavigation<NavigationProp>();

  function handleBack() {
    navigation.navigate(SCREENS.Login);
  }

  return { handleBack };
}
