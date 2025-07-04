//Imports
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Appearance,
  Modal,
  ActivityIndicator,
} from 'react-native';
import styles from '../styles/ForgotPasswordScreen.styles';
import useForgotPasswordScreen from '../hooks/useForgotPasswordScreen';
import { colors } from '../../theme';

export default function ForgotPassword() {
  const {
    email,
    setEmail,
    isValidEmail,
    handleSubmit,
    success,
    loading,
    handleBack,
  } = useForgotPasswordScreen();

  const mode = Appearance.getColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter Your Email</Text>
      {!isValidEmail && (
        <Text style={styles.errorMsg}>Please enter a valid email address.</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor={mode === 'light' ? 'black' : 'white'}
        value={email}
        onChangeText={setEmail}
      />

      <Modal visible={success} transparent={true} animationType='fade'>
        <View style={styles.modalContainer}>
          <View style={styles.popupBox}>
            <Text style={styles.popUpBoxText}>
              {`If ${email} is registered, you will receive a password reset link.`}
            </Text>

            <TouchableOpacity style={styles.popupButton} onPress={handleBack}>
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>RESET PASSWORD</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
