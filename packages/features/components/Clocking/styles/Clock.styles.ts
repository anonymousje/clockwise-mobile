import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },

  button: {
    width: '95%',
    backgroundColor: colors.CLOCKWISE_PRIMARY,
    alignItems: 'center',
    paddingVertical: 11,
    borderRadius: 5,
  },

  ButtonText: {
    fontFamily: fonts.CLOCKWISE_BOLD,
    fontSize: 20,
    color: 'white',
  },
});
