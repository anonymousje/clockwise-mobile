import { View, TouchableOpacity } from 'react-native';
import useClock from '../hooks/useClock';
import { styles } from '../styles/Clock.styles';
import { Text } from 'react-native-gesture-handler';
import STRINGS from '../../../../utils/strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS } from '../../../../constants/theme';
import { FONT_SIZE } from '../../../../constants/theme';

const Clocking = () => {
  const { clockIn, timePunch, clockTime } = useClock();

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{STRINGS.TITLES.DASHBOARD}</Text>
        <View style={styles.iconContainer}>
          <Ionicons
            name='notifications-outline'
            size={FONT_SIZE.SIZE_24}
            color={COLORS.CLOCKWISE_PRIMARY}
          />
          <Ionicons
            name='settings-outline'
            size={FONT_SIZE.SIZE_24}
            color={COLORS.CLOCKWISE_PRIMARY}
          />
        </View>
      </View>

      {!clockIn && (
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
      )}

      {clockIn && (
        <>
          <View style={styles.clockIconBackground}>
            <Ionicons
              name='alarm-outline'
              size={200}
              color='grey'
              style={styles.icon}
            />
          </View>

          <View>
            <View>
              <Text style={styles.titleText}>{STRINGS.HEADERS.CLOCK_IN}</Text>
              <Text style={styles.timeText}>{clockTime}</Text>
            </View>

            <View style={styles.clockOutButtonContainer}>
              <TouchableOpacity
                onPress={timePunch}
                style={styles.breakButton}
              >
                <Text style={styles.ButtonText}>
                  {STRINGS.BUTTON_TEXT.BREAK}
                </Text>
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
        </>
      )}
    </View>
  );
};

export default Clocking;
