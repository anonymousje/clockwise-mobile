import { StyleSheet, Appearance } from 'react-native';
import { colors, FONT_SIZE, MODE } from '../../../constants/theme';

const mode = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
    justifyContent: 'center',
  },
  title: {
    fontSize: FONT_SIZE.MEDIUM,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
  },

  infoBox: {
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARK_FORMS
        : colors.BACKGROUND_LIGHT_FORMS,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
  },
  value: {
    marginBottom: 10,
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
  },
});

export default styles;
