import { StyleSheet, Appearance } from 'react-native';
import { colors, fonts } from '../../theme';

const mode = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor:
      mode === 'dark'
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
    fontSize: 16,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    marginTop: 20,
    textAlign: 'center',
  },
  form: {
    flex: 1,
  },
  errorMsg: {
    color: 'red',
  },
  inputPassword: {
    fontSize: 17,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    paddingVertical: 16,
  },
  NewPasswordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderBottomWidth: 1,
    borderBottomColor:
      mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
  },
  ConfirmPasswordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderBottomWidth: 1,
    borderBottomColor:
      mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    marginVertical: 20,
  },

  buttonContainer: {
    width: '100%',
  },

  button: {
    backgroundColor: colors.CLOCKWISE_PRIMARY,
    paddingVertical: 16,
    borderRadius: 8,
    fontFamily: fonts.CLOCKWISE_BOLD,
    alignItems: 'center',
    marginTop: 40,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

  header: {
    width: '100%',
    fontSize: 30,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    fontWeight: '300',
    color:
      mode === 'dark' ? colors.TEXT_DARK_MODE : colors.BACKGROUND_LIGHT_MODE,
    marginBottom: 40,
    lineHeight: 34,
    paddingBottom: 20,
  },
  popUpBoxText: {
    color:
      mode === 'dark' ? colors.TEXT_DARK_MODE : colors.BACKGROUND_LIGHT_MODE,
    fontSize: 16,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    textAlign: 'center',
  },
  showPassButton: {
    color: colors.CLOCKWISE_PRIMARY,
  },
  input: {
    width: '100%',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor:
      mode === 'dark' ? colors.TEXT_DARK_MODE : colors.BACKGROUND_LIGHT_MODE,
    fontSize: 17,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    color:
      mode === 'dark' ? colors.TEXT_DARK_MODE : colors.BACKGROUND_LIGHT_MODE,
    marginBottom: 20,
    paddingBottom: 16,
  },
  popupBox: {
    width: '70%',
    height: '20%',
    justifyContent: 'center',
    gap: 20,
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHT_MODE,
    borderRadius: 5,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  popupButton: {
    marginTop: 20,
    backgroundColor: colors.CLOCKWISE_PRIMARY,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 24,
  },
  popupButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
