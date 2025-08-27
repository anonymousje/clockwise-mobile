import { Appearance, StyleSheet } from 'react-native';
import { COLORS, FONTS, FONT_SIZE, MODE } from '../../../constants/theme';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';

const mode = Appearance.getColorScheme();
const styles = StyleSheet.create({
  container: {
    flex: COMMON_CONSTANTS.ONE,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
  },
  modalHeader: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    justifyContent: COMMON_CONSTANTS.FLEX.SPACE_BETWEEN,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    padding: COMMON_CONSTANTS.SIZE.SIZE_20,
    paddingTop: COMMON_CONSTANTS.SIZE.SIZE_20,
    borderBottomWidth: COMMON_CONSTANTS.ONE,
    borderBottomColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
    elevation: COMMON_CONSTANTS.SIZE.SIZE_2,
    shadowColor: COLORS.SHADOW_COLOR,
  },
  titleContainer: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    gap: COMMON_CONSTANTS.SIZE.SIZE_20,
  },
  backButton: {
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    paddingTop: COMMON_CONSTANTS.SIZE.SIZE_3,
  },
  loadingContainer: {
    flex: COMMON_CONSTANTS.ONE,
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    gap: COMMON_CONSTANTS.SIZE.SIZE_10,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },
  listLoadingContainer: {
    flex: COMMON_CONSTANTS.ONE,
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    gap: COMMON_CONSTANTS.SIZE.SIZE_10,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    backgroundColor:
      mode === MODE.DARK ? COLORS.TRANSPARENT_BLACK : COLORS.TRANSPARENT_WHITE,
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
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_20,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_5,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  timeEntryCard: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
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
  unapproveText: {
    color: COLORS.RED,
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    alignSelf: COMMON_CONSTANTS.ALIGN.CENTER,
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
  clearFilterText: {
    fontFamily: FONTS.CLOCKWISE_BOLD,
    fontSize: FONT_SIZE.SIZE_15,
    color: COLORS.CLOCKWISE_PRIMARY,
    paddingTop: COMMON_CONSTANTS.SIZE.SIZE_3,
  },
  picker: {
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    width: COMMON_CONSTANTS.PERCENTAGES.HUNDRED,
    marginTop: COMMON_CONSTANTS.SIZE.SIZE_30,
    paddingBottom: COMMON_CONSTANTS.SIZE.SIZE_20,
  },
  searchInputContainer: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
  },
  searchIcon: {
    color:
      mode === MODE.DARK
        ? COLORS.CLOCKWISE_PRIMARY
        : COLORS.CLOCKWISE_PRIMARY_DARK,
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_10,
  },
  searchContainer: {
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_20,
    marginVertical: COMMON_CONSTANTS.SIZE.SIZE_10,
  },
  searchInput: {
    flex: COMMON_CONSTANTS.ONE,
    fontSize: FONT_SIZE.SIZE_20,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_14,
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingRight: COMMON_CONSTANTS.SIZE.SIZE_15,
  },
  filterInput: {
    flex: COMMON_CONSTANTS.ONE,
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_1,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },
  modalContent: {
    justifyContent: COMMON_CONSTANTS.FLEX.SPACE_BETWEEN,
    flex: COMMON_CONSTANTS.ONE,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_20,
  },
  filterModalContainer: {
    flex: COMMON_CONSTANTS.ONE,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },
  clearFilterButton: {
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  filtersContainer: {
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingTop: COMMON_CONSTANTS.SIZE.SIZE_10,
  },
  sectionTitle: {
    fontSize: FONT_SIZE.SIZE_18,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_20,
    textAlign: COMMON_CONSTANTS.FLEX.CENTER,
  },
  filterGroup: {
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_24,
  },
  filterLabel: {
    fontSize: FONT_SIZE.SIZE_17,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_15,
    marginLeft: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  pickerContainer: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_12,
    borderWidth: COMMON_CONSTANTS.ONE,
    borderColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
    elevation: 2,
    shadowColor: COLORS.SHADOW_COLOR,
  },
  pickerIcon: {
    marginLeft: COMMON_CONSTANTS.SIZE.SIZE_15,
    marginRight: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  modalButtonContainer: {
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_20,
    paddingBottom: COMMON_CONSTANTS.SIZE.SIZE_20,
    marginTop: COMMON_CONSTANTS.SIZE.SIZE_10,
  },
});

export default styles;
