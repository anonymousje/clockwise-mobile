import { Appearance, StyleSheet } from 'react-native';
import { COLORS, FONTS, MODE } from '../../../../constants/theme';
import COMMON_CONSTANTS from '../../../../constants/CommonConstants';

const mode = Appearance.getColorScheme();
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
  },
  usersHorizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_10,
    gap: COMMON_CONSTANTS.SIZE.SIZE_5,
  },
  widgetHeaderContainer: {
    flexGrow: COMMON_CONSTANTS.SIZE.SIZE_1,
    flexDirection: 'row',
    alignItems: 'center',
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_16,
  },
  avatarIconContainer: {
    borderRadius: COMMON_CONSTANTS.SIZE.SIZE_50,
    height: COMMON_CONSTANTS.SIZE.SIZE_40,
    width: COMMON_CONSTANTS.SIZE.SIZE_40,
    backgroundColor: COLORS.CLOCKWISE_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  widgetListContainer: {
    flexDirection: 'row',
  },
  avatarText: {
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_17,
    color: COLORS.WHITE,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },
  nameContainer: {
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
    justifyContent: 'center',
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
    alignItems: 'center',
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalListItem: {
    flexDirection: 'row',
    paddingLeft: COMMON_CONSTANTS.SIZE.SIZE_18,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_20,
    alignItems: 'center',
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
    borderBottomWidth: COMMON_CONSTANTS.SIZE.SIZE_1,
  },
  modalDetailsContainer: {
    flex: COMMON_CONSTANTS.SIZE.SIZE_1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    justifyContent: 'center',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.4,
    borderBottomColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
    paddingHorizontal: COMMON_CONSTANTS.SIZE.SIZE_18,
    paddingVertical: COMMON_CONSTANTS.SIZE.SIZE_18,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },
  noDataText: {
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_16,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    textAlign: 'center',
    marginTop: COMMON_CONSTANTS.SIZE.SIZE_40,
    marginBottom: COMMON_CONSTANTS.SIZE.SIZE_40,
  },
  modalTitle: {
    fontSize: COMMON_CONSTANTS.SIZE.SIZE_22,
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
