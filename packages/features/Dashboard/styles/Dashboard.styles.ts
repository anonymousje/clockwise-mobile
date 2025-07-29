import { StyleSheet, Appearance } from 'react-native';
import { COLORS, FONT_SIZE, MODE } from '../../../constants/theme';

const mode = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    justifyContent: 'center',
  },
  title: {
    fontSize: FONT_SIZE.SIZE_24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },

  infoBox: {
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_FORMS
        : COLORS.BACKGROUND_LIGHT_FORMS,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  value: {
    marginBottom: 10,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
});

export default styles;
