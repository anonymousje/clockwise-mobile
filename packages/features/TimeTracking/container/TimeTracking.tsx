import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/TimeTracking.styles';
import { COLORS } from '../../../constants/theme';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTimeTracking from '../hooks/useTimeTracking';

const TimeTracking = () => {
  const { approveTime, approveAll, unapproveAll, timeSheet } =
    useTimeTracking();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Time Tracking</Text>
        <TouchableOpacity>
          <Ionicons
            name={COMMON_CONSTANTS.ICONS.FILTER}
            size={COMMON_CONSTANTS.SIZE.SIZE_30}
            color={COLORS.CLOCKWISE_PRIMARY}
            style={styles.filterIconStyle}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.content}>
        {Array.isArray(timeSheet) &&
          timeSheet.map((entry) => (
            <View
              key={entry.id}
              style={styles.timeEntryCard}
            >
              <View style={styles.dateSection}>
                <Text style={styles.dayText}>
                  {new Date(entry.clock_in.date)
                    .toLocaleDateString('en-US', { weekday: 'short' })
                    .toUpperCase()}
                </Text>
                <Text style={styles.dateText}>
                  {new Date(entry.clock_in.date).getDate()}
                </Text>
              </View>

              <View style={styles.detailsSection}>
                <View style={styles.titleRow}>
                  <Text style={styles.titleText}>intern_sandbox</Text>
                  <Text style={styles.timeText}>7:15 AM - 7:15 AM</Text>
                  <Text style={styles.roleText}>Butcher</Text>
                  <Text style={styles.statusText}>Pending • 16s</Text>
                </View>
                <TouchableOpacity
                  style={styles.cardApproveButton}
                  onPress={approveTime}
                >
                  <Text style={styles.approveText}>APPROVE</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={approveAll}
            style={styles.approveButton}
          >
            <Text style={styles.buttonText}>Approve All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={unapproveAll}
            style={styles.unapproveButton}
          >
            <Text style={styles.buttonText}>Unapprove All</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default TimeTracking;
