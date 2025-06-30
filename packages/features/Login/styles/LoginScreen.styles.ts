import { StyleSheet, Appearance } from 'react-native';
import { colors } from '../../theme';
const mode = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      mode === 'dark'
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
  errorMsg: {
    color: 'red',
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
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: '300',
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    marginBottom: 40,
    lineHeight: 34,
  },
  form: {
    flex: 1,
  },
  input: {
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor:
      mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    paddingVertical: 16,
    fontSize: 16,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: colors.CLOCKWISE_PRIMARY,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
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
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default styles;
