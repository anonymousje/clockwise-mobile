import { View } from 'react-native';
import styles from '../styles/Dashboard.styles';

import Clocking from '../../components/Clocking/container/Clock';

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Clocking />
    </View>
  );
}
