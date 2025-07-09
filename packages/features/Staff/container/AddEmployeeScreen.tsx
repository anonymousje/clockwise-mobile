import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Controller } from 'react-hook-form';
import { styles } from '../styles/StaffScreen.styles';
import useAddEmployee from '../hooks/useAddEmployee';

export default function AddEmployee() {
  const { control, handleSubmit, onSubmit, closeForm, errorMsg } =
    useAddEmployee();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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

        <Controller
          control={control}
          name={'firstName'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
              <TextInput
                placeholder='First Name'
                placeholderTextColor='#aaa'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name={'lastName'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
              <TextInput
                placeholder='Last Name'
                placeholderTextColor='#aaa'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name={'password'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
              <TextInput
                placeholder='Password'
                placeholderTextColor='#aaa'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
                secureTextEntry={true}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name={'cellPhone'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
              <TextInput
                placeholder='Cell Phone'
                placeholderTextColor='#aaa'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
                keyboardType='phone-pad'
              />
            </>
          )}
        />

        <Controller
          control={control}
          name={'homePhone'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
              <TextInput
                placeholder='Home Phone'
                placeholderTextColor='#aaa'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
                keyboardType='phone-pad'
              />
            </>
          )}
        />

        <Controller
          control={control}
          name={'emailAddress'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
              {errorMsg && (
                <Text style={styles.errorMsg}>Email already in use</Text>
              )}
              <TextInput
                placeholder='Email Address'
                placeholderTextColor='#aaa'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
                keyboardType='email-address'
                autoCapitalize='none'
              />
            </>
          )}
        />

        <Controller
          control={control}
          name={'userName'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
              <TextInput
                placeholder='Username'
                placeholderTextColor='#aaa'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
                autoCapitalize='none'
              />
            </>
          )}
        />

        <Controller
          control={control}
          name={'nickName'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
              <TextInput
                placeholder='Nick Name'
                placeholderTextColor='#aaa'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name={'address'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
              <TextInput
                placeholder='Address'
                placeholderTextColor='#aaa'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name={'employeeId'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
              <TextInput
                placeholder='Employee ID'
                placeholderTextColor='#aaa'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
              />
            </>
          )}
        />

        <Controller
          control={control}
          name={'permissionLevel'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
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
            </>
          )}
        />

        <Controller
          control={control}
          name={'status'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
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
            </>
          )}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
