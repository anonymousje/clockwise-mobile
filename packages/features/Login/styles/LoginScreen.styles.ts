import { StyleSheet, Appearance } from 'react-native';
import { colors, fonts, MODE } from '../../../constants/theme';
const mode = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 20,
  },
  loader: {
    marginTop: 20,
  },

  errorMsg: {
    color: 'red',
    marginBottom: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: '300',
    color: colors.CLOCKWISE_PRIMARY,
    marginRight: 8,
  },
  logoSeparator: {
    fontSize: 24,
    color: '#666',
    fontWeight: '300',
    marginRight: 8,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '300',
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: '300',
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    marginBottom: 40,
    lineHeight: 34,
  },
  form: {
    flex: 1,
  },
  input: {
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    borderRadius: 8,

    paddingVertical: 14,
    paddingHorizontal: 12,
    fontSize: 17,
    fontFamily: fonts.CLOCKWISE_REGULAR,

    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    marginBottom: 20,
  },
  inputPassword: {
    fontSize: 17,
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  passwordRow: {
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginButton: {
    backgroundColor: colors.CLOCKWISE_PRIMARY,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 40,
  },
  showPasswordButton: {
    color:
      mode === MODE.DARK
        ? colors.CLOCKWISE_PRIMARY
        : colors.CLOCKWISE_PRIMARY_DARK,
    paddingHorizontal: 12,
  },
  loginButtonText: {
    color: colors.BUTTON_TEXT,
    fontFamily: fonts.CLOCKWISE_BOLD,
    fontSize: 16,
    fontWeight: '600',
  },
  forgotPasswordButton: {
    alignItems: 'center',
    marginTop: 16,
    paddingVertical: 12,
  },
  forgotPasswordText: {
    color: colors.CLOCKWISE_PRIMARY,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default styles;
