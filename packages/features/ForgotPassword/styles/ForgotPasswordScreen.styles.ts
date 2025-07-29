import { StyleSheet, Appearance } from 'react-native';
import {
  colors,
  fonts,
  MODE,
  FONT_SIZE,
  HEIGHT,
} from '../../../constants/theme';

const mode = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },

  successMsg: {
    color: colors.CLOCKWISE_PRIMARY,
    fontSize: FONT_SIZE.SMALL,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    marginTop: 20,
    textAlign: 'center',
  },

  form: {
    flex: 1,
  },

  errorMsg: {
    color: 'red',
    marginBottom: 10,
  },

  inputPassword: {
    fontSize: FONT_SIZE.SMALL,
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    paddingVertical: 16,
  },

  NewPasswordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    borderRadius: 8,
    paddingHorizontal: 14,
  },

  ConfirmPasswordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    borderRadius: 8,
    paddingHorizontal: 14,
    marginVertical: 20,
  },

  buttonContainer: {
    width: '100%',
  },

  loader: {
    marginTop: 20,
  },

  button: {
    backgroundColor: colors.CLOCKWISE_PRIMARY,
    paddingVertical: 16,
    borderRadius: 8,
    fontFamily: fonts.CLOCKWISE_BOLD,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: colors.BUTTON_TEXT,
    fontSize: FONT_SIZE.SMALL,
    fontWeight: '600',
  },

  header: {
    width: '100%',
    fontSize: FONT_SIZE.LARGE,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    fontWeight: '300',
    color:
      mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.BACKGROUND_LIGHT_MODE,
    marginBottom: 40,
    lineHeight: 34,
    paddingBottom: 20,
  },

  popUpBoxText: {
    color:
      mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.BACKGROUND_LIGHT_MODE,
    fontSize: FONT_SIZE.MEDIUM,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    textAlign: 'center',
  },

  showPassButton: {
    color:
      mode === MODE.DARK
        ? colors.CLOCKWISE_PRIMARY
        : colors.CLOCKWISE_PRIMARY_DARK,
  },

  input: {
    width: '100%',
    height: HEIGHT.SMALL,
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: FONT_SIZE.SMALL,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    marginBottom: 20,
    paddingBottom: 16,
  },

  popupBox: {
    width: '80%',
    height: '20%',
    justifyContent: 'center',
    gap: 5,
    backgroundColor:
      mode === MODE.DARK
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    borderRadius: 4,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },

  popupButton: {
    marginTop: 20,
    backgroundColor: colors.CLOCKWISE_PRIMARY,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },

  popupButtonText: {
    color: colors.BUTTON_TEXT,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.SMALL,
  },

  rulesContainer: {
    marginBottom: 10,
  },

  rulesText: {
    color: mode === MODE.DARK ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontSize: FONT_SIZE.X_SMALL,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    marginBottom: 5,
    lineHeight: 20,
    paddingLeft: 10,
  },
});

export const modeColor =
  mode === MODE.LIGHT ? colors.TEXT_LIGHT_MODE : colors.TEXT_DARK_MODE;

export default styles;
