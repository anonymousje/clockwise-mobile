import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store';
import { NavigationProp } from '../../types';
import { SCREENS } from '../../../constants/screens';
import { logoutUser } from '../../../store/actions/auth';

const useDashboardScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();

  const handleBack = () => {
    navigation.replace(SCREENS.Login);
  };

  const handleNav = () => {
    navigation.navigate(SCREENS.Staff);
  };

  const logout = () => {
    dispatch(logoutUser());
    navigation.replace(SCREENS.Login);
  };

  return { handleBack, handleNav, user, logout };
};

export default useDashboardScreen;
