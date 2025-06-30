import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { SCREENS } from '../../../constants/screens';
import { useDispatch } from 'react-redux';
import { RoutesTypes } from '../../types';
import { loginUser } from '../../redux/actions/auth';

function useLoginScreen() {
  //Variable Declaration

  type NavigationProp = NativeStackNavigationProp<RoutesTypes>;

  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [attempt, setAttempt] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const dispatch = useDispatch();

  //Support Functions For Auth

  const handleLogin = async () => {
    validateEmail(email);

    if (isValid) {
      const user = dispatch(await loginUser(email, password));
      console.log(user);
      if (!user.payload) {
        setAttempt(true);
      } else {
        navigation.navigate(SCREENS.Dashboard);
      }
    }
  };

  const validateEmail = (text: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(regex.test(text));
  };

  function handleForgotPassword() {
    //TODO: ADD NAVIGATION
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

    attempt,
  };
}

export default useLoginScreen;
