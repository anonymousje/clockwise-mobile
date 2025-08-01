import { Appearance, StyleSheet } from 'react-native';
import { COLORS, FONTS, MODE } from '../../../../constants/theme';

const mode = Appearance.getColorScheme();
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
  },
  widgetHeaderContainer: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingLeft: 10,
    paddingVertical: 10,
    borderBottomWidth: 0.6,
    borderBottomColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
  },
  widgetListItem: {
    flexGrow: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 12,
  },
  avatarIconContainer: {
    borderRadius: 50,
    height: 40,
    width: 40,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  widgetListContainer: {},
  avatarText: {
    fontSize: 17,
    color: COLORS.WHITE,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  nameText: {
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    fontSize: 16,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  iconStyle: {
    paddingTop: 5,
  },
  title: {
    fontSize: 21,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === 'dark' ? '#fff' : '#000',
  },
  bottomBorder: {
    paddingVertical: 15,
    marginTop: 10,
    alignItems: 'center',
    borderTopWidth: 0.6,
    borderTopColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
  },
  bottomText: {
    fontSize: 18,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: COLORS.CLOCKWISE_PRIMARY,
  },
  modalContainer: {
    flex: 1,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
  },
  closeModalText: {
    fontSize: 18,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: COLORS.WHITE,
  },
  modalAvatarIconContainer: {
    borderRadius: 50,
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalListItem: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 30,
    alignItems: 'center',
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },
  modalDetailsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
  },
  modalNameText: {
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    fontSize: 20,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  modalAvatarText: {
    fontSize: 20,
    color: COLORS.WHITE,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },
  modalNameContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    gap: 5,
    paddingBottom: 5,
  },
  modalShiftText: {
    fontSize: 18,
    opacity: 0.7,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  modalHeaderContainer: {
    flexShrink: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
    paddingHorizontal: 10,
    paddingVertical: 18,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },
  modalTitle: {
    fontSize: 22,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },
  modalCloseText: {
    fontSize: 18,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },

  clockInTimeText: {
    fontSize: 20,
    color: COLORS.CLOCKWISE_PRIMARY_DARK,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },
});

export default styles;
