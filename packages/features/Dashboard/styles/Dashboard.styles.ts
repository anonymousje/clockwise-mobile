import { StyleSheet, Appearance } from 'react-native';
import { COLORS, MODE, FONT_SIZE, FONTS } from '../../../constants/theme';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';

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
  scrollViewContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: COMMON_CONSTANTS.SIZE.SIZE_34,
    paddingBottom: COMMON_CONSTANTS.SIZE.SIZE_34,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_15,

    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: COMMON_CONSTANTS.SIZE.SIZE_30,
  },
  headerText: {
    fontSize: FONT_SIZE.SIZE_24,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  widgetContainer: {
    alignItems: 'center',
    marginTop: COMMON_CONSTANTS.SIZE.SIZE_10,
    marginHorizontal: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingBottom: COMMON_CONSTANTS.SIZE.SIZE_200,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    shadowColor: COLORS.SHADOW_COLOR,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
});

export default styles;
