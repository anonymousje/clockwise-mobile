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

  inputFocused: {
    borderColor: colors.CLOCKWISE_PRIMARY,
    borderWidth: 2,
  },

  inputError: {
    borderColor: 'red',
  },

  errorMsg: {
    color: 'red',
    fontSize: 12,
    paddingTop: 10,
  },
});
