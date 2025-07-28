import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { NavigationProp } from '../../types';
import { SCREENS } from '../../../constants/screens';

const useDashboardScreen = () => {
  const user = useSelector((state: RootState) => state.user);

  const navigation = useNavigation<NavigationProp>();

  const handleBack = () => {
    navigation.replace(SCREENS.Login);
  };

  const handleNav = () => {
    navigation.navigate(SCREENS.Staff);
  };

  return { handleBack, handleNav, user };
};

export default useDashboardScreen;
