import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { RootState } from '../../../store';
import { NavigationProp } from '../../types';
import { SCREENS } from '../../../constants/screens';
import { logOutUser } from '../../../store/actions/auth';
import { setRefreshFlag } from '../../../store/actions/flags';

const useDashboardScreen = () => {
  const user = useSelector((state: RootState) => state.user);
  const refreshFlag = useSelector(
    (state: RootState) => state.updated.refreshFlag,
  );
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp>();
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!refreshFlag && refreshing) {
      setRefreshing(false);
    }
  }, [refreshFlag, refreshing]);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(setRefreshFlag(true));
  };

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
