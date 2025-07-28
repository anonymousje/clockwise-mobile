import { View } from 'react-native';
import Button from '../../Button/container/Button';
import useClock from '../hooks/useClock';
import { styles } from '../styles/Clock.styles';

export default function Clocking({}) {
  const { clockIn, timePunch } = useClock();
  console.log('Clock in value:', clockIn);

  return (
    <>
      {clockIn && (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              label='Clocking In'
              onPress={() => {
                timePunch();
              }}
              style={styles.button}
            />
          </View>
        </View>
      )}

      {!clockIn && (
        <View style={styles.container}>
          <View style={styles.buttonContainer}>
            <Button
              label='Clocking Out'
              onPress={() => {
                timePunch();
              }}
              style={styles.button}
            />
          </View>
        </View>
      )}
    </>
  );
}
