import { View, TouchableOpacity, Text } from 'react-native';
import useTimeClockDetails from '../hooks/useTimeClockDetails';
import Iconicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/TimeClockDetails.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../../constants/theme';

const TimeClockDetails = () => {
  const { clockInTime, clockTime, breakTime, clockInDate } =
    useTimeClockDetails();

  return (
    <View style={styles.container}>
      <View style={styles.workLabelContainer}>
        <Text style={styles.workLabel}>You worked for</Text>
        <Text style={styles.workDuration}>{clockTime}</Text>
      </View>
      <ScrollView style={styles.timelineContainer}>
        <View style={styles.clockTimesContainer}>
          <View style={styles.clockTimeSection}>
            <Text style={styles.clockLabel}>Clock in</Text>
            <Text style={styles.clockTime}>{clockInTime}</Text>
            <Text style={styles.clockDate}>{clockInDate}</Text>
          </View>

          <View style={styles.clockTimeSection}>
            <Text style={styles.clockLabel}>Clock out</Text>
            <Text style={styles.clockTime}>...</Text>
            <Text style={styles.clockDate}>...</Text>
          </View>
        </View>

        <View style={styles.timelineClockItem}>
          <View style={styles.timelineClockIcon}>
            <Iconicons
              name='ellipse'
              size={24}
              color='green'
            />
            {breakTime.length > 0 && <View style={styles.timelineClockLine} />}
          </View>
          <View style={styles.timelineContent}>
            <Text style={styles.timelineLabel}>Clock In</Text>
            <Text style={styles.timelineTime}>{clockInTime}</Text>
          </View>
        </View>

        {breakTime.map(
          (
            entry: { startTime: string; endTime: string | null },
            index: number,
          ) => (
            <View key={index}>
              <View style={styles.timelineItem}>
                <View style={styles.timelineIconContainer}>
                  <Iconicons
                    name='cafe-outline'
                    size={30}
                    color={COLORS.WHITE}
                  />
                  <View style={styles.timelineLine} />
                </View>
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineLabel}>Break Start</Text>
                  <Text style={styles.timelineTime}>{entry.startTime}</Text>
                </View>
              </View>
              {entry.endTime && (
                <View style={styles.timelineItem}>
                  <View style={styles.timelineIconContainer}>
                    <Iconicons
                      name='cafe-outline'
                      size={30}
                      color={COLORS.WHITE}
                    />
                    {(index < breakTime.length - 1 || entry.endTime) && (
                      <View style={styles.timelineLine} />
                    )}
                  </View>

                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineLabel}>Break End</Text>
                    <Text style={styles.timelineTime}>{entry.endTime}</Text>
                  </View>
                </View>
              )}
            </View>
          ),
        )}
      </ScrollView>

      <TouchableOpacity style={styles.clockOutButton}>
        <Text style={styles.clockOutButtonText}>CLOCK OUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimeClockDetails;
