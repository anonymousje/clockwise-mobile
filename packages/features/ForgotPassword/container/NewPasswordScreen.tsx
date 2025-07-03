//Imports
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Appearance,
  Modal,
} from 'react-native';

import styles from '../styles/ForgotPasswordScreen.styles';
import useNewPasswordScreen from '../hooks/useNewPasswordScreen';
import { colors } from '../../theme';

export default function NewPassword() {
  const {
    newPassword,
    confirmPassword,
    setNewPassword,
    setConfirmPassword,
    handleSubmit,
    changePwdType,
    isPassword,
    isConfirmPassword,
    changeConfirmPwdType,
    match,
    success,
    errorMsg,
    handleBack,
    setErrorMsg,
  } = useNewPasswordScreen();

  const modeAuto = Appearance.getColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter New Password</Text>

      <View style={styles.form}>
        <View style={styles.NewPasswordRow}>
          <TextInput
            style={styles.inputPassword}
            placeholder='New Password'
            placeholderTextColor={modeAuto === 'light' ? 'black' : 'white'}
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={isPassword}
            autoCapitalize='none'
          />
          <TouchableOpacity onPress={changePwdType}>
            <Text style={styles.showPassButton}>
              {isPassword ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ConfirmPasswordRow}>
          <TextInput
            style={styles.inputPassword}
            placeholder='Confirm New Password'
            placeholderTextColor={modeAuto === 'light' ? 'black' : 'white'}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={isConfirmPassword}
          />
          <TouchableOpacity onPress={changeConfirmPwdType}>
            <Text style={styles.showPassButton}>
              {isConfirmPassword ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        </View>

        {!match && <Text style={styles.errorMsg}>Passwords do not match</Text>}

        <Modal visible={!!errorMsg} transparent={true} animationType='fade'>
          <View style={styles.modalContainer}>
            <View style={styles.popupBox}>
              <Text style={styles.popUpBoxText}>Error resetting password</Text>
              <TouchableOpacity
                style={styles.popupButton}
                onPress={() => setErrorMsg(false)}
              >
                <Text style={styles.popupButtonText}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal visible={success} transparent={true} animationType='fade'>
          <View style={styles.modalContainer}>
            <View style={styles.popupBox}>
              <Text style={styles.popUpBoxText}>
                Password reset successfully!
              </Text>
              <TouchableOpacity style={styles.popupButton} onPress={handleBack}>
                <Text style={styles.popupButtonText}>Go to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>RESET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
