import { Appearance, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONT_SIZE, MODE } from '../../../../constants/theme';
import COMMON_CONSTANTS from '../../../../constants/CommonConstants';

const mode = Appearance.getColorScheme();

const styles = StyleSheet.create({
  filterGroup: {
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_24,
  },
  filterLabel: {
    fontSize: FONT_SIZE.SIZE_17,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_15,
    marginLeft: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  pickerContainer: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_12,
    borderWidth: COMMON_CONSTANTS.ONE,
    borderColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
    elevation: COMMON_CONSTANTS.SIZE.SIZE_2,
    minHeight: COMMON_CONSTANTS.SIZE.SIZE_57,
  },
  pickerIcon: {
    marginLeft: COMMON_CONSTANTS.SIZE.SIZE_15,
    marginRight: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  filterInput: {
    flex: COMMON_CONSTANTS.ONE,
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_15,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },
  dateInputTextWithValue: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  dateInputPlaceholder: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },
  calendarContainer: {
    marginTop: COMMON_CONSTANTS.SIZE.SIZE_10,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_12,
    borderWidth: COMMON_CONSTANTS.ONE,
    borderColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    padding: COMMON_CONSTANTS.SIZE.SIZE_8,
    elevation: COMMON_CONSTANTS.SIZE.SIZE_4,
  },
});

export default styles;
