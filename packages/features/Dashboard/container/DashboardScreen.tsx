import { View } from 'react-native';
import styles from '../styles/Dashboard.styles';

import Clocking from '../../components/Clocking/container/Clock';
import { Text } from 'react-native-gesture-handler';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Clocking />

      <View style={styles.widgetContainer}>
        <Text>PlaceHolder</Text>
      </View>
    </View>
  );
};

export default Dashboard;
