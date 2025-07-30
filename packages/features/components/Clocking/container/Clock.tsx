import { View, TouchableOpacity } from 'react-native';
import useClock from '../hooks/useClock';
import { styles } from '../styles/Clock.styles';
import { Text } from 'react-native-gesture-handler';
import STRINGS from '../../../../utils/strings';

const Clocking = () => {
  const { clockIn, timePunch } = useClock();

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
              <Text style={styles.ButtonText}>
                {STRINGS.BUTTON_TEXT.CLOCK_IN}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {!clockIn && (
        <View style={styles.clockOutContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.titleText}>{STRINGS.HEADERS.CLOCK_IN}</Text>

            <Text style={styles.timeText}>{STRINGS.PLACEHOLDERTIME}</Text>
          </View>

          <View style={styles.clockOutButtonContainer}>
            <TouchableOpacity
              onPress={timePunch}
              style={styles.breakButton}
            >
              <Text style={styles.ButtonText}>{STRINGS.BUTTON_TEXT.BREAK}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={timePunch}
              style={styles.clockOutButton}
            >
              <Text style={styles.ButtonText}>
                {STRINGS.BUTTON_TEXT.CLOCK_OUT}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default Clocking;
