import { StyleSheet, Appearance } from 'react-native';
import {
  COLORS,
  FONTS,
  MODE,
  FONT_SIZE,
  HEIGHT,
} from '../../../constants/theme';

const mode = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARK_MODE
        : COLORS.BACKGROUND_LIGHT_MODE,
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
    color: COLORS.CLOCKWISE_PRIMARY,
    fontSize: FONT_SIZE.SIZE_18,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
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
    fontSize: FONT_SIZE.SIZE_18,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    paddingVertical: 16,
  },

  NewPasswordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
    borderRadius: 8,
    paddingHorizontal: 14,
  },

  ConfirmPasswordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
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
    backgroundColor: COLORS.CLOCKWISE_PRIMARY,
    paddingVertical: 16,
    borderRadius: 8,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: COLORS.BUTTON_TEXT,
    fontSize: FONT_SIZE.SIZE_18,
    fontWeight: '600',
  },

  header: {
    width: '100%',
    fontSize: FONT_SIZE.SIZE_30,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    fontWeight: '300',
    color:
      mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.BACKGROUND_LIGHT_MODE,
    marginBottom: 40,
    lineHeight: 34,
    paddingBottom: 20,
  },

  popUpBoxText: {
    color:
      mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.BACKGROUND_LIGHT_MODE,
    fontSize: FONT_SIZE.SIZE_24,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    textAlign: 'center',
  },

  showPassButton: {
    color:
      mode === MODE.DARK
        ? COLORS.CLOCKWISE_PRIMARY
        : COLORS.CLOCKWISE_PRIMARY_DARK,
  },

  input: {
    width: '100%',
    height: HEIGHT.SMALL,
    backgroundColor:
      mode === MODE.DARK
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: FONT_SIZE.SIZE_18,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
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
        ? COLORS.BACKGROUND_DARKER_MODE
        : COLORS.BACKGROUND_LIGHTER_MODE,
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
    backgroundColor: COLORS.CLOCKWISE_PRIMARY,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },

  popupButtonText: {
    color: COLORS.BUTTON_TEXT,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    fontWeight: 'bold',
    fontSize: FONT_SIZE.SIZE_18,
  },

  rulesContainer: {
    marginBottom: 10,
  },

  rulesText: {
    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,
    fontSize: FONT_SIZE.SIZE_15,
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    marginBottom: 5,
    lineHeight: 20,
    paddingLeft: 10,
  },
});

export const modeColor =
  mode === MODE.LIGHT ? COLORS.TEXT_LIGHT_MODE : COLORS.TEXT_DARK_MODE;

export default styles;
