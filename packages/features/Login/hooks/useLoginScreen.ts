import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { SCREENS } from '../../../constants/screens';
import { useDispatch } from 'react-redux';
import { logInUser } from '../../../store/actions/auth';
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
