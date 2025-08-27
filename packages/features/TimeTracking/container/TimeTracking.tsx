import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Modal,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { RefreshControl } from 'react-native-gesture-handler';
import styles from '../styles/TimeTracking.styles';
import { COLORS } from '../../../constants/theme';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTimeTracking from '../hooks/useTimeTracking';
import { formatHMS } from '../../../utils/helper';
import STRINGS from '../../../utils/strings';
import Button from '../../components/Button/container/Button';

const TimeTracking = () => {
  const {
    approveTime,
    approveAll,
    unapproveAll,
    timeSheet,
    onRefresh,
    refreshing,
    getTimeClockDetails,
    showModal,
    toggleModal,
    handlePickerChange,
    departmentList,
    locationList,
    jobRolelist,
    applyFilters,
    clearFilters,
  } = useTimeTracking();

  // const filterModal = () => {
  //   return (

  //   );
  // };
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
            size={COMMON_CONSTANTS.ICON_SIZE.LARGE}
            color={COLORS.CLOCKWISE_PRIMARY}
          />
          <Text style={styles.headerText}>{STRINGS.LOADING_WAIT}</Text>
        </View>
      </View>
    );
  } else {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>
              {STRINGS.TITLES.TIME_TRACKING}
            </Text>
            <TouchableOpacity onPress={toggleModal}>
              <Ionicons
                name={COMMON_CONSTANTS.ICONS.FILTER}
                size={COMMON_CONSTANTS.SIZE.SIZE_30}
                color={COLORS.CLOCKWISE_PRIMARY}
                style={styles.filterIconStyle}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
              />
            }
            style={styles.content}
            data={Array.isArray(timeSheet) ? timeSheet : []}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item: entry }) => (
              <TouchableOpacity
                style={styles.timeEntryCard}
                onPress={() => getTimeClockDetails(entry.id)}
              >
                <View style={styles.dateSection}>
                  <Text style={styles.dayText}>
                    {new Date(entry.clock_in)
                      .toLocaleDateString(COMMON_CONSTANTS.DATE_TIME.EN_US, {
                        weekday: COMMON_CONSTANTS.SHORT,
                      })
                      .toUpperCase()}
                  </Text>
                  <Text style={styles.dateText}>
                    {new Date(entry.clock_in).getDate()}
                  </Text>
                </View>

                <View style={styles.detailsSection}>
                  <View style={styles.titleRow}>
                    <Text style={styles.titleText}>{entry.full_name}</Text>
                    <Text style={styles.timeText}>
                      {new Date(entry.clock_in).toLocaleTimeString([], {
                        hour: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
                        minute: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
                      })}
                      {entry.clock_out
                        ? ` - ${new Date(entry.clock_out).toLocaleTimeString(
                            [],
                            {
                              hour: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
                              minute: COMMON_CONSTANTS.DATE_TIME.TWO_DIGIT,
                            },
                          )}`
                        : ''}
                    </Text>
                    <Text style={styles.roleText}>{entry.position}</Text>
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
                  {!entry.status && (
                    <TouchableOpacity
                      style={styles.cardApproveButton}
                      onPress={() => approveTime(entry.id)}
                    >
                      <Text style={styles.approveText}>{STRINGS.APPROVE}</Text>
                    </TouchableOpacity>
                  )}
                  {entry.status && (
                    <TouchableOpacity
                      style={styles.cardApproveButton}
                      onPress={() => approveTime(entry.id)}
                    >
                      <Text style={styles.unapproveText}>
                        {STRINGS.UNAPPROVE}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </TouchableOpacity>
            )}
          />
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
        <Modal
          animationType='slide'
          transparent={false}
          visible={showModal}
          onRequestClose={toggleModal}
        >
          <View style={styles.container}>
            <View style={styles.modalHeader}>
              <View style={styles.titleContainer}>
                <TouchableOpacity
                  onPress={toggleModal}
                  style={styles.backButton}
                >
                  <Ionicons
                    name={COMMON_CONSTANTS.ICONS.ARROW}
                    size={COMMON_CONSTANTS.SIZE.SIZE_24}
                    color={COLORS.CLOCKWISE_PRIMARY}
                  />
                </TouchableOpacity>
                <Text style={styles.headerText}>
                  {STRINGS.TITLES.CUSTOM_FILTER}
                </Text>
              </View>
              <TouchableOpacity onPress={clearFilters}>
                <Text style={styles.clearFilterText}>CLEAR ALL</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.modalContent}>
              <View>
                <View style={styles.picker}>
                  <Picker
                    selectedValue={COMMON_CONSTANTS.DEFAULT}
                    onValueChange={(itemValue) =>
                      handlePickerChange(
                        itemValue,
                        COMMON_CONSTANTS.FILTER_CONTROLLER_VALUES.DEPARTMENT_ID,
                      )
                    }
                    style={styles.pickerItem}
                  >
                    <Picker.Item
                      label={STRINGS.PICKER_LABELS.DEPARTMENT}
                      value={COMMON_CONSTANTS.DEFAULT}
                    />

                    {departmentList.map((department) => (
                      <Picker.Item
                        key={department.id}
                        label={department.name}
                        value={department.id}
                      />
                    ))}
                  </Picker>
                </View>

                <View style={styles.picker}>
                  <Picker
                    selectedValue={COMMON_CONSTANTS.DEFAULT}
                    onValueChange={(itemValue) =>
                      handlePickerChange(
                        itemValue,
                        COMMON_CONSTANTS.FILTER_CONTROLLER_VALUES.LOCATION_ID,
                      )
                    }
                    style={styles.pickerItem}
                  >
                    <Picker.Item
                      label={STRINGS.PICKER_LABELS.LOCATION}
                      value={COMMON_CONSTANTS.DEFAULT}
                    />

                    {locationList.map((location) => (
                      <Picker.Item
                        key={location.id}
                        label={location.name}
                        value={location.id}
                      />
                    ))}
                  </Picker>
                </View>

                <View style={styles.picker}>
                  <Picker
                    selectedValue={COMMON_CONSTANTS.DEFAULT}
                    onValueChange={(itemValue) =>
                      handlePickerChange(
                        itemValue,
                        COMMON_CONSTANTS.FILTER_CONTROLLER_VALUES.JOB_ROLE_ID,
                      )
                    }
                    style={styles.pickerItem}
                  >
                    <Picker.Item
                      label={STRINGS.PICKER_LABELS.JOB_ROLE}
                      value={COMMON_CONSTANTS.DEFAULT}
                    />

                    {jobRolelist.map((jobRole) => (
                      <Picker.Item
                        key={jobRole.id}
                        label={jobRole.name}
                        value={jobRole.id}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
              <Button
                label='APPLY'
                onPress={applyFilters}
              />
            </View>
          </View>
        </Modal>
      </>
    );
  }
};

export default TimeTracking;
