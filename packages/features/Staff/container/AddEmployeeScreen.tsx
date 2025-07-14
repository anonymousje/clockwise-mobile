import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
} from 'react-native';
import { Controller } from 'react-hook-form';
import { styles } from '../styles/AddEmployeeScreen.styles';
import useAddEmployee from '../hooks/useAddEmployee';
import InputField from '../../components/InputField/container/InputField';

export default function AddEmployee() {
  const { control, handleSubmit, onSubmit, errorMsg } = useAddEmployee();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
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
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
