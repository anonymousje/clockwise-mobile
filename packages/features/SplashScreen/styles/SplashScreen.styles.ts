import { Appearance, StyleSheet } from 'react-native';
import { COLORS, MODE, FONT_SIZE, FONTS } from '../../../constants/theme';

const mode = Appearance.getColorScheme();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    fontSize: FONT_SIZE.SIZE_50,
    color: COLORS.CLOCKWISE_PRIMARY,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginRight: 8,
  },
  logoSeparator: {
    fontSize: FONT_SIZE.SIZE_50,
    color: COLORS.WHITE,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginRight: 8,
  },
  logoText: {
    fontSize: FONT_SIZE.SIZE_50,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
});

export default styles;
