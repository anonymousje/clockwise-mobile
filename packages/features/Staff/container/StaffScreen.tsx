import { Text, View, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';
import { styles } from '../../Staff/styles/StaffScreen.styles';
import useStaffScreen from '../hooks/useStaffScreen';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const staffSchema = z.object({
  fullName: z.string().min(1, 'Full Name is required'),
  cellPhone: z.string().min(1, 'Cell Phone is required'),
  homePhone: z.string().optional(),
  emailAddress: z.string().email('Invalid email address'),
  userName: z.string().min(1, 'Username is required'),
  nickName: z.string().optional(),
  address: z.string().optional(),
  employeeId: z.string().min(1, 'Employee ID is required'),
  permissionLevel: z.string().min(1, 'Permission Level is required'),
  status: z.enum(['Activated', 'Deactivated']).optional(),
});

export default function Staff() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      fullName: '',
      cellPhone: '',
      homePhone: '',
      emailAddress: '',
      userName: '',
      nickName: '',
      address: '',
      employeeId: '',
      permissionLevel: '',
      status: undefined,
    },
    resolver: zodResolver(staffSchema),
  });

  const { onSubmit } = useStaffScreen();

  return (
    <View style={styles.container}>
      <Text>Staff Screen</Text>

      <View>
        <Text style={styles.inputText}>Simple Form</Text>
        <Controller
          control={control}
          name={'fullName'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <TextInput
                placeholder='Full Name'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
              />
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
            </>
          )}
        />
        <Controller
          control={control}
          name={'cellPhone'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <TextInput
                placeholder='Cell Phone'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
              />
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
            </>
          )}
        />
        <Controller
          control={control}
          name={'homePhone'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <TextInput
                placeholder='Home Phone'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
              />
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
            </>
          )}
        />
        <Controller
          control={control}
          name={'emailAddress'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <TextInput
                placeholder='Email Address'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
              />
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
            </>
          )}
        />
        <Controller
          control={control}
          name={'userName'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <TextInput
                placeholder='Username'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
              />
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
            </>
          )}
        />
        <Controller
          control={control}
          name={'nickName'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <TextInput
                placeholder='Nick Name'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
              />
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
            </>
          )}
        />
        <Controller
          control={control}
          name={'address'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <TextInput
                placeholder='Address'
                style={styles.inputText}
                value={value}
                onChangeText={onChange}
              />
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
            </>
          )}
        />
        <Controller
          control={control}
          name={'employeeId'}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <>
              <TextInput
                placeholder='Employee ID'
                style={styles.inputText}
                value={value}
                onChangeText={(text) => onChange(text)}
              />
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
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
                style={styles.inputText}
                onValueChange={onChange}
              >
                <Picker.Item label='Select Permission Level' value='' />
                <Picker.Item label='Manager' value='Manager' />
                <Picker.Item label='Employee' value='Employee' />
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
              <Picker
                selectedValue={value}
                style={styles.inputText}
                onValueChange={onChange}
              >
                <Picker.Item label='Select Status' value='' />
                <Picker.Item label='Activated' value='Activated' />
                <Picker.Item label='Deactivated' value='Deactivated' />
              </Picker>
              {error && <Text style={styles.errorMsg}>{error.message}</Text>}
            </>
          )}
        />

        <Button title='Submit' onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}
