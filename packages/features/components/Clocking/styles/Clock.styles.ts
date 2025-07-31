import { Appearance, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONT_SIZE, MODE } from '../../../../constants/theme';
import COMMON_CONSTANTS from '../../../../constants/CommonConstants';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_20,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_15,
  },
  clockInContainer: {
    width: '100%',
    height: COMMON_CONSTANTS.SIZE.SIZE_50,
  },
  buttonContainer: {
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: COLORS.CLOCKWISE_PRIMARY,
    alignItems: 'center',
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_12,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  ButtonText: {
    fontFamily: FONTS.CLOCKWISE_BOLD,
    fontSize: FONT_SIZE.SIZE_17,
    color: 'white',
  },
  titleText: {
    fontSize: FONT_SIZE.SIZE_20,
    opacity: mode === MODE.DARK ? 0.9 : 0.5,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  timeText: {
    fontSize: FONT_SIZE.SIZE_40,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_26,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  clockOutButtonContainer: {
    flexDirection: 'row',
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    gap: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_5,
    justifyContent: 'center',
  },
  breakEndButton: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_12,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_5,
    backgroundColor: COLORS.BREAK_BUTTON_BACKGROUND,
  },
  breakButtonText: {
    fontFamily: FONTS.CLOCKWISE_BOLD,
    fontSize: FONT_SIZE.SIZE_17,
  },
  icon: {
    transform: [{ rotate: '-15deg' }],
  },
  breakButton: {
    width: '50%',
    backgroundColor: COLORS.BREAK_BUTTON_BACKGROUND,
    alignItems: 'center',
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_12,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  clockOutButton: {
    width: '50%',
    backgroundColor: COLORS.CLOCK_OUT_BUTTON_BACKGROUND,
    alignItems: 'center',
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_12,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  clockIconBackground: {
    position: 'absolute',
    top: COMMON_CONSTANTS.SIZE.SIZE_10,
    left: COMMON_CONSTANTS.SIZE.SIZE_220,
    opacity: 0.1,
  },
  modalContainer: {
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
    justifyContent: 'flex-start',

    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },
  modalHeader: {
    flexDirection: 'row',
    paddingBottom: COMMON_CONSTANTS.SIZE.SIZE_15,
    borderBottomWidth: 0.2,
    borderBottomColor: COLORS.HEADER_BORDER_COLOR,
  },
  headerIcon: {
    paddingTop: COMMON_CONSTANTS.SIZE.SIZE_22,
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_15,
  },
  modalTitle: {
    fontSize: FONT_SIZE.SIZE_20,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    paddingTop: COMMON_CONSTANTS.SIZE.SIZE_20,
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_15,
  },
  noteInput: {
    marginVertical: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_20,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    fontSize: FONT_SIZE.SIZE_18,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  noteContainer: {
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
    justifyContent: 'space-between',
  },
});

export const iconColour = mode === MODE.DARK ? COLORS.WHITE : COLORS.BLACK;
