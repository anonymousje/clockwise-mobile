import { Appearance, StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 20,
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
  },

  avatarContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.CLOCKWISE_PRIMARY_DARK,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    color: 'white',
    fontSize: 50,
    fontFamily: fonts.CLOCKWISE_REGULAR,
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
    paddingBottom: 50,
    marginTop: 60,
  },

  editDetails: {
    justifyContent: 'center',
    paddingBottom: 50,
  },

  textContainer: {
    marginBottom: 20,
    padding: 10,
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
    alignItems: 'center',
  },

  text: {
    fontSize: 16,
    marginVertical: 4,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontFamily: fonts.CLOCKWISE_REGULAR,
  },

  picker: {
    height: 50,
    width: '100%',
    marginVertical: 30,
  },
});
export const editIconColor = 'white';
