import { StyleSheet, Appearance } from 'react-native';
import { colors } from '../../../theme';
import { fonts } from '../../../theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  inputField: {
    marginTop: 60,
  },

  input: {
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontSize: 16,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
    borderRadius: 10,
    borderWidth: 0,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },

  inputError: {
    borderColor: 'red',
  },

  inputFocused: {
    borderColor: colors.CLOCKWISE_PRIMARY,
    borderWidth: 2,
  },

  errorMsg: {
    color: 'red',
    fontSize: 13,
    marginBottom: 2,
    marginLeft: 4,
  },

  passwordContainer: {
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,

    borderRadius: 10,
    borderWidth: 0,
    padding: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  inputPassword: {
    flex: 1,
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    fontFamily: fonts.CLOCKWISE_REGULAR,
  },

  showPasswordButton: {
    color:
      mode === 'dark'
        ? colors.CLOCKWISE_PRIMARY
        : colors.CLOCKWISE_PRIMARY_DARK,
    paddingHorizontal: 12,
  },
});
