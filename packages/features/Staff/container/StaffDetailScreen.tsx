import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { editIconColor, styles } from '../styles/StaffDetailScreen.styles';
import InputField from '../../components/InputField/container/InputField';
import useStaffDetail from '../hooks/useStaffDetail';
import { Picker } from '@react-native-picker/picker';
import Icons from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button/container/Button';
import STRINGS from '../../../utils/strings';
import { COLORS } from '../../../constants/theme';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';
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
          onPress={editStaffData}
          style={styles.editButton}
        >
          <Icons
            name={
              editMode
                ? COMMON_CONSTANTS.ICONS.SAVE
                : COMMON_CONSTANTS.ICONS.CREATE
            }
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
                  ? ` ${STRINGS.INPUT_PLACEHOLDER_TEXT.DASH}`
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
                  ? ` ${STRINGS.INPUT_PLACEHOLDER_TEXT.DASH}`
                  : formatDateTime(
                      staffData?.lastLoginDate || COMMON_CONSTANTS.DEFAULT,
                    )}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>
                {STRINGS.EMPLOYEE_FORM.PERMISSION_LEVEL}
              </Text>

              <Text style={styles.text}>
                {staffData?.role === undefined
                  ? ` ${STRINGS.INPUT_PLACEHOLDER_TEXT.DASH}`
                  : staffData?.role}
              </Text>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.textHeader}>
                {STRINGS.EMPLOYEE_FORM.STATUS}
              </Text>

              <Text style={styles.text}>
                {staffData?.userStatus === undefined
                  ? ` ${STRINGS.INPUT_PLACEHOLDER_TEXT.DASH}`
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
              color={staffData?.userStatus === 1 ? COLORS.RED : COLORS.GREEN}
            />
          </View>
        )}

        {editMode && (
          <View style={styles.editDetails}>
            <InputField
              label={STRINGS.EMPLOYEE_FORM.FIRST_NAME}
              value={staffData?.firstName || COMMON_CONSTANTS.DEFAULT}
              onChangeText={(text) => {
                handleTextChange(
                  text,
                  COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.FIRST_NAME,
                );
              }}
            />

            {validationErrors?.firstName && (
              <Text style={styles.error}>{validationErrors.firstName}</Text>
            )}

            <InputField
              label={STRINGS.EMPLOYEE_FORM.LAST_NAME}
              value={staffData?.lastName || COMMON_CONSTANTS.DEFAULT}
              onChangeText={(text) =>
                handleTextChange(
                  text,
                  COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.LAST_NAME,
                )
              }
            />

            {validationErrors?.lastName && (
              <Text style={styles.error}>{validationErrors.lastName}</Text>
            )}

            <InputField
              label={STRINGS.EMPLOYEE_FORM.EMAIL}
              value={staffData?.email || COMMON_CONSTANTS.DEFAULT}
              onChangeText={(text) =>
                handleTextChange(
                  text,
                  COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.EMAIL,
                )
              }
            />

            {validationErrors?.email && (
              <Text style={styles.error}>{validationErrors.email}</Text>
            )}

            <InputField
              label={STRINGS.EMPLOYEE_FORM.CELL_PHONE}
              value={staffData?.phoneNumber || COMMON_CONSTANTS.DEFAULT}
              onChangeText={(text) =>
                handleTextChange(
                  text,
                  COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.PHONE_NUMBER,
                )
              }
            />

            <InputField
              label={STRINGS.EMPLOYEE_FORM.USERNAME}
              value={staffData?.username || COMMON_CONSTANTS.DEFAULT}
              onChangeText={(text) =>
                handleTextChange(
                  text,
                  COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.USERNAME,
                )
              }
            />

            {validationErrors?.username && (
              <Text style={styles.error}>{validationErrors.username}</Text>
            )}

            <InputField
              label={STRINGS.EMPLOYEE_FORM.NICKNAME}
              value={staffData?.nickname || COMMON_CONSTANTS.DEFAULT}
              onChangeText={(text) =>
                handleTextChange(
                  text,
                  COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.NICKNAME,
                )
              }
            />

            <InputField
              label={STRINGS.EMPLOYEE_FORM.ADDRESS}
              value={staffData?.address || COMMON_CONSTANTS.DEFAULT}
              onChangeText={(text) =>
                handleTextChange(
                  text,
                  COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.ADDRESS,
                )
              }
            />

            <InputField
              label={STRINGS.EMPLOYEE_FORM.USERCODE}
              value={staffData?.userCode || COMMON_CONSTANTS.DEFAULT}
              onChangeText={(text) =>
                handleTextChange(
                  text,
                  COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.USER_CODE,
                )
              }
            />

            {validationErrors?.userCode && (
              <Text style={styles.error}>{validationErrors.userCode}</Text>
            )}

            <View style={styles.pickersContainer}>
              <View style={styles.picker}>
                <Picker
                  selectedValue={
                    staffData?.departmentName || COMMON_CONSTANTS.DEFAULT
                  }
                  onValueChange={(itemValue) =>
                    handlePickerChange(
                      itemValue,
                      COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.DEPARTMENT,
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
                      key={department.recordId}
                      label={department.name}
                      value={department.name}
                    />
                  ))}
                </Picker>
              </View>

              <View style={styles.picker}>
                <Picker
                  selectedValue={
                    staffData?.locationName || COMMON_CONSTANTS.DEFAULT
                  }
                  onValueChange={(itemValue) =>
                    handlePickerChange(
                      itemValue,
                      COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.LOCATION,
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
                      key={location.recordId}
                      label={location.name}
                      value={location.name}
                    />
                  ))}
                </Picker>
              </View>

              <View style={styles.picker}>
                <Picker
                  selectedValue={
                    staffData?.jobRoleName || COMMON_CONSTANTS.DEFAULT
                  }
                  onValueChange={(itemValue) =>
                    handlePickerChange(
                      itemValue,
                      COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.JOB_ROLE,
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
                      key={jobRole.recordId}
                      label={jobRole.name}
                      value={jobRole.name}
                    />
                  ))}
                </Picker>
              </View>

              <View style={styles.picker}>
                <Picker
                  selectedValue={staffData?.role || COMMON_CONSTANTS.DEFAULT}
                  onValueChange={(itemValue) =>
                    handleTextChange(
                      itemValue,
                      COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.ROLE,
                    )
                  }
                  style={styles.pickerItem}
                >
                  <Picker.Item
                    label={STRINGS.PICKER_LABELS.PERMISSION_LEVEL}
                    value={COMMON_CONSTANTS.DEFAULT}
                  />

                  <Picker.Item
                    label={STRINGS.ROLES.ADMIN}
                    value={COMMON_CONSTANTS.PICKER_VALUES.ADMIN}
                  />

                  <Picker.Item
                    label={STRINGS.ROLES.USER}
                    value={COMMON_CONSTANTS.PICKER_VALUES.USER}
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
