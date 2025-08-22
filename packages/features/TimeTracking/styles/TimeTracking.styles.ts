import { Appearance, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONT_SIZE, MODE } from '../../../constants/theme';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';

const mode = Appearance.getColorScheme();
const styles = StyleSheet.create({
  container: {
    flex: COMMON_CONSTANTS.ONE,
    backgroundColor: COLORS.BACKGROUND_DARKER_MODE,
  },
  loadingContainer: {
    flex: COMMON_CONSTANTS.ONE,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },
  header: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    justifyContent: COMMON_CONSTANTS.FLEX.SPACE_BETWEEN,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    padding: COMMON_CONSTANTS.SIZE.SIZE_20,
    paddingTop: COMMON_CONSTANTS.SIZE.SIZE_34,
  },
  filterIconStyle: {
    paddingTop: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  headerText: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_20,
    fontFamily: FONTS.CLOCKWISE_BOLD,
  },
  content: {
    flex: COMMON_CONSTANTS.ONE,
    padding: COMMON_CONSTANTS.SIZE.SIZE_20,
    paddingBottom: COMMON_CONSTANTS.SIZE.SIZE_5,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  timeEntryCard: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    backgroundColor: COLORS.BACKGROUND_DARK_MODE,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_8,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_20,
  },
  breakTimeContainer: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    gap: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  breakText: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: FONT_SIZE.SIZE_13,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },
  dateSection: {
    width: COMMON_CONSTANTS.PERCENTAGES.TWENTY,
    marginVertical: COMMON_CONSTANTS.SIZE.SIZE_20,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    borderRightWidth: COMMON_CONSTANTS.SIZE.SIZE_3,
    borderColor: COLORS.YELLOW,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_20,
  },
  dayText: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_BOLD,
  },
  dateText: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: FONT_SIZE.SIZE_30,
    fontFamily: FONTS.CLOCKWISE_BOLD,
  },
  detailsSection: {
    flex: COMMON_CONSTANTS.ONE,
    padding: COMMON_CONSTANTS.SIZE.SIZE_15,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
  },
  titleRow: {
    flex: COMMON_CONSTANTS.ONE,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
  },
  titleText: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: FONT_SIZE.SIZE_20,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_8,
  },
  cardApproveButton: {
    alignSelf: COMMON_CONSTANTS.FLEX.CENTER,
    padding: COMMON_CONSTANTS.SIZE.SIZE_5,
    elevation: COMMON_CONSTANTS.SIZE.SIZE_10,
  },
  approveText: {
    color: COLORS.GREEN,
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    alignSelf: COMMON_CONSTANTS.FLEX.CENTER,
  },
  timeText: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: FONT_SIZE.SIZE_17,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_4,
  },
  roleText: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_4,
  },
  statusText: {
    color: COLORS.YELLOW,
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_4,
  },
  buttonContainer: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_10,
    gap: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_10,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    marginTop: COMMON_CONSTANTS.AUTO,
  },
  unapproveButton: {
    width: COMMON_CONSTANTS.PERCENTAGES.FIFTY,
    backgroundColor: COLORS.RED,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_12,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  approveButton: {
    width: COMMON_CONSTANTS.PERCENTAGES.FIFTY,
    backgroundColor: COLORS.GREEN,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_12,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  buttonText: {
    fontFamily: FONTS.CLOCKWISE_BOLD,
    fontSize: FONT_SIZE.SIZE_17,
    color: COLORS.WHITE,
  },
});

export default styles;
