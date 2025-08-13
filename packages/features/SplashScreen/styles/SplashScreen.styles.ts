import { Appearance, StyleSheet } from 'react-native';
import { COLORS, MODE, FONT_SIZE, FONTS } from '../../../constants/theme';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';

const mode = Appearance.getColorScheme();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },
  logoContainer: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
  },
  logo: {
    fontSize: FONT_SIZE.SIZE_50,
    color: COLORS.CLOCKWISE_PRIMARY,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginRight: COMMON_CONSTANTS.SIZE.SIZE_8,
  },
  logoSeparator: {
    fontSize: FONT_SIZE.SIZE_50,
    color: COLORS.WHITE,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginRight: COMMON_CONSTANTS.SIZE.SIZE_8,
  },
  logoText: {
    fontSize: FONT_SIZE.SIZE_50,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
});

export default styles;
