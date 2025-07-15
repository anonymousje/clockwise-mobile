import { StyleSheet, Appearance } from 'react-native';
import { colors, fonts } from '../../theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  searchInput: {
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    borderRadius: 10,
    padding: 12,
    paddingLeft: 15,
    marginTop: 40,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
  },

  filterButton: {
    backgroundColor: colors.CLOCKWISE_PRIMARY,
    alignItems: 'center',
    borderRadius: 10,
    padding: 12,
    marginTop: 50,
  },

  filterText: {
    fontSize: 20,
    color: 'white',
    fontFamily: fonts.CLOCKWISE_BOLD,
  },
  searchIcon: {
    color:
      mode === 'dark'
        ? colors.CLOCKWISE_PRIMARY
        : colors.CLOCKWISE_PRIMARY_DARK,
    paddingLeft: 10,
    paddingVertical: 10,
  },

  searchRow: {
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

  showFilterButton: {
    color:
      mode === 'dark'
        ? colors.CLOCKWISE_PRIMARY
        : colors.CLOCKWISE_PRIMARY_DARK,
    paddingHorizontal: 12,
  },

  inputSearchContainer: {
    flexDirection: 'row',
  },

  inputSearch: {
    fontSize: 17,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    paddingVertical: 14,
    paddingLeft: 10,
  },
  scrollContainer: {
    flex: 1,

    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
    padding: 16,
  },

  buttonContainer: {
    alignItems: 'flex-end',
  },

  addButtonText: {
    fontSize: 40,
    fontWeight: '400',
    color: 'white',
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

  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginVertical: '38%',
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
  },

  staffSectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
    color: colors.CLOCKWISE_PRIMARY,
    letterSpacing: 0.5,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 4,
    elevation: 1,
    borderWidth: 1,
    borderColor: colors.CLOCKWISE_PRIMARY,
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

  staffDetails: {
    fontSize: 17,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    opacity: 0.6,
    paddingLeft: 30,
  },

  infoContainerDetails: {
    fontSize: 18,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    paddingLeft: 30,
  },

  info: {
    width: '100%',
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    gap: 6,
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor:
      mode === 'dark'
        ? colors.TEXT_DARK_LIGHTER_MODE
        : colors.TEXT_LIGHT_LIGHTER_MODE,
  },

  modalContainer: {
    flex: 1,
    marginVertical: 200,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARK_FORMS
        : colors.BACKGROUND_LIGHT_FORMS,
  },
});

export const placeholderColor =
  mode === 'dark'
    ? colors.TEXT_DARK_LIGHTER_MODE
    : colors.TEXT_LIGHT_LIGHTER_MODE;
