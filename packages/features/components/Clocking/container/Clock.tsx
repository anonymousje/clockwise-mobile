import { View, TouchableOpacity } from 'react-native';
import useClock from '../hooks/useClock';
import { styles } from '../styles/Clock.styles';
import { Text } from 'react-native-gesture-handler';

export default function Clocking({}) {
  const { clockIn, timePunch } = useClock();
  console.log('Clock in value:', clockIn);

  return (
    <>
      {clockIn && (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                timePunch();
              }}
              style={styles.button}
            >
              <Text style={styles.ButtonText}>CLOCK IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {!clockIn && (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => {
                timePunch();
              }}
              style={styles.button}
            >
              <Text style={styles.ButtonText}>CLOCK OUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
