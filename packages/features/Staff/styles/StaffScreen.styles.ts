import { StyleSheet, Appearance } from 'react-native';
import { colors } from '../../theme';
import { fonts } from '../../theme';

const mode = Appearance.getColorScheme();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:
      mode === 'dark'
        ? colors.BACKGROUND_DARK_MODE
        : colors.BACKGROUND_LIGHT_MODE,
    padding: 16,
  },
  inputText: {
    color: 'white',
    fontFamily: fonts.CLOCKWISE_REGULAR,
  },
  test: {
    fontFamily: fonts.CLOCKWISE_REGULAR,
    fontWeight: 'light',
  },
});
