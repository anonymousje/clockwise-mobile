import { View, Text } from 'react-native';
import styles from '../styles/TimeTracking.styles';

const TimeTracking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Time Tracking</Text>
      </View>
      <View
        style={{
          borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <View style={{ borderWidth: 1, height: 100, width: '20%' }}>
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text style={{ fontSize: 16 }}>Tue</Text>
            <Text style={{ fontSize: 25 }}>12</Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            borderWidth: 1,
            height: 100,
            width: '80%',
            paddingLeft: 10,
          }}
        >
          <Text style={{ fontSize: 20 }}>Intern Sandbox</Text>
          <Text style={{ fontSize: 16 }}>12:00 - 13:00</Text>
          <Text style={{ fontSize: 14 }}>Butcher</Text>
          <Text style={{ fontSize: 16 }}>Pending</Text>
        </View>
      </View>
    </View>
  );
};

export default TimeTracking;
