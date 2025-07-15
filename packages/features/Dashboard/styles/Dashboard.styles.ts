import { StyleSheet, Appearance } from 'react-native';
import { colors } from '../../theme';

const mode = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
  },

  infoBox: {
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARK_FORMS
        : colors.BACKGROUND_LIGHT_FORMS,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
  },
  label: {
    fontWeight: '600',
    marginTop: 10,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
  },
  value: {
    marginBottom: 10,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
  },
});

export default styles;
