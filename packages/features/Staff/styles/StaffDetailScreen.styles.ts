import { Appearance, StyleSheet } from 'react-native';
import { colors, fonts } from '../../theme';

const mode = Appearance.getColorScheme();

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARKER_MODE
        : colors.BACKGROUND_LIGHTER_MODE,
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.CLOCKWISE_PRIMARY_DARK,
    borderRadius: 10,
    paddingHorizontal: 16,
  },

  editButtonText: {
    color: 'white',
    padding: 10,
  },

  scrollContainer: {
    gap: 10,
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginBottom: 20,
    paddingBottom: 40,
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
    paddingBottom: 10,
    fontFamily: fonts.CLOCKWISE_REGULAR,
  },

  staffDetails: {
    justifyContent: 'center',
    paddingBottom: 50,
    paddingTop: 60,
    paddingHorizontal: 16,
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
  },

  textContainer: {
    marginBottom: 20,
    paddingBottom: 10,
    paddingLeft: 5,
    borderBottomWidth: 1,
    borderColor:
      mode === 'dark' ? 'transparent' : colors.TEXT_LIGHT_LIGHTER_MODE,
  },

  textHeader: {
    fontSize: 16,
    marginVertical: 4,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontFamily: fonts.CLOCKWISE_BOLD,
  },

  text: {
    fontSize: 17,
    marginTop: 4,
    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,
    fontFamily: fonts.CLOCKWISE_REGULAR,
  },

  editDetails: {
    justifyContent: 'center',
    paddingBottom: 50,
    paddingHorizontal: 16,

    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
  },

  picker: {
    width: '100%',
    marginVertical: 30,
  },
});
export const editIconColor = 'white';
