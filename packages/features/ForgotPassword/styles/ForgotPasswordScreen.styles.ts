import { StyleSheet, Appearance } from 'react-native';
import {
  COLORS,
  FONTS,
  MODE,
  FONT_SIZE,
  HEIGHT,
} from '../../../constants/theme';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';

const mode = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    flex: COMMON_CONSTANTS.ONE,
    justifyContent: COMMON_CONSTANTS.FLEX.FLEX_START,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_24,
    paddingTop: COMMON_CONSTANTS.SIZE.SIZE_40,
  },

  modalContainer: {
    flex: COMMON_CONSTANTS.ONE,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
  },

  closeButton: {
    position: COMMON_CONSTANTS.POSITION.ABSOLUTE,
    top: COMMON_CONSTANTS.SIZE.SIZE_20,
    right: COMMON_CONSTANTS.SIZE.SIZE_20,
  },

  successMsg: {
    color: COLORS.CLOCKWISE_PRIMARY,
    fontSize: FONT_SIZE.SIZE_18,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginTop: COMMON_CONSTANTS.SIZE.SIZE_20,
    textAlign: COMMON_CONSTANTS.ALIGN.CENTER,
  },

  form: {
    flex: COMMON_CONSTANTS.ONE,
  },

  errorMsg: {
    color: COLORS.RED,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_10,
  },

  inputPassword: {
    fontSize: FONT_SIZE.SIZE_18,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_16,
  },

  NewPasswordRow: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    justifyContent: COMMON_CONSTANTS.FLEX.SPACE_BETWEEN,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_8,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_14,
  },

  ConfirmPasswordRow: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    justifyContent: COMMON_CONSTANTS.FLEX.SPACE_BETWEEN,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_8,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_14,
    marginVertical: COMMON_CONSTANTS.SIZE.SIZE_20,
  },

  buttonContainer: {
    width: COMMON_CONSTANTS.PERCENTAGES.HUNDRED,
  },

  loader: {
    marginTop: COMMON_CONSTANTS.SIZE.SIZE_20,
  },

  button: {
    backgroundColor: COLORS.CLOCKWISE_PRIMARY,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_16,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_8,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    marginTop: COMMON_CONSTANTS.SIZE.SIZE_10,
  },

  buttonText: {
    color: COLORS.BUTTON_TEXT,
    fontSize: FONT_SIZE.SIZE_18,
    fontFamily: FONTS.CLOCKWISE_BOLD,
  },

  header: {
    width: COMMON_CONSTANTS.PERCENTAGES.HUNDRED,
    fontSize: FONT_SIZE.SIZE_30,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color:
      mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.BACKGROUND_LIGHT_MODE,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_40,
    lineHeight: COMMON_CONSTANTS.SIZE.SIZE_34,
    paddingBottom: COMMON_CONSTANTS.SIZE.SIZE_20,
  },

  popUpBoxText: {
    color:
      mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.BACKGROUND_LIGHT_MODE,
    fontSize: FONT_SIZE.SIZE_18,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    textAlign: COMMON_CONSTANTS.ALIGN.CENTER,
  },

  showPassButton: {
    color:
      mode === MODE.DARK
        ? COLORS.CLOCKWISE_PRIMARY
        : COLORS.CLOCKWISE_PRIMARY_DARK,
  },

  input: {
    width: COMMON_CONSTANTS.PERCENTAGES.HUNDRED,
    height: HEIGHT.SMALL,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_8,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_14,
    fontSize: FONT_SIZE.SIZE_18,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_20,
    paddingBottom: COMMON_CONSTANTS.SIZE.SIZE_16,
  },

  popupBox: {
    width: COMMON_CONSTANTS.PERCENTAGES.EIGHTY,
    height: COMMON_CONSTANTS.PERCENTAGES.TWENTY,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    gap: COMMON_CONSTANTS.SIZE.SIZE_5,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_4,
    padding: COMMON_CONSTANTS.SIZE.SIZE_24,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    shadowColor: COLORS.SHADOW_COLOR,
    elevation: COMMON_CONSTANTS.SIZE.SIZE_2,
  },

  popupButton: {
    marginTop: COMMON_CONSTANTS.SIZE.SIZE_20,
    backgroundColor: COLORS.CLOCKWISE_PRIMARY,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_8,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_24,
  },

  popupButtonText: {
    color: COLORS.BUTTON_TEXT,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    fontSize: FONT_SIZE.SIZE_18,
  },

  rulesContainer: {
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_10,
  },

  rulesText: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_5,
    lineHeight: COMMON_CONSTANTS.SIZE.SIZE_20,
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_10,
  },
});

export const modeColor =
  mode === MODE.LIGHT ? COLORS.TEXT_LIGHT_MODE : COLORS.TEXT_DARK_MODE;

export default styles;
