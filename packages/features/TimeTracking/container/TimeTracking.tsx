import { View, Text } from 'react-native';
import styles from '../styles/TimeTracking.styles';

const TimeTracking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Time Tracking</Text>
      </View>
    </View>
  );
};

export default TimeTracking;
