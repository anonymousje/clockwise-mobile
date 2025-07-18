import { Text, View, TouchableOpacity, ScrollView, Modal } from 'react-native';
import {
  styles,
  placeholderColor,
} from '../../Staff/styles/StaffScreen.styles';
import useStaffScreen from '../hooks/useStaffScreen';
import { staffType } from '../../types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';

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

                <Text style={styles.position}>Software Engineer</Text>
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

            <TextInput
              placeholder='Location'
              style={styles.filterInput}
              value={location}
              onChangeText={(text) => setLocation(text)}
            />

            <TextInput
              placeholder='Department'
              style={styles.filterInput}
              value={department}
              onChangeText={(text) => setDepartment(text)}
            />

            <TextInput
              placeholder='Role'
              style={styles.filterInput}
              value={role}
              onChangeText={(text) => setRole(text)}
            />
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
