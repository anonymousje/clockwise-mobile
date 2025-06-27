//Imports
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Appearance,
  SafeAreaView,
} from 'react-native';

import styles from '../styles/LoginScreen.styles';
import useLoginScreen from '../hooks/useLoginScreen';

//Main Function
export default function Login() {
  //Hook
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleForgotPassword,
    attempt,
  } = useLoginScreen();
  //UI

  const modeAuto = Appearance.getColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>CW</Text>
          <Text style={styles.logoSeparator}>|</Text>
          <Text style={styles.logoText}>ClockWise</Text>
        </View>
      </View>

      {/* Input fields */}
      <View style={styles.content}>
        <Text style={styles.title}>Log in to your account</Text>

        <View style={styles.form}>
          {/* Username field */}
          {attempt && (
            <Text style={styles.errorMsg}>
              Incorrect Email or Password. Please Try again.
            </Text>
          )}
          <TextInput
            style={styles.input}
            placeholder="Email or username"
            placeholderTextColor={modeAuto === 'light' ? 'black' : 'white'}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
          {/* Password field */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor={modeAuto === 'light' ? 'black' : 'white'}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          {/* Login Button field */}
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>LOG IN</Text>
          </TouchableOpacity>
          {/* ForgotPassword field */}
          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
