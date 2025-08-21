import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../styles/TimeTracking.styles';

const TimeTracking = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Time Tracking</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.timeEntryCard}>
          <View style={styles.dateSection}>
            <Text style={styles.dayText}>TUE</Text>
            <Text style={styles.dateText}>19</Text>
          </View>

          <View style={styles.detailsSection}>
            <View style={styles.titleRow}>
              <Text style={styles.titleText}>intern_sandbox</Text>
              <Text style={styles.timeText}>7:15 AM - 7:15 AM</Text>
              <Text style={styles.roleText}>Butcher</Text>
              <Text style={styles.statusText}>Pending • 16s</Text>
            </View>

            <Text style={styles.approveText}>APPROVE</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {}}
            style={styles.approveButton}
          >
            <Text style={styles.buttonText}>Approve</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.unapproveButton}>
            <Text style={styles.buttonText}>Unapprove</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TimeTracking;
