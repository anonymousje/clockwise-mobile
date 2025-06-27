import React, { useState } from 'react';
import { Alert } from 'react-native';

function useForgotPasswordScreen() {
  //Variable Declaration
  const [email, setEmail] = useState('');

  //Support Functions
  function handleSubmit() {
    Alert.alert(email);
  }

  return { email, setEmail, handleSubmit };
}

export default useForgotPasswordScreen;
