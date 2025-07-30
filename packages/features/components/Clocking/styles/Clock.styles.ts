import { Appearance, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONT_SIZE, MODE } from '../../../../constants/theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  clockInContainer: {
    width: '100%',
    height: 50,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    width: '100%',
    backgroundColor: COLORS.CLOCKWISE_PRIMARY,
    alignItems: 'center',
    paddingVertical: 11,
    borderRadius: 5,
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
    fontSize: FONT_SIZE.SIZE_50,
    paddingVertical: 25,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  clockOutButtonContainer: {
    flexDirection: 'row',
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    gap: 10,
    paddingVertical: 5,
    justifyContent: 'center',
  },
  icon: {
    transform: [{ rotate: '-15deg' }],
  },
  breakButton: {
    width: '50%',
    backgroundColor: COLORS.BREAK_BUTTON_BACKGROUND,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 5,
  },
  clockOutButton: {
    width: '50%',
    backgroundColor: COLORS.CLOCK_OUT_BUTTON_BACKGROUND,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 5,
  },
  clockIconBackground: {
    position: 'absolute',
    top: 10,
    left: 220,
    right: 0,
    bottom: 0,
    opacity: 0.1,
  },
});
