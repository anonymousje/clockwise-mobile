import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { NewPasswordRouteProp } from '../../types';
import { NavigationProp } from '../../types';
import { SCREENS } from '../../../constants/screens';
import NewPasswordService from '../services/NewPasswordService';

const useNewPasswordScreen = () => {
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

  const validatePassword = (text: string) => {
    const uppercaseRegex = /[A-Z]/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const numberRegex = /\d/;
    const lengthRegex = /.{7,}/;

    const hasUppercase = uppercaseRegex.test(text);
    const hasSpecialChar = specialCharRegex.test(text);
    const hasNumber = numberRegex.test(text);
    const hasLength = lengthRegex.test(text);

    setIsUppercase(hasUppercase);
    setIsSpecialChar(hasSpecialChar);
    setIsNumber(hasNumber);
    setIsLength(hasLength);

    return hasUppercase && hasSpecialChar && hasLength && hasNumber;
  };

  const route = useRoute<NewPasswordRouteProp>();

  const { token } = route.params || {};
  const navigation = useNavigation<NavigationProp>();

  const handleBack = () => {
    navigation.replace(SCREENS.Login);
  };

  const handleSubmit = async () => {
    const isPasswordValid = validatePassword(newPassword);
    setIsValid(isPasswordValid);
    setMatch(true);
    setLoading(true);

    if (newPassword !== confirmPassword) {
      setMatch(false);
      setLoading(false);
      return;
    }

    if (token && isPasswordValid) {
      const response = await NewPasswordService.resetPassword(
        token,
        newPassword,
      );

      if (response.status) {
        setSuccess(true);
      } else {
        setErrorMsg(true);
      }
      setLoading(false);
    } else {
      setLoading(false);
    }
    return;
  };
  const changePasswordType = () => {
    setIsPassword((prevState) => !prevState);
  };

  const changeConfirmPasswordType = () => {
    setIsConfirmPassword((prevState) => !prevState);
  };

  return {
    newPassword,
    setNewPassword,
    confirmPassword,
    setConfirmPassword,
    isPassword,
    isConfirmPassword,
    changeConfirmPasswordType,
    setIsConfirmPassword,
    changePasswordType,
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
};

export default useNewPasswordScreen;
