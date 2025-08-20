import { Appearance, StyleSheet } from 'react-native';
import { COLORS, FONTS, MODE } from '../../../constants/theme';

const mode = Appearance.getColorScheme();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    paddingVertical: 5,
  },
  header: {
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    padding: 20,
  },
  headerText: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: 20,
    fontFamily: FONTS.CLOCKWISE_BOLD,
  },
});

export default styles;
