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
  const [isPassword, setIsPassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  //Support Functions For Auth

  const handleLogin = async () => {
    setLoading(true);
    const valid = validateEmail(email);
    setIsValid(valid);
    if (valid) {
      const user = dispatch(await loginUser(email, password));
      setLoading(false);

      console.log(user);
      if (!user.payload) {
        setAttempt(true);
      } else {
        navigation.navigate(SCREENS.Dashboard);
      }
    }
    setLoading(false);
  };

  const validateEmail = (text: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(text);
  };

  const changePwdType = () => {
    setIsPassword(prevState => !prevState);
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
    changePwdType,
    isPassword,
    attempt,
    loading,
  };
}

export default useLoginScreen;
