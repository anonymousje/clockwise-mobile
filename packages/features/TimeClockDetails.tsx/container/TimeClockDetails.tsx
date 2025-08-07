import { View, TouchableOpacity, Text, Modal, TextInput } from 'react-native';
import useTimeClockDetails from '../hooks/useTimeClockDetails';
import Button from '../../components/Button/container/Button';
import Iconicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/TimeClockDetails.styles';
import { ScrollView } from 'react-native-gesture-handler';
import { COLORS } from '../../../constants/theme';
import STRINGS from '../../../utils/strings';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';
import { iconColour } from '../styles/TimeClockDetails.styles';

const TimeClockDetails = () => {
  const {
    clockInTime,
    clockTime,
    breakTime,
    clockInDate,
    handleClockOut,
    setModal,
    handleNoteChange,
    modalVisible,
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
            <Text style={styles.clockTime}>...</Text>
            <Text style={styles.clockDate}>...</Text>
          </View>
        </View>

        <View style={styles.timelineClockItem}>
          <View style={styles.timelineClockIcon}>
            <Iconicons
              name={COMMON_CONSTANTS.ICONS.ELLIPSE}
              size={COMMON_CONSTANTS.SIZE.SIZE_24}
              color={COLORS.GREEN}
            />
            {breakTime.length > 0 && <View style={styles.timelineClockLine} />}
          </View>
          <View style={styles.timelineContent}>
            <Text style={styles.timelineLabel}>{STRINGS.CLOCK_IN}</Text>
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
                    name={COMMON_CONSTANTS.ICONS.CAFE}
                    size={COMMON_CONSTANTS.SIZE.SIZE_30}
                    color={COLORS.WHITE}
                  />
                  {entry.endTime && <View style={styles.timelineLine} />}
                </View>
                <View style={styles.timelineContent}>
                  <Text style={styles.timelineLabel}>
                    {STRINGS.BREAK_START}
                  </Text>
                  <Text style={styles.timelineTime}>{entry.startTime}</Text>
                </View>
              </View>
              {entry.endTime && (
                <View
                  key={`end-${index}`}
                  style={styles.timelineItem}
                >
                  <View style={styles.timelineIconContainer}>
                    <Iconicons
                      name={COMMON_CONSTANTS.ICONS.CAFE}
                      size={COMMON_CONSTANTS.SIZE.SIZE_30}
                      color={COLORS.WHITE}
                    />
                    {index < breakTime.length - COMMON_CONSTANTS.ONE && (
                      <View style={styles.timelineLine} />
                    )}
                  </View>

                  <View style={styles.timelineContent}>
                    <Text style={styles.timelineLabel}>
                      {STRINGS.BREAK_END}
                    </Text>
                    <Text style={styles.timelineTime}>{entry.endTime}</Text>
                  </View>
                </View>
              )}
            </View>
          ),
        )}
      </ScrollView>

      <TouchableOpacity
        style={styles.clockOutButton}
        onPress={setModal}
      >
        <Text style={styles.clockOutButtonText}>
          {STRINGS.BUTTON_TEXT.CLOCK_OUT}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={setModal}>
              <Iconicons
                name={COMMON_CONSTANTS.ICONS.ARROW}
                size={COMMON_CONSTANTS.SIZE.SIZE_24}
                color={iconColour}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{STRINGS.HEADERS.NOTE}</Text>
          </View>

          <View style={styles.noteContainer}>
            <TextInput
              style={styles.noteInput}
              placeholder={STRINGS.INPUT_PLACEHOLDER_TEXT.NOTE}
              onChangeText={handleNoteChange}
              multiline={true}
            />
            <Button
              label={STRINGS.ICON_TITLES.ADD}
              onPress={handleClockOut}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default TimeClockDetails;
