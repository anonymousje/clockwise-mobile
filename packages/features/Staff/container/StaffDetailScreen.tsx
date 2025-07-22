import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { editIconColor, styles } from '../styles/StaffDetailScreen.styles';
import InputField from '../../components/InputField/container/InputField';
import useStaffDetail from '../hooks/useStaffDetail';
import { Picker } from '@react-native-picker/picker';
import Icons from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button/container/Button';

export default function StaffDetail() {
  const {
    editMode,
    staffData,
    setStaffData,
    editStaffData,
    departmentList,
    locationList,
    jobRolelist,
    validationErrors,
    deleteUser,
  } = useStaffDetail();

  return (
    <View style={styles.container}>
      <View style={styles.editButtonContainer}>
        <TouchableOpacity
          onPress={() => editStaffData()}
          style={styles.editButton}
        >
          <Icons
            name={editMode ? 'save-outline' : 'create-outline'}
            size={24}
            color={editIconColor}
          />

          <Text style={styles.editButtonText}>
            {editMode ? 'Save' : 'Edit'}{' '}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>
              {staffData?.firstName.charAt(0).toUpperCase()}
            </Text>
          </View>
        </View>

        {!editMode && (
          <View style={styles.staffDetails}>
            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>First Name</Text>
              <Text style={styles.text}>{staffData?.firstName}</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Last Name</Text>
              <Text style={styles.text}>
                {staffData?.lastName === undefined ? ' -' : staffData?.lastName}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Email</Text>
              <Text style={styles.text}>{staffData?.email}</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Cell Phone</Text>
              <Text style={styles.text}>
                {staffData?.phoneNumber === undefined
                  ? ' -'
                  : staffData?.phoneNumber}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>User Name</Text>
              <Text style={styles.text}>
                {staffData?.username === undefined ? ' -' : staffData?.username}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Nick Name</Text>
              <Text style={styles.text}>
                {staffData?.nickname === undefined ? ' -' : staffData?.nickname}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Address</Text>
              <Text style={styles.text}>
                {staffData?.address === undefined ? ' -' : staffData?.address}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Employee ID</Text>
              <Text style={styles.text}>
                {staffData?.userCode === undefined ? ' -' : staffData?.userCode}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Permission Level</Text>
              <Text style={styles.text}>
                {staffData?.role === undefined ? ' -' : staffData?.role}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Status </Text>
              <Text style={styles.text}>
                {staffData?.status === undefined ? ' -' : staffData?.status}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Department</Text>
              <Text style={styles.text}>
                {staffData?.departmentName === undefined
                  ? ' -'
                  : staffData?.departmentName}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Location</Text>
              <Text style={styles.text}>
                {staffData?.locationName === undefined
                  ? ' -'
                  : staffData?.locationName}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Job Role</Text>
              <Text style={styles.text}>
                {staffData?.jobRoleName === undefined
                  ? ' -'
                  : staffData?.jobRoleName}
              </Text>
            </View>

            <Button
              label='Delete User'
              onPress={() => deleteUser()}
              color='red'
            />
          </View>
        )}

        {editMode && (
          <View style={styles.editDetails}>
            <InputField
              label='First Name'
              value={staffData?.firstName || ''}
              onChangeText={(text) => {
                if (staffData) {
                  setStaffData({ ...staffData, firstName: text });
                }
              }}
            />
            {validationErrors?.firstName && (
              <Text style={styles.error}>{validationErrors.firstName}</Text>
            )}

            <InputField
              label='Last Name'
              value={staffData?.lastName || ''}
              onChangeText={(text) => {
                if (staffData) {
                  setStaffData({ ...staffData, lastName: text });
                }
              }}
            />
            {validationErrors?.lastName && (
              <Text style={styles.error}>{validationErrors.lastName}</Text>
            )}

            <InputField
              label='Email'
              value={staffData?.email || ''}
              onChangeText={(text) => {
                if (staffData) {
                  setStaffData({ ...staffData, email: text });
                }
              }}
            />
            {validationErrors?.email && (
              <Text style={styles.error}>{validationErrors.email}</Text>
            )}

            <InputField
              label='Cell Phone'
              value={staffData?.phoneNumber || ''}
              onChangeText={(text) => {
                if (staffData) {
                  setStaffData({ ...staffData, phoneNumber: text });
                }
              }}
            />

            <InputField
              label='User Name'
              value={staffData?.username || ''}
              onChangeText={(text) => {
                if (staffData) {
                  setStaffData({ ...staffData, username: text });
                }
              }}
            />

            <InputField
              label='Nick Name'
              value={staffData?.nickname || ''}
              onChangeText={(text) => {
                if (staffData) {
                  setStaffData({ ...staffData, nickname: text });
                }
              }}
            />

            <InputField
              label='Address'
              value={staffData?.address || ''}
              onChangeText={(text) => {
                if (staffData) {
                  setStaffData({ ...staffData, address: text });
                }
              }}
            />

            <InputField
              label='User Code'
              value={staffData?.userCode || ''}
              onChangeText={(text) => {
                if (staffData) {
                  setStaffData({ ...staffData, userCode: text });
                }
              }}
            />

            <View style={styles.pickersContainer}>
              <View style={styles.picker}>
                <Picker
                  selectedValue={staffData?.departmentName || ''}
                  onValueChange={(itemValue) => {
                    if (staffData) {
                      setStaffData({
                        ...staffData,
                        departmentName: itemValue,
                        departmentRecordId: departmentList.find(
                          (department) => department.name === itemValue,
                        )?.recordId,
                      });
                    }
                  }}
                  style={styles.pickerItem}
                >
                  <Picker.Item
                    label='Select Department'
                    value=''
                  />

                  {departmentList.map((department) => (
                    <Picker.Item
                      key={department.recordId}
                      label={department.name}
                      value={department.name}
                    />
                  ))}
                </Picker>
              </View>
              <View style={styles.picker}>
                <Picker
                  selectedValue={staffData?.locationName || ''}
                  onValueChange={(itemValue) => {
                    if (staffData) {
                      setStaffData({
                        ...staffData,
                        locationName: itemValue,
                        locationRecordId: locationList.find(
                          (location) => location.name === itemValue,
                        )?.recordId,
                      });
                    }
                  }}
                  style={styles.pickerItem}
                >
                  <Picker.Item
                    label='Select Location'
                    value=''
                  />

                  {locationList.map((location) => (
                    <Picker.Item
                      key={location.recordId}
                      label={location.name}
                      value={location.name}
                    />
                  ))}
                </Picker>
              </View>

              <View style={styles.picker}>
                <Picker
                  selectedValue={staffData?.jobRoleName || ''}
                  onValueChange={(itemValue) => {
                    if (staffData) {
                      setStaffData({
                        ...staffData,
                        jobRoleName: itemValue,
                        jobRoleRecordId: jobRolelist.find(
                          (jobRole) => jobRole.name === itemValue,
                        )?.recordId,
                      });
                    }
                  }}
                  style={styles.pickerItem}
                >
                  <Picker.Item
                    label='Select Job Role'
                    value=''
                  />

                  {jobRolelist.map((jobRole) => (
                    <Picker.Item
                      key={jobRole.recordId}
                      label={jobRole.name}
                      value={jobRole.name}
                    />
                  ))}
                </Picker>
              </View>
              <View style={styles.picker}>
                <Picker
                  selectedValue={staffData?.role || ''}
                  onValueChange={(itemValue) => {
                    if (staffData) {
                      setStaffData({ ...staffData, role: itemValue });
                    }
                  }}
                  style={styles.pickerItem}
                >
                  <Picker.Item
                    label='Select Permission Level'
                    value=''
                  />

                  <Picker.Item
                    label='Manager'
                    value='Admin'
                  />

                  <Picker.Item
                    label='Employee'
                    value='User'
                  />
                </Picker>
              </View>
              <View style={styles.picker}>
                <Picker
                  selectedValue={staffData?.status || ''}
                  onValueChange={(itemValue) => {
                    if (staffData) {
                      setStaffData({ ...staffData, status: itemValue });
                    }
                  }}
                  style={styles.pickerItem}
                >
                  <Picker.Item
                    label='Select Status'
                    value={undefined}
                  />

                  <Picker.Item
                    label='Active'
                    value='"Active"'
                  />

                  <Picker.Item
                    label='Inactive'
                    value='"Inactive"'
                  />
                </Picker>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
