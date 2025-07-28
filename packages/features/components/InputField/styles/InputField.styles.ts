import { StyleSheet, Appearance } from 'react-native';
import { colors, MODE } from '../../../../constants/theme';
import { fonts } from '../../../../constants/theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 60,
  },

  input: {
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontSize: 20,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
    borderBottomWidth: 1,
    borderBottomColor:
      mode === MODE.DARK
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
      mode === MODE.DARK
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,

    borderBottomWidth: 1,

    borderBottomColor:
      mode === MODE.DARK
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
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
  },

  showPasswordButton: {
    color:
      mode === MODE.DARK
        ? colors.CLOCKWISE_PRIMARY
        : colors.CLOCKWISE_PRIMARY_DARK,
    paddingHorizontal: 12,
  },
});
