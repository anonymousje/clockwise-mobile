import { StyleSheet, Appearance } from 'react-native';
import { colors } from '../../theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',

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
    width: 60,
    height: 60,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: colors.CLOCKWISE_PRIMARY,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 100,
    shadowRadius: 100,
    elevation: 10,
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
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 4,
    elevation: 1,
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
