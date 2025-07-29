import { View } from 'react-native';
import styles from '../styles/Dashboard.styles';

import Clocking from '../../components/Clocking/container/Clock';

const Dashboard = () => {
  const { user } = useDashboardScreen();
  return (
    <View style={styles.container}>
      <Clocking />
    </View>
  );
};

export default Dashboard;
