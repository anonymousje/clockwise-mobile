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
    fontSize: 17,
    color: 'white',
  },

  clockOutContainer: {
    flex: 1,
  },

  headerContainer: {
    alignItems: 'flex-start',
    padding: 10,
  },

  titleText: {
    fontSize: 17,
    opacity: 0.5,
    fontFamily: fonts.CLOCKWISE_REGULAR,
    color: colors.TEXT_LIGHT_MODE,
  },

  timeText: {
    fontSize: 35,
    paddingVertical: 20,
    fontFamily: fonts.CLOCKWISE_BOLD,
    color: colors.TEXT_LIGHT_MODE,
  },

  clockOutButtonContainer: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  clockOutButton: {
    width: '45%',
    backgroundColor: 'red',
    alignItems: 'center',
    paddingVertical: 11,
    borderRadius: 5,
  },
});
