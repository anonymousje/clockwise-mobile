import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Modal,
  TextInput,
  ScrollView,
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
import RangeDatePicker from '../../components/DatePicker/container/DatePicker';

const TimeTracking = () => {
  const {
    approveTime,
    unapproveTime,
    approveAll,
    unapproveAll,
    timeSheet,
    onRefresh,
    refreshing,
    getTimeClockDetails,
    showModal,
    toggleModal,
    departmentList,
    locationList,
    jobRolelist,
    applyFilters,
    location,
    setLocation,
    department,
    role,
    setDepartment,
    setRole,
    clearFilters,
    keyword,
    setKeyword,
    searchKeyword,
    loading,
    startDate,
    endDate,
    handleDateRangeChange,
  } = useTimeTracking();

  const filterModal = () => {
    return (
      <View style={styles.filterModalContainer}>
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
          <TouchableOpacity
            onPress={clearFilters}
            style={styles.clearFilterButton}
          >
            <Text style={styles.clearFilterText}>{STRINGS.CLEAR_ALL}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.modalContent}>
          <ScrollView
            style={styles.filtersContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.filtersContentContainer}
          >
            <Text style={styles.sectionTitle}>
              {STRINGS.HEADERS.FILTER_OPTIONS}
            </Text>

            <View style={styles.filterGroup}>
              <Text style={styles.filterLabel}>
                {STRINGS.PICKER_LABELS.LOCATION_FILTER}
              </Text>
              <View style={styles.pickerContainer}>
                <Ionicons
                  name={COMMON_CONSTANTS.ICONS.LOCATION}
                  size={COMMON_CONSTANTS.SIZE.SIZE_20}
                  color={COLORS.CLOCKWISE_PRIMARY}
                  style={styles.pickerIcon}
                />
                <Picker
                  selectedValue={location}
                  onValueChange={(itemValue) => setLocation(itemValue)}
                  style={styles.filterInput}
                >
                  <Picker.Item
                    label={STRINGS.PICKER_LABELS.LOCATION}
                    value={COMMON_CONSTANTS.DEFAULT}
                  />
                  {locationList.map((item) => (
                    <Picker.Item
                      key={item.id}
                      label={item.name}
                      value={item.id}
                    />
                  ))}
                </Picker>
              </View>
            </View>

            <View style={styles.filterGroup}>
              <Text style={styles.filterLabel}>
                {STRINGS.PICKER_LABELS.DEPARTMENT_FILTER}
              </Text>
              <View style={styles.pickerContainer}>
                <Ionicons
                  name={COMMON_CONSTANTS.ICONS.DEPARTMENT}
                  size={COMMON_CONSTANTS.SIZE.SIZE_20}
                  color={COLORS.CLOCKWISE_PRIMARY}
                  style={styles.pickerIcon}
                />
                <Picker
                  selectedValue={department}
                  onValueChange={(itemValue) => setDepartment(itemValue)}
                  style={styles.filterInput}
                >
                  <Picker.Item
                    label={STRINGS.PICKER_LABELS.DEPARTMENT}
                    value={COMMON_CONSTANTS.DEFAULT}
                  />
                  {departmentList.map((item) => (
                    <Picker.Item
                      key={item.id}
                      label={item.name}
                      value={item.id}
                    />
                  ))}
                </Picker>
              </View>
            </View>

            <View style={styles.filterGroup}>
              <Text style={styles.filterLabel}>
                {STRINGS.PICKER_LABELS.JOB_ROLE_FILTER}
              </Text>
              <View style={styles.pickerContainer}>
                <Ionicons
                  name={COMMON_CONSTANTS.ICONS.JOB_ROLE}
                  size={COMMON_CONSTANTS.SIZE.SIZE_20}
                  color={COLORS.CLOCKWISE_PRIMARY}
                  style={styles.pickerIcon}
                />
                <Picker
                  selectedValue={role}
                  onValueChange={(itemValue) => setRole(itemValue)}
                  style={styles.filterInput}
                >
                  <Picker.Item
                    label={STRINGS.PICKER_LABELS.JOB_ROLE}
                    value={COMMON_CONSTANTS.DEFAULT}
                  />
                  {jobRolelist.map((item) => (
                    <Picker.Item
                      key={item.id}
                      label={item.name}
                      value={item.id}
                    />
                  ))}
                </Picker>
              </View>
            </View>

            <RangeDatePicker
              onDateRangeChange={handleDateRangeChange}
              startDate={startDate}
              endDate={endDate}
            />
          </ScrollView>

          <View style={styles.modalButtonContainer}>
            <Button
              label={STRINGS.BUTTON_TEXT.APPLY}
              onPress={applyFilters}
            />
          </View>
        </View>
      </View>
    );
  };
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
            ListHeaderComponent={
              <View style={styles.searchContainer}>
                <View style={styles.searchInputContainer}>
                  <TextInput
                    placeholder={STRINGS.INPUT_PLACEHOLDER_TEXT.SEARCH_STAFF}
                    value={keyword}
                    onChangeText={setKeyword}
                    style={styles.searchInput}
                  />
                  <TouchableOpacity onPress={searchKeyword}>
                    <Ionicons
                      name={COMMON_CONSTANTS.ICONS.SEARCH}
                      size={30}
                      style={styles.searchIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            }
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
                    {!entry.status && (
                      <Text style={styles.statusPendingText}>
                        {entry.total_shift
                          ? `${STRINGS.PENDING} • ${formatHMS(
                              entry.total_shift,
                            )}`
                          : `${STRINGS.PENDING}`}
                      </Text>
                    )}
                    {entry.status && (
                      <Text style={styles.statusApprovedText}>
                        {entry.total_shift
                          ? `${STRINGS.APPROVED} • ${formatHMS(
                              entry.total_shift,
                            )}`
                          : `${STRINGS.APPROVED}`}
                      </Text>
                    )}
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
                      onPress={() => unapproveTime(entry.id)}
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
          animationType={COMMON_CONSTANTS.MODAL_ANIMATION.SLIDE}
          transparent={false}
          visible={showModal}
          onRequestClose={toggleModal}
        >
          {filterModal()}
        </Modal>
        <Modal
          animationType={COMMON_CONSTANTS.MODAL_ANIMATION.FADE}
          transparent={true}
          visible={loading}
        >
          <View style={styles.listLoadingContainer}>
            <ActivityIndicator
              size={COMMON_CONSTANTS.ICON_SIZE.LARGE}
              color={COLORS.CLOCKWISE_PRIMARY}
            />
            <Text style={styles.headerText}>{STRINGS.LOADING_WAIT}</Text>
          </View>
        </Modal>
      </>
    );
  }
};

export default TimeTracking;
