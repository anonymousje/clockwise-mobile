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

  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  staffAvatarText: {
    fontSize: 50,
    paddingBottom: 8,
    fontFamily: fonts.CLOCKWISE_BOLD,
    color: colors.TEXT_DARK_MODE,
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

  errorMsg: {
    color: 'red',
    fontSize: 13,
    marginBottom: 8,
    marginLeft: 4,
  },

  buttonContainer: {
    alignItems: 'center',
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
});
