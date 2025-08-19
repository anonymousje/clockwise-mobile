import { Appearance, StyleSheet } from 'react-native';
import { COLORS, MODE } from '../../../constants/theme';

const mode = Appearance.getColorScheme();
const styles = StyleSheet.create({
  container: {
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },
});

export default styles;
