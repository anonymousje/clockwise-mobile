import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Linking,
} from 'react-native';
import { Controller } from 'react-hook-form';
import { styles } from '../styles/AddEmployeeScreen.styles';
import useAddEmployee from '../hooks/useAddEmployee';
import InputField from '../../components/InputField/container/InputField';

export default function AddEmployee() {
  const { control, handleSubmit, onSubmit, errorMsg, setFirstName, clearForm } =
    useAddEmployee();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.editButtonContainer}>
          <Text style={styles.title}>Employee Detail</Text>
          <TouchableOpacity
            onPress={() => clearForm()}
            style={styles.editButton}
          >
            <Text style={styles.editButtonText}>CLEAR</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
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
                    onChangeText={(text) => {
                      onChange(text);
                      setFirstName(text);
                    }}
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
            name={'email'}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <>
                <Pressable>
                  <InputField
                    label='Email Address'
                    value={value}
                    error={error?.message}
                    onChangeText={onChange}
                  />
                  {errorMsg && (
                    <Text style={styles.errorMsg}>Email already in use</Text>
                  )}
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
        <View style={styles.linkContainer}>
          <Text style={styles.linkText}>
            Read Our{' '}
            <Text
              style={styles.linkButton}
              onPress={() =>
                Linking.openURL('https://tcpsoftware.com/privacy-policy/')
              }
            >
              Privacy Policy
            </Text>
          </Text>
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
