import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { editIconColor, styles } from '../styles/StaffDetailScreen.styles';
import InputField from '../../components/InputField/container/InputField';
import useStaffDetail from '../hooks/useStaffDetail';
import { Picker } from '@react-native-picker/picker';
import Icons from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button/container/Button';
import ICONS from '../../../constants/Icons';
import STRINGS from '../../../utils/strings';
import { colors } from '../../../constants/theme';
import VALUES from '../../../constants/values';
import { getInitials } from '../../../utils/helper';

const StaffDetail = () => {
  const {
    editMode,
    staffData,
    editStaffData,
    departmentList,
    locationList,
    jobRolelist,
    validationErrors,
    changeStatus,
    formatDateTime,
    checkUndefined,
    handleTextChange,
    handlePickerChange,
  } = useStaffDetail();

  return (
    <View style={styles.container}>
      <View style={styles.editButtonContainer}>
        <TouchableOpacity
          onPress={() => editStaffData()}
          style={styles.editButton}
        >
          <Icons
            name={editMode ? ICONS.save : ICONS.create}
            size={24}
            color={editIconColor}
          />

          <Text style={styles.editButtonText}>
            {editMode ? STRINGS.ICON_TITLES.SAVE : STRINGS.ICON_TITLES.EDIT}
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.headerContainer}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>
              {getInitials(staffData?.firstName, staffData?.lastName)}
            </Text>
          </View>
        </View>

        {!editMode && (
          <View style={styles.staffDetails}>
            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>
                {STRINGS.EMPLOYEE_FORM.FIRST_NAME}
              </Text>
              <Text style={styles.text}>{staffData?.firstName}</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>
                {STRINGS.EMPLOYEE_FORM.LAST_NAME}
              </Text>
              <Text style={styles.text}>
                {staffData?.lastName === undefined
                  ? ` ${STRINGS.DASH}`
                  : staffData?.lastName}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>
                {STRINGS.EMPLOYEE_FORM.EMAIL}
              </Text>
              <Text style={styles.text}>{staffData?.email}</Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>
                {STRINGS.EMPLOYEE_FORM.LAST_LOGIN}
              </Text>
              <Text style={styles.text}>
                {staffData?.lastLoginDate === undefined
                  ? ` ${STRINGS.DASH}`
                  : formatDateTime(staffData?.lastLoginDate || VALUES.DEFAULT)}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>
                {STRINGS.EMPLOYEE_FORM.PERMISSION_LEVEL}
              </Text>

              <Text style={styles.text}>
                {staffData?.role === undefined
                  ? ` ${STRINGS.DASH}`
                  : staffData?.role}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>
                {STRINGS.EMPLOYEE_FORM.STATUS}
              </Text>

              <Text style={styles.text}>
                {staffData?.userStatus === undefined
                  ? ` ${STRINGS.DASH}`
                  : String(staffData?.userStatus) === '1'
                  ? STRINGS.ACTIVE
                  : STRINGS.INACTIVE}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>
                {STRINGS.EMPLOYEE_FORM.LOCATION}
              </Text>

              <Text style={styles.text}>
                {checkUndefined(staffData?.locationName)}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>
                {STRINGS.EMPLOYEE_FORM.JOB_ROLE}
              </Text>

              <Text style={styles.text}>
                {checkUndefined(staffData?.jobRoleName)}
              </Text>
            </View>

            <Button
              label={
                staffData?.userStatus === 1
                  ? STRINGS.DEACTIVATE
                  : STRINGS.ACTIVATE
              }
              onPress={changeStatus}
              color={staffData?.userStatus === 1 ? colors.RED : colors.GREEN}
            />
          </View>
        )}

        {editMode && (
          <View style={styles.editDetails}>
            <InputField
              label={STRINGS.EMPLOYEE_FORM.FIRST_NAME}
              value={staffData?.firstName || VALUES.DEFAULT}
              onChangeText={(text) => {
                if (staffData) {
                  handleTextChange(text, 'firstName');
                }
              }}
            />

            {validationErrors?.firstName && (
              <Text style={styles.error}>{validationErrors.firstName}</Text>
            )}

            <InputField
              label={STRINGS.EMPLOYEE_FORM.LAST_NAME}
              value={staffData?.lastName || VALUES.DEFAULT}
              onChangeText={(text) => handleTextChange(text, 'lastName')}
            />

            {validationErrors?.lastName && (
              <Text style={styles.error}>{validationErrors.lastName}</Text>
            )}

            <InputField
              label={STRINGS.EMPLOYEE_FORM.EMAIL}
              value={staffData?.email || VALUES.DEFAULT}
              onChangeText={(text) => handleTextChange(text, 'email')}
            />

            {validationErrors?.email && (
              <Text style={styles.error}>{validationErrors.email}</Text>
            )}

            <InputField
              label={STRINGS.EMPLOYEE_FORM.CELL_PHONE}
              value={staffData?.phoneNumber || VALUES.DEFAULT}
              onChangeText={(text) => handleTextChange(text, 'phoneNumber')}
            />

            <InputField
              label={STRINGS.EMPLOYEE_FORM.USERNAME}
              value={staffData?.username || VALUES.DEFAULT}
              onChangeText={(text) => handleTextChange(text, 'username')}
            />

            {validationErrors?.username && (
              <Text style={styles.error}>{validationErrors.username}</Text>
            )}

            <InputField
              label={STRINGS.EMPLOYEE_FORM.NICKNAME}
              value={staffData?.nickname || VALUES.DEFAULT}
              onChangeText={(text) => handleTextChange(text, 'nickname')}
            />

            <InputField
              label={STRINGS.EMPLOYEE_FORM.ADDRESS}
              value={staffData?.address || VALUES.DEFAULT}
              onChangeText={(text) => handleTextChange(text, 'address')}
            />

            <InputField
              label={STRINGS.EMPLOYEE_FORM.USERCODE}
              value={staffData?.userCode || VALUES.DEFAULT}
              onChangeText={(text) => handleTextChange(text, 'userCode')}
            />

            {validationErrors?.userCode && (
              <Text style={styles.error}>{validationErrors.userCode}</Text>
            )}

            <View style={styles.pickersContainer}>
              <View style={styles.picker}>
                <Picker
                  selectedValue={staffData?.departmentName || VALUES.DEFAULT}
                  onValueChange={(itemValue) =>
                    handlePickerChange(itemValue, 'department')
                  }
                  style={styles.pickerItem}
                >
                  <Picker.Item
                    label={STRINGS.PICKER_LABELS.DEPARTMENT}
                    value={VALUES.DEFAULT}
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
                  selectedValue={staffData?.locationName || VALUES.DEFAULT}
                  onValueChange={(itemValue) =>
                    handlePickerChange(itemValue, 'location')
                  }
                  style={styles.pickerItem}
                >
                  <Picker.Item
                    label={STRINGS.PICKER_LABELS.LOCATION}
                    value={VALUES.DEFAULT}
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
                  selectedValue={staffData?.jobRoleName || VALUES.DEFAULT}
                  onValueChange={(itemValue) =>
                    handlePickerChange(itemValue, 'jobRole')
                  }
                  style={styles.pickerItem}
                >
                  <Picker.Item
                    label={STRINGS.PICKER_LABELS.JOB_ROLE}
                    value={VALUES.DEFAULT}
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
                  selectedValue={staffData?.role || VALUES.DEFAULT}
                  onValueChange={(itemValue) =>
                    handleTextChange(itemValue, 'role')
                  }
                  style={styles.pickerItem}
                >
                  <Picker.Item
                    label={STRINGS.PICKER_LABELS.PERMISSION_LEVEL}
                    value={VALUES.DEFAULT}
                  />

                  <Picker.Item
                    label={STRINGS.ROLES.ADMIN}
                    value={VALUES.PICKER_VALUES.ADMIN}
                  />

                  <Picker.Item
                    label={STRINGS.ROLES.USER}
                    value={VALUES.PICKER_VALUES.USER}
                  />
                </Picker>
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default StaffDetail;
