import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { NavigationProp } from '../../types';
import { SCREENS } from '../../../constants/screens';

export default function useDashboardScreen() {
  const user = useSelector((state: RootState) => state.user);

  const navigation = useNavigation<NavigationProp>();

  function handleBack() {
    navigation.replace(SCREENS.Login);
  }

  return { handleBack, user };
}
