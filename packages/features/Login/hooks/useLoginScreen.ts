import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { SCREENS } from '../../../constants/screens';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/actions/auth';
import { NavigationProp } from '../../types';

function useLoginScreen() {
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
      const user = dispatch(await loginUser(email, password));
      setLoading(false);

      if (!user.payload) {
        setAttempt(true);
      } else {
        navigation.replace(SCREENS.Dashboard);
      }
    }

    setLoading(false);
  };

  const validateEmail = (text: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(text);
  };

  function changePwdType() {
    setIsPassword((prevState) => !prevState);
  }

  function handleForgotPassword() {
    navigation.navigate(SCREENS.ForgotPassword);
  }

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleForgotPassword,
    isValid,
    changePwdType,
    isPassword,
    attempt,
    loading,
  };
}

export default useLoginScreen;
