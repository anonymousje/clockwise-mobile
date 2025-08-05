import { Appearance, StyleSheet } from 'react-native';
import { COLORS, FONTS, MODE } from '../../../constants/theme';
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
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    flexDirection: 'row',
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_40,
  },
  timelineClockItem: {
    flexDirection: 'row',
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_40,
    marginLeft: COMMON_CONSTANTS.SIZE.SIZE_3,
  },
  timelineIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: COMMON_CONSTANTS.SIZE.SIZE_16,
  },
  timelineClockIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: COMMON_CONSTANTS.SIZE.SIZE_21,
    paddingRight: 2,
  },
  timelineContent: {
    height: COMMON_CONSTANTS.SIZE.SIZE_40,
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 2,
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
    alignItems: 'center',
  },
  clockOutButtonText: {
    color: COLORS.WHITE,
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_20,
    fontFamily: FONTS.CLOCKWISE_BOLD,
  },
  timelineTime: {
    color: '#8a9ba8',
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_18,
    minWidth: COMMON_CONSTANTS.SIZE.SIZE_60,
    textAlign: 'right',
  },
  timelineClockLine: {
    width: 2,
    height: COMMON_CONSTANTS.SIZE.SIZE_60,
    backgroundColor: COLORS.CLOCKWISE_PRIMARY_DARK,
    marginTop: 4,
    marginRight: 2,
    position: 'absolute',
    top: COMMON_CONSTANTS.SIZE.SIZE_24,
  },
  timelineLine: {
    width: 2,
    height: COMMON_CONSTANTS.SIZE.SIZE_57,
    backgroundColor: COLORS.CLOCKWISE_PRIMARY_DARK,
    marginTop: 4,
    position: 'absolute',
    marginRight: 2,
    top: COMMON_CONSTANTS.SIZE.SIZE_26,
  },
});

export default styles;
