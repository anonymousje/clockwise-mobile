import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { editIconColor, styles } from '../styles/StaffDetailScreen.styles';
import InputField from '../../components/InputField/container/InputField';
import useStaffDetail from '../hooks/useStaffDetail';
import { Picker } from '@react-native-picker/picker';
import Icons from 'react-native-vector-icons/Ionicons';

export default function StaffDetail() {
  const { editMode, staffData, setStaffData, editStaffData } = useStaffDetail();

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
              {staffData.firstName.charAt(0).toUpperCase()}
            </Text>
          </View>
        </View>

        {!editMode && (
          <View style={styles.staffDetails}>
            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>First Name</Text>
              <Text style={styles.text}>{staffData.firstName}</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Email</Text>
              <Text style={styles.text}>{staffData.email}</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Cell Phone</Text>
              <Text style={styles.text}>
                {staffData.cellPhone === undefined ? ' -' : staffData.cellPhone}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Home Phone</Text>
              <Text style={styles.text}>
                {staffData.homePhone === undefined ? ' -' : staffData.homePhone}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>User Name</Text>
              <Text style={styles.text}>
                {staffData.userName === undefined ? ' -' : staffData.userName}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Nick Name</Text>
              <Text style={styles.text}>
                {staffData.nickName === undefined ? ' -' : staffData.nickName}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Address</Text>
              <Text style={styles.text}>
                {staffData.address === undefined ? ' -' : staffData.address}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Employee ID</Text>
              <Text style={styles.text}>
                {staffData.employeeId === undefined
                  ? ' -'
                  : staffData.employeeId}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Permission Level</Text>
              <Text style={styles.text}>
                {staffData.permissionLevel === undefined
                  ? ' -'
                  : staffData.permissionLevel}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>Status </Text>
              <Text style={styles.text}>
                {staffData.status === undefined ? ' -' : staffData.status}
              </Text>
            </View>
          </View>
        )}

        {editMode && (
          <View style={styles.editDetails}>
            <InputField
              label='First Name'
              value={staffData.firstName}
              onChangeText={(text) =>
                setStaffData({ ...staffData, firstName: text })
              }
            />
            <InputField
              label='Email'
              value={staffData.email}
              onChangeText={(text) =>
                setStaffData({ ...staffData, email: text })
              }
            />
            <InputField
              label='Cell Phone'
              value={staffData.cellPhone}
              onChangeText={(text) =>
                setStaffData({ ...staffData, cellPhone: text })
              }
            />
            <InputField
              label='Home Phone'
              value={staffData.homePhone}
              onChangeText={(text) =>
                setStaffData({ ...staffData, homePhone: text })
              }
            />
            <InputField
              label='User Name'
              value={staffData.userName}
              onChangeText={(text) =>
                setStaffData({ ...staffData, userName: text })
              }
            />
            <InputField
              label='Nick Name'
              value={staffData.nickName}
              onChangeText={(text) =>
                setStaffData({ ...staffData, nickName: text })
              }
            />
            <InputField
              label='Address'
              value={staffData.address}
              onChangeText={(text) =>
                setStaffData({ ...staffData, address: text })
              }
            />
            <InputField
              label='Employee ID'
              value={staffData.employeeId}
              onChangeText={(text) =>
                setStaffData({ ...staffData, employeeId: text })
              }
            />

            <Picker
              selectedValue={staffData.permissionLevel}
              onValueChange={(itemValue) =>
                setStaffData({ ...staffData, permissionLevel: itemValue })
              }
              style={styles.picker}
            >
              <Picker.Item
                label='Select Permission Level'
                value=''
              />
              <Picker.Item
                label='Manager'
                value='Manager'
              />
              <Picker.Item
                label='Employee'
                value='Employee'
              />
            </Picker>

            <Picker
              selectedValue={staffData.status}
              onValueChange={(itemValue) =>
                setStaffData({ ...staffData, status: itemValue })
              }
            >
              <Picker.Item
                label='Select Status'
                value=''
              />

              <Picker.Item
                label='Activated'
                value='Activated'
              />

              <Picker.Item
                label='Deactivated'
                value='Deactivated'
              />
            </Picker>
          </View>
        )}
      </ScrollView>
    </View>
  );
}
