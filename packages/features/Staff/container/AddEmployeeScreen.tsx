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
import STRINGS from '../../../utils/strings';
import LINK_PREFIX from '../../../constants/links';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';

const AddEmployee = () => {
  const { control, handleSubmit, onSubmit, errorMsg, setFirstName, clearForm } =
    useAddEmployee();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.editButtonContainer}>
          <Text style={styles.title}>{STRINGS.HEADERS.EMPLOYEE_DETAILS}</Text>

          <TouchableOpacity
            onPress={clearForm}
            style={styles.editButton}
          >
            <Text style={styles.editButtonText}>
              {STRINGS.ICON_TITLES.CLEAR}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.formContainer}>
          <Controller
            control={control}
            name={COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.FIRST_NAME}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <>
                <Pressable>
                  <InputField
                    label={STRINGS.EMPLOYEE_FORM.FIRST_NAME}
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
            name={COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.LAST_NAME}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <>
                <Pressable>
                  <InputField
                    label={STRINGS.EMPLOYEE_FORM.LAST_NAME}
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
            name={COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.EMAIL}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <>
                <Pressable>
                  <InputField
                    label={STRINGS.EMPLOYEE_FORM.EMAIL}
                    value={value}
                    error={error?.message}
                    onChangeText={onChange}
                  />
                  {errorMsg && (
                    <Text style={styles.errorMsg}>
                      {STRINGS.ERROR.EMAIL_IN_USE}
                    </Text>
                  )}
                </Pressable>
              </>
            )}
          />

          <Controller
            control={control}
            name={COMMON_CONSTANTS.FORM_CONTROLLER_VALUES.PASSWORD}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <>
                <Pressable>
                  <InputField
                    label={STRINGS.EMPLOYEE_FORM.PASSWORD}
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
            {STRINGS.PRIVACY_POLICY}

            <Text
              style={styles.linkButton}
              onPress={() => Linking.openURL(LINK_PREFIX.PRIVACY_POLICY)}
            >
              {STRINGS.PRIVACY_POLICY_LINK}
            </Text>
          </Text>
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>{STRINGS.ICON_TITLES.SAVE}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddEmployee;
