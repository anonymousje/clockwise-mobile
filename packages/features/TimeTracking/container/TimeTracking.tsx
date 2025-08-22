import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from '../styles/TimeTracking.styles';
import { COLORS } from '../../../constants/theme';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTimeTracking from '../hooks/useTimeTracking';
import { formatHMS } from '../../../utils/helper';
import STRINGS from '../../../utils/strings';

const TimeTracking = () => {
  const { approveTime, approveAll, unapproveAll, timeSheet } =
    useTimeTracking();

  if (timeSheet === null) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{STRINGS.TITLES.TIME_TRACKING}</Text>
          <TouchableOpacity>
            <Ionicons
              name={COMMON_CONSTANTS.ICONS.FILTER}
              size={COMMON_CONSTANTS.SIZE.SIZE_30}
              color={COLORS.CLOCKWISE_PRIMARY}
              style={styles.filterIconStyle}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator
            size='large'
            color={COLORS.CLOCKWISE_PRIMARY}
          />
          <Text style={styles.headerText}>{STRINGS.LOADING_WAIT}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{STRINGS.TITLES.TIME_TRACKING}</Text>
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
                      .toLocaleDateString(COMMON_CONSTANTS.DATE_TIME.EN_US, {
                        weekday: COMMON_CONSTANTS.SHORT,
                      })
                      .toUpperCase()}
                  </Text>
                  <Text style={styles.dateText}>
                    {new Date(entry.clock_in.date).getDate()}
                  </Text>
                </View>

                <View style={styles.detailsSection}>
                  <View style={styles.titleRow}>
                    <Text style={styles.titleText}>{entry.full_name}</Text>
                    <Text style={styles.timeText}>
                      {new Date(entry.clock_in.date).toLocaleTimeString([], {
                        hour: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
                        minute: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
                      })}
                      {entry.clock_out
                        ? ` - ${new Date(
                            entry.clock_out.date,
                          ).toLocaleTimeString([], {
                            hour: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
                            minute: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
                          })}`
                        : ''}
                    </Text>
                    <Text style={styles.roleText}>
                      Placeholder for position
                    </Text>
                    <Text style={styles.statusText}>
                      {entry.total_shift
                        ? `${STRINGS.PENDING} • ${formatHMS(entry.total_shift)}`
                        : `${STRINGS.PENDING}`}
                    </Text>
                    <View style={styles.breakTimeContainer}>
                      <Ionicons
                        name={COMMON_CONSTANTS.ICONS.CAFE}
                        size={COMMON_CONSTANTS.SIZE.SIZE_18}
                        color={COLORS.CLOCKWISE_PRIMARY}
                      />
                      <Text style={styles.breakText}>
                        {formatHMS(entry.break_duration)}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.cardApproveButton}
                    onPress={approveTime}
                  >
                    <Text style={styles.approveText}>{STRINGS.APPROVE}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={approveAll}
            style={styles.approveButton}
          >
            <Text style={styles.buttonText}>{STRINGS.APPROVE_ALL}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={unapproveAll}
            style={styles.unapproveButton}
          >
            <Text style={styles.buttonText}>{STRINGS.UNAPPROVE_ALL}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default TimeTracking;
