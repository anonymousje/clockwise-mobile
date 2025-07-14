import { StyleSheet, Appearance } from 'react-native';
import { colors } from '../../theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  searchInput: {
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    borderRadius: 10,
    padding: 12,
    marginTop: 40,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
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
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 24,
    right: 24,
    shadowColor: colors.CLOCKWISE_PRIMARY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    paddingBottom: 10,
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

  staffItem: {
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
});
