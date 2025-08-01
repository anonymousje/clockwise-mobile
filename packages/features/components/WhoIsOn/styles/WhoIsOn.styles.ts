import { Appearance, StyleSheet } from 'react-native';

const mode = Appearance.getColorScheme();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: mode === 'dark' ? '#fff' : '#000',
  },
});

export default styles;
