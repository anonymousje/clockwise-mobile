import { StyleSheet } from 'react-native';
import { colors, FONTSIZE } from '../../../../constants/theme';
import { fonts } from '../../../../constants/theme';

export const styles = StyleSheet.create({
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

  buttonContainer: {
    alignItems: 'center',
  },

  buttonText: {
    color: colors.BUTTON_TEXT,
    fontFamily: fonts.CLOCKWISE_BOLD,
    fontSize: FONTSIZE.SMALL,
    fontWeight: '700',
    letterSpacing: 1,
  },
});
