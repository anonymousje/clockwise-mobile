import { StyleSheet, Appearance } from 'react-native';
import { colors } from '../../../theme';
import { fonts } from '../../../theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 60,
  },

  input: {
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontSize: 20,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
    borderBottomWidth: 1,
    borderColor:
      mode === 'dark'
        ? colors.BORDER_COLOR_DARK_MODE
        : colors.BORDER_COLOR_LIGHT_MODE,
  },

  inputError: {
    borderColor: 'red',
  },

  inputFocused: {
    borderBottomColor: colors.CLOCKWISE_PRIMARY,
    borderBottomWidth: 2,
  },

  errorMsg: {
    color: 'red',
    fontSize: 13,
    marginBottom: 2,
    marginLeft: 4,
  },

  passwordContainer: {
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,

    borderBottomWidth: 1,

    borderBottomColor:
      mode === 'dark'
        ? colors.BORDER_COLOR_DARK_MODE
        : colors.BORDER_COLOR_LIGHT_MODE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  inputPassword: {
    flex: 1,
    fontSize: 20,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: fonts.CLOCKWISE_REGULAR,
  },

  showPasswordButton: {
    color:
      mode === 'dark'
        ? colors.CLOCKWISE_PRIMARY
        : colors.CLOCKWISE_PRIMARY_DARK,
    paddingHorizontal: 12,
  },
});
