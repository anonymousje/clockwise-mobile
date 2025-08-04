import { Text, View, TouchableOpacity, ScrollView, Modal } from 'react-native';
import {
  styles,
  placeholderColor,
} from '../../Staff/styles/StaffScreen.styles';
import useStaffScreen from '../hooks/useStaffScreen';
import { staffType } from '../../types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import { Picker } from '@react-native-picker/picker';
import STRINGS from '../../../utils/strings';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';
import { COLORS } from '../../../constants/theme';

const Staff = () => {
  const {
    openForm,
    staffList,
    search,
    filterSearch,
    location,
    setLocation,
    department,
    setDepartment,
    role,
    setRole,
    active,
    setActive,
    modal,
    setModal,
    staffDetails,
    departmentList,
    locationList,
    jobRolelist,
    clearFilters,
    applyFilters,
  } = useStaffScreen();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View>
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <Ionicons
                name={COMMON_CONSTANTS.ICONS.SEARCH}
                size={30}
                style={styles.searchIcon}
              />

              <TextInput
                placeholder={STRINGS.INPUT_PLACEHOLDER_TEXT.SEARCH_STAFF}
                placeholderTextColor={placeholderColor}
                style={styles.searchInput}
                value={search}
                onChangeText={(text) => filterSearch(text)}
              />
            </View>

            <TouchableOpacity onPress={() => setModal(true)}>
              <Ionicons
                name={COMMON_CONSTANTS.ICONS.FILTER}
                size={30}
                style={styles.filterIcon}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.headerContainer}>
            <Text style={styles.staffSectionHeader}>
              {STRINGS.HEADERS.STAFF}
            </Text>
          </View>

          <View style={styles.shadowSeparator} />

          {staffList.map((staff: staffType) => (
            <TouchableOpacity
              key={staff.email}
              style={styles.staffItem}
              onPress={() => staffDetails(staff)}
            >
              <View
                style={[
                  styles.staffAvatar,
                  {
                    backgroundColor: staff.iconColor,
                  },
                ]}
              >
                <Text style={styles.staffAvatarText}>
                  {staff.firstName[0].toUpperCase()}
                  {staff.lastName
                    ? staff.lastName[0].toUpperCase()
                    : COMMON_CONSTANTS.DEFAULT}
                </Text>
              </View>

              <View>
                <Text style={styles.staffName}>
                  {staff.firstName} <Text>{staff.lastName} </Text>
                </Text>

                {staff.jobRoleName && (
                  <Text style={styles.position}>{staff.jobRoleName}</Text>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={openForm}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType='slide'
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={() => setModal(false)}
            >
              <Ionicons
                name={COMMON_CONSTANTS.ICONS.ARROW}
                size={25}
                color={COLORS.BLACK}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={clearFilters}
            >
              <Text style={styles.modalCloseButtonText}>
                {STRINGS.ICON_TITLES.CLEAR}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {STRINGS.HEADERS.FILTER_OPTIONS}
            </Text>

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
                  key={item.recordId}
                  label={item.name}
                  value={item.recordId}
                />
              ))}
            </Picker>

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
                  key={item.recordId}
                  label={item.name}
                  value={item.recordId}
                />
              ))}
            </Picker>

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
                  key={item.recordId}
                  label={item.name}
                  value={item.recordId}
                />
              ))}
            </Picker>

            <Picker
              selectedValue={active}
              onValueChange={(itemValue) => setActive(itemValue)}
              style={styles.filterInput}
            >
              <Picker.Item
                label={STRINGS.PICKER_LABELS.ALL_STAFF}
                value={2}
              />

              <Picker.Item
                label={STRINGS.PICKER_LABELS.ACTIVE_STAFF}
                value={1}
              />

              <Picker.Item
                label={STRINGS.PICKER_LABELS.INACTIVE_STAFF}
                value={3}
              />
            </Picker>
          </View>

          <TouchableOpacity
            onPress={() => applyFilters(location, department, role)}
            style={styles.filterButton}
          >
            <Text style={styles.filterButtonText}>
              {STRINGS.ICON_TITLES.APPLY}
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default Staff;
