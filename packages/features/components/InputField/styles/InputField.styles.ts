import { StyleSheet, Appearance } from 'react-native';
import { colors } from '../../../theme';
import { fonts } from '../../../theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  inputField: {
    marginBottom: 50,
  },

  input: {
    color: mode === 'dark' ? 'white' : '#222',
    fontSize: 16,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    backgroundColor: mode === 'dark' ? '#222' : '#f5f5f5',
    borderRadius: 10,
    borderWidth: 0,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  passwordRow: {
    backgroundColor: mode === 'dark' ? '#222' : '#f5f5f5',

    borderRadius: 10,
    padding: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
  },

  showPassButton: {
    backgroundColor: mode === 'dark' ? '#222' : '#f5f5f5',
  },

  inputPassword: {
    flex: 1,
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    fontFamily: fonts.CLOCKWISE_REGULAR,
  },

  inputFocused: {
    borderColor: colors.CLOCKWISE_PRIMARY,
    borderWidth: 2,
  },

  inputError: {
    borderColor: 'red',
  },

  button: {
    position: 'absolute',
    right: 10,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    backgroundColor: mode === 'dark' ? '#222' : '#f5f5f5',
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  errorMsg: {
    color: 'red',
    fontSize: 12,
    paddingTop: 10,
  },

  showPasswordButton: {
    color:
      mode === 'dark'
        ? colors.CLOCKWISE_PRIMARY
        : colors.CLOCKWISE_PRIMARY_DARK,
    paddingHorizontal: 12,
  },
});
