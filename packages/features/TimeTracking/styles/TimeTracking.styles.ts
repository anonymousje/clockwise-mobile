import { Appearance, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONT_SIZE, MODE } from '../../../constants/theme';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';

const mode = Appearance.getColorScheme();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND_DARKER_MODE,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    padding: 20,
    paddingTop: 35,
  },
  filterIconStyle: {
    paddingTop: 5,
  },
  headerText: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: 20,
    fontFamily: FONTS.CLOCKWISE_BOLD,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingBottom: 5,
  },
  timeEntryCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.BACKGROUND_DARK_MODE,
    borderRadius: 8,
    marginBottom: 20,
    overflow: 'hidden',
  },
  dateSection: {
    width: '20%',
    marginVertical: 20,
    alignItems: 'center',
    borderRightWidth: 3,
    borderColor: '#F39C12',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  dayText: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_BOLD,
  },
  dateText: {
    color: COLORS.WHITE,
    fontSize: FONT_SIZE.SIZE_30,
    fontFamily: FONTS.CLOCKWISE_BOLD,
  },
  detailsSection: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  titleRow: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    color: COLORS.TEXT_DARK_MODE,
    fontSize: FONT_SIZE.SIZE_20,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    marginBottom: 8,
  },
  cardApproveButton: {
    alignSelf: 'center',
    padding: 5,
    elevation: 10,
  },
  approveText: {
    color: COLORS.GREEN,
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    alignSelf: 'center',
  },
  timeText: {
    color: COLORS.TEXT_DARK_MODE,
    fontSize: FONT_SIZE.SIZE_17,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginBottom: 4,
  },
  roleText: {
    color: COLORS.TEXT_DARK_MODE,
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginBottom: 4,
  },
  statusText: {
    color: '#F39C12',
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },
  buttonContainer: {
    flexDirection: 'row',

    gap: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_5,
    justifyContent: 'center',
    marginTop: 'auto',
  },
  unapproveButton: {
    width: '50%',
    backgroundColor: COLORS.RED,
    alignItems: 'center',
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_12,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  approveButton: {
    width: '50%',
    backgroundColor: COLORS.GREEN,
    alignItems: 'center',
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_12,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  buttonText: {
    fontFamily: FONTS.CLOCKWISE_BOLD,
    fontSize: FONT_SIZE.SIZE_17,
    color: 'white',
  },
});

export default styles;
