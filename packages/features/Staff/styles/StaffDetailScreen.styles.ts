import { Appearance, StyleSheet } from 'react-native';
import { colors, fonts, MODE } from '../../../constants/theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
  },

  editButtonContainer: {
    alignItems: 'flex-end',
    padding: 16,
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
  },

  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.CLOCKWISE_PRIMARY_DARK,
    borderRadius: 10,
    paddingHorizontal: 16,
  },

  editButtonText: {
    color: colors.BUTTON_TEXT,
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
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
  },

  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.CLOCKWISE_PRIMARY_DARK,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: colors.BUTTON_TEXT,
    fontSize: 50,
    paddingBottom: 10,
    fontFamily: fonts.CLOCKWISE_REGULAR,
  },

  staffDetails: {
    justifyContent: 'center',
    paddingBottom: 50,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
  },

  textContainer: {
    marginBottom: 20,
    paddingBottom: 10,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderBottomColor:
      mode === MODE.DARK
        ? colors.BORDER_COLOR_DARK_MODE
        : colors.BORDER_COLOR_LIGHT_MODE,
  },

  textHeader: {
    fontSize: 16,
    marginVertical: 4,
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontFamily: fonts.CLOCKWISE_BOLD,
  },

  text: {
    fontSize: 17,
    marginTop: 4,
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontFamily: fonts.CLOCKWISE_REGULAR,
  },

  deleteButton: {
    backgroundColor: colors.CLOCKWISE_PRIMARY,
  },

  deleteButtonText: {
    color: colors.BUTTON_TEXT,
  },

  editDetails: {
    justifyContent: 'center',
    paddingBottom: 50,
    paddingHorizontal: 16,

    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
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
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: 20,
    width: '100%',
    marginVertical: 30,
    paddingLeft: 5,
  },
});
export const editIconColor = colors.BUTTON_TEXT;
