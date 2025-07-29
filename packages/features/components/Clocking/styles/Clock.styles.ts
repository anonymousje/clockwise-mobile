import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZE, FONTS } from '../../../../constants/theme';

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
    backgroundColor: COLORS.CLOCKWISE_PRIMARY,
    alignItems: 'center',
    paddingVertical: 11,
    borderRadius: 5,
  },

  ButtonText: {
    fontFamily: FONTS.CLOCKWISE_BOLD,
    fontSize: FONT_SIZE.SIZE_20,
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
    fontFamily: FONTS.CLOCKWISE_REGULAR,
    color: COLORS.TEXT_LIGHT_MODE,
  },

  timeText: {
    fontSize: 35,
    paddingVertical: 20,
    fontFamily: FONTS.CLOCKWISE_BOLD,
    color: COLORS.TEXT_LIGHT_MODE,
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
