import { useState } from 'react';
import { Alert } from 'react-native';

function useNewPasswordScreen() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPassword, setIsPassword] = useState(true);

  function handleSubmit() {
    if (password !== confirmPassword) {
      Alert.alert('Passwords do not match');
      return;
    }

    Alert.alert(
      'Password reset successful',
      `Your new password is: ${password}`,
    );
  }
  const changePwdType = () => {
    setIsPassword((prevState) => !prevState);
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    isPassword,
    changePwdType,
    handleSubmit,
  };
}

export default useNewPasswordScreen;
