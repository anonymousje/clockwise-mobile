//Imports
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';

import styles from '../styles/ForgotPasswordScreen.styles';
import useNewPasswordScreen from '../hooks/useNewPasswordScreen';
import { colors } from '../../theme';
import { modeColor } from '../styles/ForgotPasswordScreen.styles';

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
    loading,
    isUppercase,
    isSpecialChar,
    isNumber,
    isLength,
  } = useNewPasswordScreen();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter New Password</Text>

      <View style={styles.form}>
        {!match && <Text style={styles.errorMsg}>Passwords do not match</Text>}

        <View style={styles.NewPasswordRow}>
          <TextInput
            style={styles.inputPassword}
            placeholder='New Password'
            placeholderTextColor={modeColor}
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
            placeholderTextColor={modeColor}
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

        <View style={styles.rulesContainer}>
          <Text style={styles.rulesText}>Password must contain:</Text>
          {!isLength && (
            <Text style={styles.rulesText}>• At least 7 characters</Text>
          )}
          {!isSpecialChar && (
            <Text style={styles.rulesText}>• At least 1 special character</Text>
          )}
          {!isUppercase && (
            <Text style={styles.rulesText}>• At least 1 uppercase letter</Text>
          )}
          {!isNumber && (
            <Text style={styles.rulesText}>• At least 1 number</Text>
          )}
        </View>

        <Modal
          visible={!!errorMsg}
          transparent={true}
          animationType='fade'
        >
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
        <Modal
          visible={success}
          transparent={true}
          animationType='fade'
        >
          <View style={styles.modalContainer}>
            <View style={styles.popupBox}>
              <Text style={styles.popUpBoxText}>
                Password reset successfully!
              </Text>

              <TouchableOpacity
                style={styles.popupButton}
                onPress={handleBack}
              >
                <Text style={styles.popupButtonText}>Go to Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {loading ? (
          <ActivityIndicator
            size='large'
            color={colors.CLOCKWISE_PRIMARY}
            style={styles.loader}
          />
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
