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
import { COLORS, MODE } from '../../../constants/theme';
import STRINGS from '../../../utils/strings';

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleForgotPassword,
    isValid,
    changePasswordType,
    isPassword,
    attempt,
    loading,
  } = useLoginScreen();

  const mode = Appearance.getColorScheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>{STRINGS.CLOCKWISE_INITIALS}</Text>
          <Text style={styles.logoSeparator}>|</Text>
          <Text style={styles.logoText}>{STRINGS.CLOCKWISE}</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{STRINGS.HEADERS.LOGIN}</Text>

        <View style={styles.form}>
          {attempt && (
            <Text style={styles.errorMsg}>
              {STRINGS.ERROR.INCORRECT_CREDENTIALS}
            </Text>
          )}

          {!isValid && (
            <Text style={styles.errorMsg}>
              {STRINGS.ERROR.ENTER_EMAIL_ERROR}
            </Text>
          )}

          <TextInput
            style={styles.input}
            placeholder={STRINGS.INPUT_PLACEHOLDER_TEXT.EMAIL_OR_USERNAME}
            placeholderTextColor={
              mode === MODE.LIGHT
                ? COLORS.TEXT_LIGHT_MODE
                : COLORS.TEXT_DARK_MODE
            }
            value={email}
            onChangeText={setEmail}
            autoCapitalize='none'
          />

          <View style={styles.passwordRow}>
            <TextInput
              style={styles.inputPassword}
              placeholder={STRINGS.INPUT_PLACEHOLDER_TEXT.PASSWORD}
              placeholderTextColor={
                mode === MODE.LIGHT
                  ? COLORS.TEXT_LIGHT_MODE
                  : COLORS.TEXT_DARK_MODE
              }
              value={password}
              onChangeText={setPassword}
              secureTextEntry={isPassword}
            />
            <TouchableOpacity onPress={changePasswordType}>
              <Text style={styles.showPasswordButton}>
                {isPassword
                  ? STRINGS.ICON_TITLES.SHOW
                  : STRINGS.ICON_TITLES.HIDE}
              </Text>
            </TouchableOpacity>
          </View>

          {loading ? (
            <ActivityIndicator
              size='large'
              color={COLORS.CLOCKWISE_PRIMARY}
              style={styles.loader}
            />
          ) : (
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLogin}
            >
              <Text style={styles.loginButtonText}>
                {STRINGS.BUTTON_TEXT.LOG_IN}
              </Text>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={handleForgotPassword}
          >
            <Text style={styles.forgotPasswordText}>
              {STRINGS.BUTTON_TEXT.FORGOT_PASSWORD}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
