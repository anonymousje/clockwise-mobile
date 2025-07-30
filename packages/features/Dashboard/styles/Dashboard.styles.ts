import { StyleSheet, Appearance } from 'react-native';
import { COLORS, MODE } from '../../../constants/theme';

const mode = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
    justifyContent: 'flex-start',
  },

  widgetContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 10,
    paddingBottom: 200,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    shadowColor: COLORS.SHADOW_COLOR,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default styles;
