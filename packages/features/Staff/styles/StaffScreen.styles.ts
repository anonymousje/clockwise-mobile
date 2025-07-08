import { StyleSheet, Appearance } from 'react-native';
import { colors } from '../../theme';
import { fonts } from '../../theme';

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

  scrollViewContent: {
    paddingBottom: 24,
  },

  closeButtonText: {
    fontSize: 22,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontWeight: 'bold',
  },

  modalContent: {
    backgroundColor: mode === 'dark' ? colors.BACKGROUND_DARK_MODE : 'white',
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },

  modalHeader: {
    fontSize: 22,
    fontFamily: fonts.CLOCKWISE_BOLD,
    color: colors.CLOCKWISE_PRIMARY,
    marginBottom: 16,
    textAlign: 'center',
  },

  closeButton: {
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    borderRadius: 16,
    width: 32,
    height: 32,
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },

  inputText: {
    color: mode === 'dark' ? 'white' : '#222',
    fontSize: 16,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    backgroundColor: mode === 'dark' ? '#222' : '#f5f5f5',
    borderRadius: 10,
    borderWidth: 0,
    padding: 12,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  picker: {
    backgroundColor: mode === 'dark' ? '#222' : '#f5f5f5',
    borderRadius: 10,
    marginBottom: 16,
    color: mode === 'dark' ? 'white' : '#222',
    fontSize: 16,
    fontFamily: fonts.CLOCKWISE_REGULAR,
  },

  button: {
    backgroundColor: colors.CLOCKWISE_PRIMARY,
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 8,
    shadowColor: colors.CLOCKWISE_PRIMARY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },

  buttonText: {
    color: 'white',
    fontFamily: fonts.CLOCKWISE_BOLD,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 1,
  },

  errorMsg: {
    color: 'red',
    fontSize: 13,
    marginBottom: 8,
    marginLeft: 4,
  },

  divider: {
    height: 1,
    backgroundColor: mode === 'dark' ? '#333' : '#e0e0e0',
    marginVertical: 8,
    borderRadius: 1,
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

  staffSectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 12,
    color: colors.CLOCKWISE_PRIMARY,
    letterSpacing: 0.5,
  },

  staffItem: {
    backgroundColor: mode === 'dark' ? '#222' : '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: mode === 'dark' ? '#333' : '#eee',
  },

  staffName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: colors.CLOCKWISE_PRIMARY,
    marginBottom: 2,
  },

  staffDetails: {
    fontSize: 15,
    color: mode === 'dark' ? '#ccc' : '#444',
    marginBottom: 2,
  },

  statusBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 8,
    marginTop: 6,
    backgroundColor: '#eee',
  },

  statusActivated: {
    backgroundColor: '#d1f5e0',
  },

  statusDeactivated: {
    backgroundColor: '#ffe0e0',
  },
  statusText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
});
