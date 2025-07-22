import { StyleSheet, Appearance } from 'react-native';
import { colors, fonts } from '../../theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    flex: 1,

    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
    padding: 16,
  },

  searchContainer: {
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    borderRadius: 20,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  searchInputContainer: {
    flexDirection: 'row',
  },

  searchIcon: {
    color:
      mode === 'dark'
        ? colors.CLOCKWISE_PRIMARY
        : colors.CLOCKWISE_PRIMARY_DARK,
    paddingLeft: 10,
    paddingVertical: 10,
  },

  searchInput: {
    fontSize: 17,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    paddingVertical: 14,
    paddingLeft: 10,
  },

  filterIcon: {
    color:
      mode === 'dark'
        ? colors.CLOCKWISE_PRIMARY
        : colors.CLOCKWISE_PRIMARY_DARK,
    paddingLeft: 20,
    paddingVertical: 10,
    paddingRight: 20,
  },

  staffSectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
    color: colors.CLOCKWISE_PRIMARY,
    letterSpacing: 0.5,
  },

  staffItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
    padding: 16,
    marginBottom: 30,
    borderBottomWidth: 1,
  },

  staffAvatar: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_ICONS_DARK_MODE
        : colors.BACKGROUND_ICONS_LIGHT_MODE,
  },

  staffAvatarText: {
    fontSize: 25,
    fontFamily: fonts.CLOCKWISE_BOLD,
    color: colors.TEXT_DARK_MODE,
  },

  staffName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.CLOCKWISE_PRIMARY,
    marginBottom: 2,
  },

  position: {
    fontSize: 17,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    opacity: 0.6,
  },

  buttonContainer: {
    alignItems: 'flex-end',
  },

  addButton: {
    backgroundColor: colors.CLOCKWISE_PRIMARY,
    width: 60,
    height: 60,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    right: 24,
    shadowColor: colors.CLOCKWISE_PRIMARY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
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
    marginVertical: 200,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor:
      mode === 'dark'
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
      mode === 'dark'
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    borderRadius: 10,
    paddingLeft: 15,
    marginTop: 20,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
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
  mode === 'dark'
    ? colors.TEXT_DARK_LIGHTER_MODE
    : colors.TEXT_LIGHT_LIGHTER_MODE;
