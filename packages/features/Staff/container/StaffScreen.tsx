import {
  Text,
  View,
  TextInput,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Controller } from 'react-hook-form';
import { styles } from '../../Staff/styles/StaffScreen.styles';
import useStaffScreen from '../hooks/useStaffScreen';

export default function Staff() {
  const {
    control,
    handleSubmit,
    onSubmit,
    showModal,
    setShowModal,
    getStaff,
    expandedId,
    setExpandedId,
    closeForm,
  } = useStaffScreen();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.staffSectionHeader}>Staff List</Text>
        {getStaff().map((staff) => (
          <TouchableOpacity
            key={staff.id}
            style={styles.staffItem}
            onPress={() =>
              setExpandedId(expandedId === staff.id ? null : staff.id)
            }
            activeOpacity={0.7}
          >
            <Text style={styles.staffName}>
              {staff.name} <Text>({staff.empId})</Text>
            </Text>

            <Text style={styles.staffDetails}>Position: {staff.position}</Text>

            {expandedId === staff.id && (
              <>
                <Modal
                  animationType='slide'
                  onRequestClose={() => setExpandedId(null)}
                >
                  <Text style={styles.staffDetails}>Email: {staff.email}</Text>

                  <View
                    style={[
                      styles.statusBadge,
                      staff.status === 'Activated'
                        ? styles.statusActivated
                        : styles.statusDeactivated,
                    ]}
                  >
                    <Text>{staff.status}</Text>
                  </View>
                </Modal>
              </>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => setShowModal(true)}
          style={styles.addButton}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType='slide'
        visible={showModal}
        onRequestClose={closeForm}
      >
        <View>
          <View style={styles.modalContent}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={closeForm}
                accessibilityLabel='Close'
              >
                <Text style={styles.closeButtonText}>×</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.modalHeader}>Add Employee</Text>

            <ScrollView
              contentContainerStyle={styles.scrollViewContent}
              showsVerticalScrollIndicator={false}
            >
              <Controller
                control={control}
                name={'fullName'}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <>
                    <TextInput
                      placeholder='Full Name'
                      placeholderTextColor='#aaa'
                      style={styles.inputText}
                      value={value}
                      onChangeText={onChange}
                    />
                    {error && (
                      <Text style={styles.errorMsg}>{error.message}</Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name={'cellPhone'}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <>
                    <TextInput
                      placeholder='Cell Phone'
                      placeholderTextColor='#aaa'
                      style={styles.inputText}
                      value={value}
                      onChangeText={onChange}
                      keyboardType='phone-pad'
                    />
                    {error && (
                      <Text style={styles.errorMsg}>{error.message}</Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name={'homePhone'}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <>
                    <TextInput
                      placeholder='Home Phone'
                      placeholderTextColor='#aaa'
                      style={styles.inputText}
                      value={value}
                      onChangeText={onChange}
                      keyboardType='phone-pad'
                    />
                    {error && (
                      <Text style={styles.errorMsg}>{error.message}</Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name={'emailAddress'}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <>
                    <TextInput
                      placeholder='Email Address'
                      placeholderTextColor='#aaa'
                      style={styles.inputText}
                      value={value}
                      onChangeText={onChange}
                      keyboardType='email-address'
                      autoCapitalize='none'
                    />
                    {error && (
                      <Text style={styles.errorMsg}>{error.message}</Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name={'userName'}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <>
                    <TextInput
                      placeholder='Username'
                      placeholderTextColor='#aaa'
                      style={styles.inputText}
                      value={value}
                      onChangeText={onChange}
                      autoCapitalize='none'
                    />
                    {error && (
                      <Text style={styles.errorMsg}>{error.message}</Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name={'nickName'}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <>
                    <TextInput
                      placeholder='Nick Name'
                      placeholderTextColor='#aaa'
                      style={styles.inputText}
                      value={value}
                      onChangeText={onChange}
                    />
                    {error && (
                      <Text style={styles.errorMsg}>{error.message}</Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name={'address'}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <>
                    <TextInput
                      placeholder='Address'
                      placeholderTextColor='#aaa'
                      style={styles.inputText}
                      value={value}
                      onChangeText={onChange}
                    />
                    {error && (
                      <Text style={styles.errorMsg}>{error.message}</Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name={'employeeId'}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <>
                    <TextInput
                      placeholder='Employee ID'
                      placeholderTextColor='#aaa'
                      style={styles.inputText}
                      value={value}
                      onChangeText={onChange}
                    />
                    {error && (
                      <Text style={styles.errorMsg}>{error.message}</Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name={'permissionLevel'}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <>
                    <Picker
                      selectedValue={value}
                      style={styles.picker}
                      onValueChange={onChange}
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
                    {error && (
                      <Text style={styles.errorMsg}>{error.message}</Text>
                    )}
                  </>
                )}
              />

              <Controller
                control={control}
                name={'status'}
                render={({
                  field: { value, onChange },
                  fieldState: { error },
                }) => (
                  <>
                    <Picker
                      selectedValue={value}
                      style={styles.picker}
                      onValueChange={onChange}
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
                    {error && (
                      <Text style={styles.errorMsg}>{error.message}</Text>
                    )}
                  </>
                )}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
