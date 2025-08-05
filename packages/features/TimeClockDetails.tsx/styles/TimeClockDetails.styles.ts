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
    paddingTop: 20,
  },
  workLabelContainer: {
    borderBottomWidth: 0.2,
    padding: 30,
  },
  workLabel: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: 16,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    opacity: 0.5,
    marginBottom: 8,
  },
  workDuration: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    fontSize: 48,
  },
  clockTimesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
    marginTop: 50,
    paddingHorizontal: 30,
  },
  clockTimeSection: {
    flex: 1,
  },
  clockLabel: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: 20,
    opacity: 0.5,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginBottom: 10,
  },
  clockTime: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: 28,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginBottom: 8,
  },
  clockDate: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: 16,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    opacity: 0.5,
  },
  timelineContainer: {
    flex: 1,
    marginBottom: 20,
    paddingHorizontal: 30,
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  timelineClockItem: {
    flexDirection: 'row',
    marginBottom: 40,
    marginLeft: 3,
  },
  timelineIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  timelineClockIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 21,
  },

  timelineContent: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 2,
  },
  timelineLabel: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    fontSize: 18,
  },
  clockOutButton: {
    backgroundColor: '#ef4444',
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  clockOutButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  timelineTime: {
    color: '#8a9ba8',
    fontSize: 18,
    minWidth: 60,
    textAlign: 'right',
  },
  timelineClockLine: {
    width: 2,
    height: 60,
    backgroundColor: COLORS.CLOCKWISE_PRIMARY_DARK,
    marginTop: 4,
    position: 'absolute',
    top: 24,
  },
  timelineLine: {
    width: 2,
    height: 57,
    backgroundColor: COLORS.CLOCKWISE_PRIMARY_DARK,
    marginTop: 4,
    position: 'absolute',
    marginRight: 2,
    top: 26,
  },
});

export default styles;
