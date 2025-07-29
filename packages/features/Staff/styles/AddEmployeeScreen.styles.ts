import { StyleSheet, Appearance } from 'react-native';
import { COLORS, FONT_SIZE, MODE } from '../../../constants/theme';
import { FONTS } from '../../../constants/theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      mode === MODE.DARK ? COLORS.BACKGROUND_DARKER_MODE : 'transparent',
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
    fontSize: FONT_SIZE.SIZE_24,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    borderBottomWidth: 1,
    borderBottomColor:
      mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    paddingBottom: 7,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
  },

  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.CLOCKWISE_PRIMARY_DARK,
    borderRadius: 10,
    paddingHorizontal: 16,
  },

  editButtonText: {
    color: COLORS.BUTTON_TEXT,
    padding: 10,
  },

  formContainer: {
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
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
    fontSize: FONT_SIZE.ERROR,
    marginBottom: 8,
    marginLeft: 4,
  },

  linkContainer: {
    alignSelf: 'flex-start',
    marginTop: 30,
    paddingHorizontal: 15,
  },

  linkText: {
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
  },

  linkButton: {
    color: COLORS.CLOCKWISE_PRIMARY,
  },

  buttonContainer: {
    alignItems: 'center',
  },

  button: {
    backgroundColor: COLORS.CLOCKWISE_PRIMARY,
    width: '90%',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 30,
    shadowColor: COLORS.CLOCKWISE_PRIMARY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },

  buttonText: {
    color: COLORS.BUTTON_TEXT,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    fontSize: FONT_SIZE.SIZE_18,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
