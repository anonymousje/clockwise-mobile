import { StyleSheet, Appearance } from 'react-native';
import { COLORS, FONT_SIZE, MODE } from '../../../../constants/theme';
import { FONTS } from '../../../../constants/theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 60,
  },

  input: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: FONT_SIZE.SIZE_18,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    borderBottomWidth: 1,
    borderBottomColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
  },

  inputError: {
    borderColor: 'red',
  },

  inputFocused: {
    borderBottomColor: COLORS.CLOCKWISE_PRIMARY,
    borderBottomWidth: 2,
  },

  errorMsg: {
    color: 'red',
    fontSize: FONT_SIZE.ERROR,
    marginBottom: 2,
    marginLeft: 4,
  },

  passwordContainer: {
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,

    borderBottomWidth: 1,

    borderBottomColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  inputPassword: {
    flex: 1,
    fontSize: FONT_SIZE.SIZE_18,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },

  showPasswordButton: {
    color:
      mode === MODE.DARK
        ? COLORS.CLOCKWISE_PRIMARY
        : COLORS.CLOCKWISE_PRIMARY_DARK,
    paddingHorizontal: 12,
  },
});
