import { Appearance, StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE, FONTS, MODE } from '../../../constants/theme';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';

const mode = Appearance.getColorScheme();
const styles = StyleSheet.create({
  container: {
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    paddingTop: COMMON_CONSTANTS.SIZE.SIZE_20,
  },
  workLabelContainer: {
    borderBottomWidth: 0.2,
    padding: COMMON_CONSTANTS.SIZE.SIZE_30,
  },
  workLabel: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_16,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    opacity: 0.5,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_8,
  },
  workDuration: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_48,
  },
  clockTimesContainer: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    justifyContent: COMMON_CONSTANTS.FLEX.SPACE_BETWEEN,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_50,
    marginTop: COMMON_CONSTANTS.SIZE.SIZE_50,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_10,
  },
  clockTimeSection: {
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
  },
  clockLabel: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_20,
    opacity: 0.5,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_10,
  },
  clockTime: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_28,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_8,
  },
  clockDate: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_16,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    opacity: 0.5,
  },
  timelineContainer: {
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_20,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_30,
  },
  timelineItem: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_40,
  },
  timelineClockItem: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_40,
    marginLeft: COMMON_CONSTANTS.SIZE.SIZE_3,
  },
  timelineIconContainer: {
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    marginRight: COMMON_CONSTANTS.SIZE.SIZE_16,
  },
  timelineClockIcon: {
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    marginRight: COMMON_CONSTANTS.SIZE.SIZE_21,
    paddingRight: COMMON_CONSTANTS.SIZE.SIZE_2,
  },
  timelineContent: {
    height: COMMON_CONSTANTS.SIZE.SIZE_40,
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    justifyContent: COMMON_CONSTANTS.FLEX.SPACE_BETWEEN,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    paddingBottom: COMMON_CONSTANTS.SIZE.SIZE_2,
  },
  timelineLabel: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_18,
  },
  clockOutButton: {
    backgroundColor: COLORS.CLOCK_OUT_BUTTON_BACKGROUND,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_16,
    marginHorizontal: COMMON_CONSTANTS.SIZE.SIZE_30,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_20,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_8,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
  },
  clockOutButtonText: {
    color: COLORS.WHITE,
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_20,
    fontFamily: FONTS.CLOCKWISE_BOLD,
  },
  timelineTime: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_18,
    minWidth: COMMON_CONSTANTS.SIZE.SIZE_60,
    textAlign: COMMON_CONSTANTS.ALIGN.RIGHT,
  },
  timelineClockLine: {
    width: COMMON_CONSTANTS.SIZE.SIZE_2,
    height: COMMON_CONSTANTS.SIZE.SIZE_60,
    backgroundColor: COLORS.BLACK,
    marginTop: COMMON_CONSTANTS.SIZE.SIZE_4,
    marginRight: COMMON_CONSTANTS.SIZE.SIZE_3,
    position: COMMON_CONSTANTS.POSITION.ABSOLUTE,
    top: COMMON_CONSTANTS.SIZE.SIZE_26,
  },
  timelineLine: {
    width: COMMON_CONSTANTS.SIZE.SIZE_2,
    height: COMMON_CONSTANTS.SIZE.SIZE_57,
    backgroundColor: COLORS.BLACK,
    marginTop: COMMON_CONSTANTS.SIZE.SIZE_4,
    position: COMMON_CONSTANTS.POSITION.ABSOLUTE,
    marginRight: COMMON_CONSTANTS.SIZE.SIZE_2,
    top: COMMON_CONSTANTS.SIZE.SIZE_26,
  },
  modalContainer: {
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
    justifyContent: COMMON_CONSTANTS.FLEX.FLEX_START,

    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },
  modalHeader: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    paddingBottom: COMMON_CONSTANTS.SIZE.SIZE_15,
    borderBottomWidth: 0.2,
    borderBottomColor: COLORS.HEADER_BORDER_COLOR,
  },
  headerIcon: {
    paddingTop: COMMON_CONSTANTS.SIZE.SIZE_22,
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_15,
  },
  modalTitle: {
    fontSize: FONT_SIZE.SIZE_20,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    paddingTop: COMMON_CONSTANTS.SIZE.SIZE_20,
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_15,
  },
  noteInput: {
    marginVertical: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_20,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    fontSize: FONT_SIZE.SIZE_18,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  noteContainer: {
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
    justifyContent: COMMON_CONSTANTS.FLEX.SPACE_BETWEEN,
  },
});

export default styles;

export const iconColour = mode === MODE.DARK ? COLORS.WHITE : COLORS.BLACK;
