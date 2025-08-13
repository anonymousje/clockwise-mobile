import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setTokens } from '../../../store/actions/auth';
import { SCREENS } from '../../../constants/screens';
import { NavigationProp } from '../../types';

const useSplashScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const user = await AsyncStorage.getItem('user');
        if (user) {
          const parsedUser = JSON.parse(user);
          dispatch(
            setTokens(
              parsedUser.accessToken,
              parsedUser.role,
              parsedUser.email,
              parsedUser.status,
              parsedUser.name,
              parsedUser.userId,
            ),
          );
          navigation.replace(SCREENS.MainTabs);
        } else {
          navigation.replace(SCREENS.Login);
        }
      } catch (error) {
        navigation.replace(SCREENS.Login);
      }
    };

    const timer = setTimeout(checkAuth, 500);
    return () => clearTimeout(timer);
  }, [dispatch, navigation]);

  return null;
};

export default useSplashScreen;
