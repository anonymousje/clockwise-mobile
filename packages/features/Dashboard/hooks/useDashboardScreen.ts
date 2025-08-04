import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { RootState } from '../../../store';
import { NavigationProp } from '../../types';
import { SCREENS } from '../../../constants/screens';
import { logOutUser } from '../../../store/actions/auth';

const useDashboardScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();
  const [refreshing, setRefreshing] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const onRefresh = useCallback((flag: boolean) => {
    setRefreshing(flag);
    setRefreshFlag(flag);
  }, []);

  const handleBack = () => {
    navigation.replace(SCREENS.Login);
  };

  const handleNav = () => {
    navigation.navigate(SCREENS.Staff);
  };

  const logout = () => {
    dispatch(logOutUser());
    navigation.replace(SCREENS.Login);
  };

  return {
    handleBack,
    handleNav,
    user,
    logout,
    onRefresh,
    refreshing,
    refreshFlag,
  };
};

export default useDashboardScreen;
