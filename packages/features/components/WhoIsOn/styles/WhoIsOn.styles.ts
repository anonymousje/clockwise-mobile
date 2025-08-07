import { Appearance, StyleSheet } from 'react-native';
import { COLORS, FONTS, MODE } from '../../../../constants/theme';
import COMMON_CONSTANTS from '../../../../constants/CommonConstants';

const mode = Appearance.getColorScheme();
const styles = StyleSheet.create({
  container: {
    justifyContent: COMMON_CONSTANTS.FLEX.SPACE_EVENLY,
  },
  usersHorizontalContainer: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    justifyContent: COMMON_CONSTANTS.FLEX.FLEX_START,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_10,
    gap: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  widgetHeaderContainer: {
    flexGrow: COMMON_CONSTANTS.SIZE.SIZE_1,
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    gap: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_10,
    borderBottomWidth: 0.6,
    borderBottomColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
  },
  widgetListItem: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_16,
  },
  avatarIconContainer: {
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_50,
    height: COMMON_CONSTANTS.SIZE.SIZE_40,
    width: COMMON_CONSTANTS.SIZE.SIZE_40,
    backgroundColor: COLORS.CLOCKWISE_PRIMARY,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
  },
  widgetListContainer: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
  },
  avatarText: {
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_17,
    color: COLORS.WHITE,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },
  nameContainer: {
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_10,
    paddingRight: COMMON_CONSTANTS.SIZE.SIZE_10,
  },
  nameText: {
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_16,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  iconStyle: {
    paddingTop: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  title: {
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_22,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  bottomBorder: {
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_15,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    borderTopWidth: 1,
    borderTopColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
  },
  bottomText: {
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_18,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: COLORS.CLOCKWISE_PRIMARY,
  },
  modalContainer: {
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
  },
  closeModalText: {
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_18,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: COLORS.WHITE,
  },
  modalAvatarIconContainer: {
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_50,
    height: COMMON_CONSTANTS.SIZE.SIZE_50,
    width: COMMON_CONSTANTS.SIZE.SIZE_50,
    backgroundColor: COLORS.CLOCKWISE_PRIMARY,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
  },
  modalListItem: {
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_18,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_20,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    borderBottomWidth: COMMON_CONSTANTS.SIZE.SIZE_1,
  },
  modalDetailsContainer: {
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    justifyContent: COMMON_CONSTANTS.FLEX.SPACE_BETWEEN,
    alignItems: COMMON_CONSTANTS.FLEX.CENTER,
    paddingRight: COMMON_CONSTANTS.SIZE.SIZE_20,
  },
  modalNameText: {
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_18,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  modalAvatarText: {
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_20,
    color: COLORS.WHITE,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },
  modalNameContainer: {
    flex: 1,
    justifyContent: COMMON_CONSTANTS.FLEX.CENTER,
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_20,
    gap: COMMON_CONSTANTS.SIZE.SIZE_5,
    paddingBottom: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  modalShiftText: {
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_16,
    opacity: 0.7,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  modalHeaderContainer: {
    flexShrink: COMMON_CONSTANTS.SIZE.SIZE_1,
    flexDirection: COMMON_CONSTANTS.FLEX.ROW,
    justifyContent: COMMON_CONSTANTS.FLEX.SPACE_BETWEEN,
    borderBottomWidth: 0.3,
    borderBottomColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_18,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_24,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },
  noDataText: {
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_16,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    textAlign: COMMON_CONSTANTS.ALIGN.CENTER,
    marginTop: COMMON_CONSTANTS.SIZE.SIZE_40,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_40,
  },
  modalTitle: {
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_21,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  modalCloseText: {
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_18,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  clockInTimeText: {
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_20,
    color: COLORS.CLOCKWISE_PRIMARY_DARK,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },
});

export default styles;
