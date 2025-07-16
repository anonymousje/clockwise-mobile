import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { NewPasswordRouteProp } from '../../types';
import { NavigationProp } from '../../types';
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
  const [loading, setLoading] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);
  const [isSpecialChar, setIsSpecialChar] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isLength, setIsLength] = useState(false);
  const [isValid, setIsValid] = useState(true);

  function validatePassword(text: string) {
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /\d/;
    const lengthRegex = /.{7,}/;

    setIsUppercase(uppercaseRegex.test(text));
    setIsSpecialChar(specialCharRegex.test(text));
    setIsNumber(numberRegex.test(text));
    setIsLength(lengthRegex.test(text));

    return isUppercase && isSpecialChar && isLength && isNumber;
  }

  const route = useRoute<NewPasswordRouteProp>();

  const { email, token } = route.params || {};
  const navigation = useNavigation<NavigationProp>();

  function handleBack() {
    navigation.navigate(SCREENS.Login);
  }

  function handleSubmit() {
    setIsValid(validatePassword(newPassword));
    setMatch(true);
    setLoading(true);

    if (newPassword !== confirmPassword) {
      setMatch(false);
      setLoading(false);
      return;
    }

    if (token && validatePassword(newPassword)) {
      const encodedToken = encodeURIComponent(token);
      apiClient
        .post('/Auth/reset-password', {
          email,
          token: encodedToken,
          newPassword,
        })
        .then(() => {
          setSuccess(true);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error resetting password:', error);
          setErrorMsg(true);
          setLoading(false);
          return;
        });
    } else {
      setLoading(false);
    }

    return;
  }
  function changePwdType() {
    setIsPassword((prevState) => !prevState);
  }

  function changeConfirmPwdType() {
    setIsConfirmPassword((prevState) => !prevState);
  }

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
    loading,
    isUppercase,
    isSpecialChar,
    isNumber,
    isLength,
    isValid,
  };
}

export default useNewPasswordScreen;
