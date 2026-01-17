import { View, Text } from 'react-native';
import useTimeClockDetails from '../hooks/useTimeClockDetails';
import Iconicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/TimeClockDetails.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../../constants/theme';
import STRINGS from '../../../utils/strings';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';

const TimeClockDetails = () => {
  const {
    clockInTime,
    clockTime,
    clockInDate,
    clockOutTime,
    clockOutDate,
    breakTime,
  } = useTimeClockDetails();

  return (
    <View style={styles.container}>
      <View style={styles.workLabelContainer}>
        <Text style={styles.workLabel}>{STRINGS.HEADERS.YOU_WORKED_FOR}</Text>
        <Text style={styles.workDuration}>{clockTime}</Text>
      </View>
      <ScrollView style={styles.timelineContainer}>
        <View style={styles.clockTimesContainer}>
          <View style={styles.clockTimeSection}>
            <Text style={styles.clockLabel}>{STRINGS.CLOCK_IN}</Text>
            <Text style={styles.clockTime}>{clockInTime}</Text>
            <Text style={styles.clockDate}>{clockInDate}</Text>
          </View>

          <View style={styles.clockTimeSection}>
            <Text style={styles.clockLabel}>{STRINGS.CLOCK_OUT}</Text>
            <Text style={styles.clockTime}>{clockOutTime}</Text>
            <Text style={styles.clockDate}>{clockOutDate}</Text>
          </View>
        </View>

        <View style={styles.timelineClockItem}>
          <View style={styles.timelineClockIcon}>
            <Iconicons
              name={COMMON_CONSTANTS.ICONS.ELLIPSE}
              size={COMMON_CONSTANTS.SIZE.SIZE_24}
              color={COLORS.GREEN}
            />
            <View style={styles.timelineClockLine} />
          </View>
          <View style={styles.timelineContent}>
            <Text style={styles.timelineLabel}>{STRINGS.CLOCK_IN}</Text>
            <Text style={styles.timelineTime}>{clockInTime}</Text>
          </View>
        </View>
        <View style={styles.timelineClockItem}>
          <View style={styles.timelineClockIcon}>
            <Iconicons
              name={COMMON_CONSTANTS.ICONS.CAFE}
              size={COMMON_CONSTANTS.SIZE.SIZE_26}
              color={COLORS.CLOCKWISE_PRIMARY}
            />
            <View style={styles.timelineClockLine} />
          </View>
          <View style={styles.timelineContent}>
            <Text style={styles.timelineLabel}>{STRINGS.BREAK}</Text>
            <Text style={styles.timelineTime}>{breakTime}</Text>
          </View>
        </View>
        <View style={styles.timelineClockItem}>
          <View style={styles.timelineClockIcon}>
            <Iconicons
              name={COMMON_CONSTANTS.ICONS.ELLIPSE}
              size={COMMON_CONSTANTS.SIZE.SIZE_24}
              color={COLORS.RED}
            />
          </View>
          <View style={styles.timelineContent}>
            <Text style={styles.timelineLabel}>{STRINGS.CLOCK_OUT}</Text>
            <Text style={styles.timelineTime}>{clockOutTime}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default TimeClockDetails;
