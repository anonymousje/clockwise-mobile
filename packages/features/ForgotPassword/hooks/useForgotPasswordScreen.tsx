import { useState } from 'react';
import { SCREENS } from '../../../constants/screens';
import { useNavigation } from '@react-navigation/native';
import apiClient from '../../apiClient';
import { NavigationProp } from '../../types';

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

  const handleSubmit = () => {
    setLoading(true);

    if (!validatedEmail(email)) {
      setIsValidEmail(false);
      setLoading(false);
      return;
    }

    apiClient.post('/Auth/forgot-password', { email });
    setIsValidEmail(true);
    setSuccess(true);
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
