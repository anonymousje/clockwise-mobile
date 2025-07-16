import { StyleSheet, Appearance } from 'react-native';
import { colors } from '../../theme';
import { fonts } from '../../theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      mode === 'dark' ? colors.BACKGROUND_DARKER_MODE : 'transparent',
  },

  header: {
    flexShrink: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 30,
    marginBottom: 20,
    backgroundColor: mode === 'dark' ? colors.BACKGROUND_DARK_MODE : 'white',
  },

  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    width: 120,
    height: 120,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: colors.CLOCKWISE_PRIMARY_DARK,

    marginVertical: 20,
  },

  staffAvatarText: {
    fontSize: 50,
    paddingBottom: 8,
    fontFamily: fonts.CLOCKWISE_BOLD,
    color: colors.TEXT_DARK_MODE,
  },

  buttonContainer: {
    alignItems: 'center',
  },

  NewPasswordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
  },

  showPassButton: {
    color:
      mode === 'dark'
        ? colors.CLOCKWISE_PRIMARY
        : colors.CLOCKWISE_PRIMARY_DARK,
  },
  closeButtonText: {
    fontSize: 22,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontWeight: 'bold',
  },

  formContainer: {
    backgroundColor: mode === 'dark' ? colors.BACKGROUND_DARK_MODE : 'white',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 24,
    paddingBottom: 30,
    height: '65%',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 100,
    elevation: 1,
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
    marginTop: 16,

    color: mode === 'dark' ? 'white' : '#222',
    fontSize: 16,
    fontFamily: fonts.CLOCKWISE_REGULAR,
  },

  button: {
    backgroundColor: colors.CLOCKWISE_PRIMARY,
    width: '90%',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 30,
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
});
