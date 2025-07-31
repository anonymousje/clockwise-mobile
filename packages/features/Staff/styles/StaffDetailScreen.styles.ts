import { Appearance, StyleSheet } from 'react-native';
import {
  COLORS,
  FONTS,
  FONT_SIZE,
  HEIGHT,
  MODE,
} from '../../../constants/theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
  },

  editButtonContainer: {
    alignItems: 'flex-end',
    padding: 16,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },

  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.CLOCKWISE_PRIMARY_DARK,
    borderRadius: 10,
    paddingHorizontal: 16,
  },

  editButtonText: {
    color: COLORS.BUTTON_TEXT,
    padding: 10,
  },

  scrollContainer: {
    gap: 10,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 20,
    paddingBottom: 40,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },

  avatarContainer: {
    width: 120,
    height: HEIGHT.LARGE,
    borderRadius: 60,
    backgroundColor: COLORS.CLOCKWISE_PRIMARY_DARK,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: COLORS.BUTTON_TEXT,
    fontSize: FONT_SIZE.SIZE_50,
    paddingBottom: 10,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },

  staffDetails: {
    justifyContent: 'center',
    paddingBottom: 50,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },

  textContainer: {
    marginBottom: 20,
    paddingBottom: 10,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor:
      mode === MODE.DARK
        ? COLORS.BORDER_COLOR_DARK_MODE
        : COLORS.BORDER_COLOR_LIGHT_MODE,
  },

  textHeader: {
    fontSize: FONT_SIZE.SIZE_18,
    marginVertical: 4,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontFamily: FONTS.CLOCKWISE_BOLD,
  },

  text: {
    fontSize: FONT_SIZE.SIZE_18,
    marginTop: 4,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },

  deleteButton: {
    backgroundColor: COLORS.CLOCKWISE_PRIMARY,
  },

  deleteButtonText: {
    color: COLORS.BUTTON_TEXT,
  },

  editDetails: {
    justifyContent: 'center',
    paddingBottom: 50,
    paddingHorizontal: 16,

    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
  },

  error: {
    color: 'red',
    marginLeft: 8,
  },

  pickersContainer: {
    marginTop: 20,
  },

  pickerItem: {
    width: '100%',
  },

  picker: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 20,
    width: '100%',
    marginVertical: 30,
    paddingLeft: 5,
  },
});
export const editIconColor = COLORS.BUTTON_TEXT;
