import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Appearance,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';

import styles from '../styles/LoginScreen.styles';
import useLoginScreen from '../hooks/useLoginScreen';
import { colors, MODE } from '../../../constants/theme';

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleForgotPassword,
    isValid,
    changePwdType,
    isPassword,
    attempt,
    loading,
  } = useLoginScreen();

  const mode = Appearance.getColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>CW</Text>
          <Text style={styles.logoSeparator}>|</Text>
          <Text style={styles.logoText}>ClockWise</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Log in to your account</Text>

        <View style={styles.form}>
          {attempt && (
            <Text style={styles.errorMsg}>
              Incorrect Email or Password. Please Try again.
            </Text>
          )}
          {!isValid && <Text style={styles.errorMsg}>Email is invalid</Text>}
          <TextInput
            style={styles.input}
            placeholder='Email or username'
            placeholderTextColor={
              mode === MODE.LIGHT
                ? colors.TEXT_LIGHT_MODE
                : colors.TEXT_DARK_MODE
            }
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
          />

          <View style={styles.passwordRow}>
            <TextInput
              style={styles.inputPassword}
              placeholder='Password'
              placeholderTextColor={
                mode === MODE.LIGHT
                  ? colors.TEXT_LIGHT_MODE
                  : colors.TEXT_DARK_MODE
              }
              value={password}
              onChangeText={setPassword}
              secureTextEntry={isPassword}
            />
            <TouchableOpacity onPress={changePwdType}>
              <Text style={styles.showPasswordButton}>
                {isPassword ? 'Show' : 'Hide'}
              </Text>
            </TouchableOpacity>
          </View>

          {loading ? (
            <ActivityIndicator
              size='large'
              color={colors.CLOCKWISE_PRIMARY}
              style={styles.loader}
            />
          ) : (
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>LOG IN</Text>
            </TouchableOpacity>
          )}

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
};

export default Login;
