import { Appearance, StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    padding: 16,
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
  },

  staffDetails: {
    justifyContent: 'center',
  },

  textContainer: {
    marginBottom: 20,
  },
  editButtonContainer: {
    alignItems: 'flex-end',
    padding: 16,
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
  },
  editButton: {
    backgroundColor: colors.CLOCKWISE_PRIMARY_DARK,
    padding: 10,
    borderRadius: 5,
    color: 'white',
  },

  text: {
    fontSize: 16,
    marginVertical: 4,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontFamily: fonts.CLOCKWISE_REGULAR,
  },
});
