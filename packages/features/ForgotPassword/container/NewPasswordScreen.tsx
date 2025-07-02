//Imports
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Appearance,
} from 'react-native';
import styles from '../styles/ForgotPasswordScreen.styles';
import useNewPasswordScreen from '../hooks/useNewPasswordScreen';

export default function NewPassword() {
  const {
    password,
    confirmPassword,
    setPassword,
    setConfirmPassword,
    handleSubmit,
    changePwdType,
    isPassword,
  } = useNewPasswordScreen();

  const modeAuto = Appearance.getColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter New Password</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='New Password'
          placeholderTextColor={modeAuto === 'light' ? 'black' : 'white'}
          value={password}
          onChangeText={setPassword}
          autoCapitalize='none'
        />

        {/*!isValid && <Text style={styles.errorMsg}>Email is invalid</Text>*/}

        <View style={styles.passwordRow}>
          <TextInput
            style={styles.inputPassword}
            placeholder='Confirm New Password'
            placeholderTextColor={modeAuto === 'light' ? 'black' : 'white'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={isPassword}
          />
          <TouchableOpacity onPress={changePwdType}>
            <Text style={styles.showPassButton}>
              {isPassword ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
