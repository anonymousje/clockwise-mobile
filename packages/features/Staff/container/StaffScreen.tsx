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

export default function Staff() {
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
    modal,
    setModal,
    staffDetails,
    departmentList,
    locationList,
    jobRolelist,
  } = useStaffScreen();

  console.log('Staff List:', staffList);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View>
          <View style={styles.searchContainer}>
            <View style={styles.searchInputContainer}>
              <Ionicons
                name='search-outline'
                size={30}
                style={styles.searchIcon}
              />

              <TextInput
                placeholder='Search Staff'
                placeholderTextColor={placeholderColor}
                style={styles.searchInput}
                value={search}
                onChangeText={(text) => filterSearch(text)}
              />
            </View>

            <TouchableOpacity onPress={() => setModal(true)}>
              <Ionicons
                name='filter-outline'
                size={30}
                style={styles.filterIcon}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.staffSectionHeader}>Staff List</Text>

          {staffList.map((staff: staffType) => (
            <TouchableOpacity
              key={staff.email}
              style={styles.staffItem}
              onPress={() => staffDetails(staff)}
            >
              <View style={styles.staffAvatar}>
                <Text style={styles.staffAvatarText}>
                  {staff.firstName[0].toUpperCase()}
                </Text>
              </View>

              <View>
                <Text style={styles.staffName}>
                  {staff.firstName} <Text>{staff.lastName} </Text>
                </Text>

                <Text style={styles.position}>
                  {staff.role === 'Admin' ? 'Manager' : 'Employee'}
                </Text>
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
          <View>
            <Text style={styles.modalTitle}>Filter Options</Text>

            <Picker
              selectedValue={location}
              onValueChange={(itemValue) => setLocation(itemValue)}
              style={styles.filterInput}
            >
              <Picker.Item
                label='Select Location'
                value=''
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
                label='Select Department'
                value=''
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
                label='Select Role'
                value=''
              />
              {jobRolelist.map((item) => (
                <Picker.Item
                  key={item.recordId}
                  label={item.name}
                  value={item.recordId}
                />
              ))}
            </Picker>
          </View>

          <TouchableOpacity
            onPress={() => filterSearch('', location, department, role)}
            style={styles.filterButton}
          >
            <Text style={styles.filterText}>APPLY</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
