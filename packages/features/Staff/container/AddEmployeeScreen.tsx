import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { Controller } from 'react-hook-form';
import { styles } from '../styles/AddEmployeeScreen.styles';
import useAddEmployee from '../hooks/useAddEmployee';

import InputField from '../../components/InputField/container/InputField';

export default function AddEmployee() {
  const { control, handleSubmit, onSubmit, errorMsg } = useAddEmployee();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.modalContent}>
        <Controller
          control={control}
          name={'firstName'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <Pressable>
                <InputField
                  label='First Name'
                  value={value}
                  error={error?.message}
                  onChangeText={onChange}
                />
              </Pressable>
            </>
          )}
        />

        <Controller
          control={control}
          name={'lastName'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <Pressable>
                <InputField
                  label='Last Name'
                  value={value}
                  error={error?.message}
                  onChangeText={onChange}
                />
              </Pressable>
            </>
          )}
        />

        <Controller
          control={control}
          name={'password'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <Pressable>
                <InputField
                  label='Password'
                  value={value}
                  error={error?.message}
                  onChangeText={onChange}
                  secureTextEntry={true}
                />
              </Pressable>
            </>
          )}
        />

        <Controller
          control={control}
          name={'cellPhone'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <Pressable>
                <InputField
                  label='Cell Phone'
                  value={value}
                  error={error?.message}
                  onChangeText={onChange}
                />
              </Pressable>
            </>
          )}
        />

        <Controller
          control={control}
          name={'homePhone'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <Pressable>
                <InputField
                  label='Home Phone'
                  value={value || ''}
                  error={error?.message}
                  onChangeText={onChange}
                />
              </Pressable>
            </>
          )}
        />

        <Controller
          control={control}
          name={'emailAddress'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              {errorMsg && (
                <Text style={styles.errorMsg}>Email already in use</Text>
              )}
              <Pressable>
                <InputField
                  label='Email Address'
                  value={value}
                  error={error?.message}
                  onChangeText={onChange}
                />
              </Pressable>
            </>
          )}
        />

        <Controller
          control={control}
          name={'userName'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <Pressable>
                <InputField
                  label='Username'
                  value={value || ''}
                  error={error?.message}
                  onChangeText={onChange}
                />
              </Pressable>
            </>
          )}
        />

        <Controller
          control={control}
          name={'nickName'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <Pressable>
                <InputField
                  label='Nickname'
                  value={value || ''}
                  error={error?.message}
                  onChangeText={onChange}
                />
              </Pressable>
            </>
          )}
        />

        <Controller
          control={control}
          name={'address'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <Pressable>
                <InputField
                  label='Address'
                  value={value || ''}
                  error={error?.message}
                  onChangeText={onChange}
                />
              </Pressable>
            </>
          )}
        />

        <Controller
          control={control}
          name={'employeeId'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <Pressable>
                <InputField
                  label='Employee ID'
                  value={value || ''}
                  error={error?.message}
                  onChangeText={onChange}
                />
              </Pressable>
            </>
          )}
        />

        <Controller
          control={control}
          name={'permissionLevel'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
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
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
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
