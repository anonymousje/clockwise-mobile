import { StyleSheet, Appearance } from 'react-native';
import { colors, MODE } from '../../../constants/theme';
import { fonts } from '../../../constants/theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      mode === MODE.DARK ? colors.BACKGROUND_DARKER_MODE : 'transparent',
  },

  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    paddingVertical: 20,
    alignItems: 'center',
  },

  editButtonContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: 'transparent',
  },

  title: {
    fontSize: 23,
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    borderBottomWidth: 1,
    borderBottomColor:
      mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    paddingBottom: 7,
    fontFamily: fonts.CLOCKWISE_REGULAR,
  },

  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.CLOCKWISE_PRIMARY_DARK,
    borderRadius: 10,
    paddingHorizontal: 16,
  },

  editButtonText: {
    color: 'white',
    padding: 10,
  },

  formContainer: {
    backgroundColor: mode === MODE.DARK ? colors.BACKGROUND_DARK_MODE : 'white',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 24,
    paddingBottom: 40,
    height: '70%',
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

  linkContainer: {
    alignSelf: 'flex-start',
    marginTop: 30,
    paddingHorizontal: 15,
  },

  linkText: {
    fontSize: 17,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
  },

  linkButton: {
    color: colors.CLOCKWISE_PRIMARY,
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
