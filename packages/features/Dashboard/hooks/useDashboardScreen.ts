import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { RootState } from '../../../store';
import { NavigationProp } from '../../types';
import { SCREENS } from '../../../constants/screens';
import { logoutUser } from '../../../store/actions/auth';

const useDashboardScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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

  return { handleBack, handleNav, user, logout, onRefresh, refreshing };
};

export default useDashboardScreen;
