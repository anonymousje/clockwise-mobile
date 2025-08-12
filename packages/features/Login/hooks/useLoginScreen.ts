import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SCREENS } from '../../../constants/screens';
import { useDispatch } from 'react-redux';
import { logInUser, setTokens } from '../../../store/actions/auth';
import { NavigationProp } from '../../types';

const useLoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [attempt, setAttempt] = useState(false);
  const [isValid, setIsValid] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem('user');
      console.log('Checking user in AsyncStorage:', user);
      if (user) {
        const parsedUser = JSON.parse(user);
        console.log(
          'User found, setting tokens:',
          parsedUser.accessToken,
          parsedUser.refreshToken,
          parsedUser.role,
        );
        dispatch(
          setTokens(
            parsedUser.accessToken,
            parsedUser.refreshToken,
            parsedUser.role,
          ),
        );
        navigation.replace(SCREENS.MainTabs);
      } else {
        console.log('No user found, redirecting to login');
      }
    };
    checkUser();
  }, [dispatch, navigation]);

  const handleLogin = async () => {
    setAttempt(false);
    setLoading(true);
    const valid = validateEmail(email);
    setIsValid(valid);

    if (valid) {
      const user = dispatch(await logInUser(email, password));
      setLoading(false);

      if (!user.payload) {
        setAttempt(true);
      } else {
        navigation.replace(SCREENS.MainTabs);
      }
    }

    setLoading(false);
  };

  const validateEmail = (text: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(text);
  };

  const changePasswordType = () => {
    setIsPassword((prevState) => !prevState);
  };

  const handleForgotPassword = () => {
    navigation.navigate(SCREENS.ForgotPassword);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleForgotPassword,
    isValid,
    changePasswordType,
    isPassword,
    attempt,
    loading,
  };
};

export default useLoginScreen;
