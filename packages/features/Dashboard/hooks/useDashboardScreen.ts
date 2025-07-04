import { useNavigation } from '@react-navigation/native';

import { NavigationProp } from '../../types';
import { SCREENS } from '../../../constants/screens';

export default function useDashboardScreen() {
  const navigation = useNavigation<NavigationProp>();

  function handleBack() {
    navigation.replace(SCREENS.Login);
  }

  return { handleBack };
}
