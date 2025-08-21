import { View, Text } from 'react-native';
import styles from '../styles/SplashScreen.styles';
import useSplashScreen from '../hooks/useSplashScreen';
import STRINGS from '../../../utils/strings';

const SplashScreen = () => {
  useSplashScreen();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>{STRINGS.CLOCKWISE_INITIALS}</Text>
        <Text style={styles.logoSeparator}>|</Text>
        <Text style={styles.logoText}>{STRINGS.CLOCKWISE}</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
