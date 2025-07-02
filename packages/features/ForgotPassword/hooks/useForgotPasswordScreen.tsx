import { useState } from 'react';
import { Alert } from 'react-native';
import { SCREENS } from '../../../constants/screens';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RoutesTypes } from '../../types';

function useForgotPasswordScreen() {
  const [email, setEmail] = useState('');
  type NavigationProp = NativeStackNavigationProp<RoutesTypes>;

  const navigation = useNavigation<NavigationProp>();

  function handleSubmit() {
    Alert.alert(email);
    navigation.navigate(SCREENS.NewPassword);
  }

  return { email, setEmail, handleSubmit };
}

export default useForgotPasswordScreen;
