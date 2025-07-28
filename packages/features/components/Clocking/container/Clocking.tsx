import { View } from 'react-native';
import Button from '../../Button/container/Button';
import useClock from '../hooks/useClock';

export default function Clocking({}) {
  const { clockIn, timePunch } = useClock();
  console.log('Clock in value:', clockIn);

  return (
    <>
      {clockIn && (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderWidth: 1,
            borderColor: 'black',
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'blue',
              padding: 20,
            }}
          >
            <Button
              label='Clocking In'
              onPress={() => {
                timePunch();
              }}
              style={{ width: 300 }}
            />
          </View>
        </View>
      )}

      {!clockIn && (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            borderWidth: 1,
            borderColor: 'black',
          }}
        >
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: 'blue',
              padding: 20,
            }}
          >
            <Button
              label='Clocking Out'
              onPress={() => {
                timePunch();
              }}
              style={{ width: 300 }}
            />
          </View>
        </View>
      )}
    </>
  );
}
