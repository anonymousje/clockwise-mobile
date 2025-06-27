import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Alert } from 'react-native';

import { SCREENS } from '../../../constants/screens';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/actions/auth';
import { RootState } from '../../redux/store';
import { RoutesTypes } from '../../types';
import { switchTheme } from '../../redux/actions/theme';
import { loginUser } from '../../redux/actions/auth';

function useLoginScreen() {
  //Variable Declaration

  type NavigationProp = NativeStackNavigationProp<RoutesTypes>;

  const navigation = useNavigation<NavigationProp>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [attempt, setAttempt] = useState(false);

  const dispatch = useDispatch();

  //Support Functions For Auth
  const handleLogin = async () => {
    const user = dispatch(await loginUser(email, password));
    console.log(user);
    if (!user.payload) {
      setAttempt(true);
    } else {
      navigation.navigate(SCREENS.Dashboard);
    }
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

    attempt,
  };
}

export default useLoginScreen;
