import { useState } from 'react';
import { SCREENS } from '../../../constants/screens';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesTypes } from '../../types';
import apiClient from '../../authClient';
import { Alert } from 'react-native';

function useForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  type NavigationProp = NativeStackNavigationProp<RoutesTypes>;

  const navigation = useNavigation<NavigationProp>();

  const validatedEmail = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(text);
  };
  function handleBack() {
    navigation.navigate(SCREENS.Login);
  }
  function handleSubmit() {
    if (!validatedEmail(email)) {
      setIsValidEmail(false);
      return;
    }
    apiClient.post('/Auth/forgot-password', { email });
    setIsValidEmail(true);
    Alert.alert(
      `If the email ${email} is registered, you will receive a password reset link.`,
      '',
      [
        {
          text: 'Back to Login',

          onPress: handleBack,
        },
      ],
      { cancelable: false },
    );
  }

  return { email, setEmail, isValidEmail, handleSubmit };
}

export default useForgotPasswordScreen;
