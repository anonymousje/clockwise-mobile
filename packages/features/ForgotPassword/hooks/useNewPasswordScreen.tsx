import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useRoute } from '@react-navigation/native';

import { RoutesTypes } from '../../types';
import { SCREENS } from '../../../constants/screens';
import apiClient from '../../authClient';

function useNewPasswordScreen() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [match, setMatch] = useState(true);
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  type NewPasswordRouteProp = RouteProp<
    RoutesTypes,
    typeof SCREENS.NewPassword
  >;

  const route = useRoute<NewPasswordRouteProp>();

  const { email, token } = route.params || {};

  type NavigationProp = NativeStackNavigationProp<RoutesTypes>;

  const navigation = useNavigation<NavigationProp>();

  function handleBack() {
    navigation.navigate(SCREENS.Login);
  }
  function handleSubmit() {
    if (newPassword !== confirmPassword) {
      setMatch(false);
      return;
    }
    if (token) {
      const encodedToken = encodeURIComponent(token);
      apiClient
        .post('/Auth/reset-password', {
          email,
          token: encodedToken,
          newPassword,
        })
        .then(() => {
          setSuccess(true);
        })
        .catch((error) => {
          console.error('Error resetting password:', error);
          setErrorMsg(true);
          return;
        });
    }
    return;
  }
  const changePwdType = () => {
    setIsPassword((prevState) => !prevState);
  };
  const changeConfirmPwdType = () => {
    setIsConfirmPassword((prevState) => !prevState);
  };

  return {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    isPassword,
    isConfirmPassword,
    changeConfirmPwdType,
    setIsConfirmPassword,
    changePwdType,
    handleSubmit,
    match,
    success,
    errorMsg,
    handleBack,
    setErrorMsg,
  };
}

export default useNewPasswordScreen;
