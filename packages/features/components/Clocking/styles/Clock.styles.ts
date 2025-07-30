import { Appearance, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONT_SIZE, MODE } from '../../../../constants/theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,

    flex: 1,
    justifyContent: 'flex-start',
  },
  clockContainer: {
    flex: 0,
    alignSelf: 'stretch',
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 25,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 30,
  },
  headerText: {
    fontSize: FONT_SIZE.SIZE_20,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    color: COLORS.TEXT_LIGHT_MODE,
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

  clockOutContainer: {},
  titleContainer: {},
  titleText: {
    fontSize: FONT_SIZE.SIZE_17,
    opacity: 0.5,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: COLORS.TEXT_LIGHT_MODE,
  },
  timeText: {
    fontSize: FONT_SIZE.SIZE_30,
    paddingVertical: 25,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    color: COLORS.TEXT_LIGHT_MODE,
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
    transform: [{ rotate: '-20deg' }],
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
    top: 60,
    left: 230,
    right: 0,
    bottom: 0,
    opacity: 0.1,
  },
});
