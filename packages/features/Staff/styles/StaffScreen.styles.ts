import { StyleSheet, Appearance } from 'react-native';
import { colors, fonts, MODE } from '../../../constants/theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    flex: 1,

    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
  },

  searchContainer: {
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    borderRadius: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },

  searchInputContainer: {
    flexDirection: 'row',
  },

  searchIcon: {
    color:
      mode === MODE.DARK
        ? colors.CLOCKWISE_PRIMARY
        : colors.CLOCKWISE_PRIMARY_DARK,
    paddingLeft: 10,
    paddingVertical: 10,
  },

  searchInput: {
    fontSize: 17,
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    paddingVertical: 14,
    paddingLeft: 10,
  },

  filterIcon: {
    color:
      mode === MODE.DARK
        ? colors.CLOCKWISE_PRIMARY
        : colors.CLOCKWISE_PRIMARY_DARK,
    paddingLeft: 20,
    paddingVertical: 10,
    paddingRight: 20,
  },

  headerContainer: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.CLOCKWISE_PRIMARY,
  },

  staffSectionHeader: {
    fontSize: 19,
    fontFamily: fonts.CLOCKWISE_BOLD,
    marginTop: 24,
    marginBottom: 12,
    color: colors.CLOCKWISE_PRIMARY,
    letterSpacing: 0.5,
    marginLeft: 20,
  },

  shadowSeparator: {
    height: 0.5,
    marginBottom: 12,
    borderColor: colors.CLOCKWISE_PRIMARY,
    borderWidth: 0.5,
    borderRadius: 6,
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },

  staffItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor:
      mode === MODE.DARK
        ? colors.BORDER_COLOR_DARK_MODE
        : colors.BORDER_COLOR_LIGHT_MODE,
    paddingLeft: 20,
  },

  staffAvatar: {
    width: 50,
    height: 50,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },

  staffAvatarText: {
    fontSize: 20,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    color: colors.TEXT_DARK_MODE,
  },

  staffName: {
    fontSize: 19,
    fontFamily: fonts.CLOCKWISE_BOLD,
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    marginBottom: 2,
  },

  position: {
    fontSize: 17,
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    opacity: 0.6,
  },

  buttonContainer: {
    alignItems: 'flex-end',
  },

  addButton: {
    backgroundColor: '#5DC036',
    width: 60,
    height: 60,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: 24,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 7,
    paddingBottom: 3,
  },

  addButtonText: {
    fontSize: 40,
    fontWeight: '400',
    color: 'white',
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    marginVertical: 170,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARK_FORMS
        : colors.BACKGROUND_LIGHT_FORMS,
  },

  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  },

  modalCloseButton: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },

  modalCloseButtonText: {
    fontSize: 16,
    color: colors.CLOCKWISE_PRIMARY,
    fontFamily: fonts.CLOCKWISE_REGULAR,
  },

  modalContent: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.CLOCKWISE_PRIMARY,
    textAlign: 'center',
  },

  filterInput: {
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 20,
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
  },

  filterButton: {
    backgroundColor: colors.CLOCKWISE_PRIMARY,
    alignItems: 'center',
    borderRadius: 10,
    padding: 12,
    marginTop: 50,
    marginHorizontal: 20,
  },

  filterText: {
    fontSize: 20,
    color: 'white',
    fontFamily: fonts.CLOCKWISE_BOLD,
  },
});

export const placeholderColor =
  mode === MODE.DARK
    ? colors.TEXT_DARK_LIGHTER_MODE
    : colors.TEXT_LIGHT_LIGHTER_MODE;
