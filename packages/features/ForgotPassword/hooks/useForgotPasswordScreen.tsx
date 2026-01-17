import { useState } from 'react';
import { SCREENS } from '../../../constants/screens';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../types';
import ForgotPasswordService from '../services/ForgotPasswordService';

const useForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation<NavigationProp>();

  const validatedEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };

  const handleBack = () => {
    navigation.navigate(SCREENS.Login);
  };

  const handleSubmit = async () => {
    setLoading(true);

    if (!validatedEmail(email)) {
      setIsValidEmail(false);
      setLoading(false);
      return;
    }

    const response = await ForgotPasswordService.requestPasswordReset(email);
    if (response.status) {
      setIsValidEmail(true);
      setSuccess(true);
    } else {
      setIsValidEmail(false);
    }
    setLoading(false);
  };

  return {
    email,
    setEmail,
    isValidEmail,
    handleSubmit,
    handleBack,
    success,
    loading,
  };
};

export default useForgotPasswordScreen;
