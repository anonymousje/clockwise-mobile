import { Text, View, TouchableOpacity, ScrollView, Modal } from 'react-native';
import { styles } from '../../Staff/styles/StaffScreen.styles';
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
  } = useStaffScreen(); // TODO: add this when Modal: expandedId, setExpandedId

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View>
          <View style={styles.searchRow}>
            <View style={styles.inputSearchContainer}>
              <Ionicons
                name='search-outline'
                size={30}
                style={styles.searchIcon}
              />
              <TextInput
                placeholder='Search Staff'
                style={styles.inputSearch}
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
              // onPress={() =>
              //   setExpandedId(expandedId === staff.id ? null : staff.id)
              // }
              // activeOpacity={0.7}
            >
              <Text style={styles.staffName}>
                {staff.firstName} <Text>{staff.lastName} </Text>
              </Text>
              {/* <Text style={styles.position}>{staff.permissionLevel}</Text>
            {expandedId === staff.id && (
              <>
                <Modal
                  animationType='slide'
                  onRequestClose={() => setExpandedId(null)}
                >
                  <View style={styles.infoContainer}>
                    <View style={styles.info}>
                      <Text style={styles.staffDetails}>Email</Text>

                      <Text style={styles.infoContainerDetails}>
                        {staff.emailAddress}
                      </Text>
                    </View>

                    <View style={styles.info}>
                      <Text style={styles.staffDetails}>CellPhone</Text>

                      <Text style={styles.infoContainerDetails}>
                        {staff.cellPhone}
                      </Text>
                    </View>

                    <View style={styles.info}>
                      <Text style={styles.staffDetails}>Username</Text>

                      <Text style={styles.infoContainerDetails}>
                        {staff.userName}
                      </Text>
                    </View>

                    <View style={styles.info}>
                      <Text style={styles.staffDetails}>Address</Text>

                      <Text style={styles.infoContainerDetails}>
                        {staff.address}
                      </Text>
                    </View>

                    <View style={styles.info}>
                      <Text style={styles.staffDetails}>Permission Level</Text>

                      <Text style={styles.infoContainerDetails}>
                        {staff.permissionLevel}
                      </Text>
                    </View>

                    <View style={styles.info}>
                      <Text style={styles.staffDetails}>Status</Text>

                      <Text style={styles.infoContainerDetails}>
                        {staff.status}
                      </Text>
                    </View>
                  </View>
                </Modal>
              </>
            )} */}
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
            <Text>Filter Options</Text>
            <TextInput
              placeholder='Location'
              style={styles.searchInput}
              value={location}
              onChangeText={(text) => setLocation(text)}
            />
            <TextInput
              placeholder='Department'
              style={styles.searchInput}
              value={department}
              onChangeText={(text) => setDepartment(text)}
            />
            <TextInput
              placeholder='Role'
              style={styles.searchInput}
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
