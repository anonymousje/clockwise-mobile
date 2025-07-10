import { StyleSheet, Appearance } from 'react-native';
import { colors } from '../../../theme';
import { fonts } from '../../../theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  inputField: {
    marginBottom: 20,
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

  showPassButton: {
    backgroundColor: mode === 'dark' ? '#222' : '#f5f5f5',
  },

  inputPassword: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
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
});
