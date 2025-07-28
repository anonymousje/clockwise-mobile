import { View, Text } from 'react-native';
import styles from '../styles/Dashboard.styles';

import useDashboardScreen from '../hooks/useDashboardScreen';
import Clocking from '../../components/Clocking/container/Clocking';

export default function Dashboard() {
  //const { user } = useDashboardScreen();
  return (
    <View style={styles.container}>
      <Clocking />
    </View>
  );
}
