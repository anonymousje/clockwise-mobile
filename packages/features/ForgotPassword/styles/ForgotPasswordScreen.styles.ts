import { StyleSheet, Appearance } from 'react-native';
import { colors } from '../../theme';

const mode = Appearance.getColorScheme();

const styles = StyleSheet.create({
  container: {
    backgroundColor:
      mode == 'dark'
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  button: {
    backgroundColor: colors.CLOCKWISE_PRIMARY,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },

  header: {
    width: '100%',
    fontSize: 28,
    fontWeight: '300',
    color:
      mode == 'dark' ? colors.TEXT_DARK_MODE : colors.BACKGROUND_LIGHT_MODE,
    marginBottom: 40,
    lineHeight: 34,
    paddingBottom: 20,
  },

  input: {
    width: '100%',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor:
      mode == 'dark' ? colors.TEXT_DARK_MODE : colors.BACKGROUND_LIGHT_MODE,
    fontSize: 16,
    color:
      mode == 'dark' ? colors.TEXT_DARK_MODE : colors.BACKGROUND_LIGHT_MODE,
    marginBottom: 20,
  },
});

export default styles;
