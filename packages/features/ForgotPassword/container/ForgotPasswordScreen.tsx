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
import { COLORS, MODE } from '../../../constants/theme';
import STRINGS from '../../../utils/strings';
import { stringFormat } from '../../../utils/helper';

const ForgotPassword = () => {
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
      <Text style={styles.header}>{STRINGS.HEADERS.ENTER_EMAIL}</Text>

      {!isValidEmail && (
        <Text style={styles.errorMsg}>{STRINGS.ERROR.ENTER_EMAIL_ERROR}</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder={STRINGS.INPUT_PLACEHOLDER_TEXT.EMAIL}
        placeholderTextColor={
          mode === MODE.LIGHT ? COLORS.TEXT_LIGHT_MODE : COLORS.TEXT_DARK_MODE
        }
        value={email}
        onChangeText={setEmail}
      />

      <Modal
        visible={success}
        transparent={true}
        animationType='fade'
      >
        <View style={styles.modalContainer}>
          <View style={styles.popupBox}>
            <Text style={styles.popUpBoxText}>
              {stringFormat(STRINGS.RESET_PASSWORD_EMAIL, email)}
            </Text>

            <TouchableOpacity
              style={styles.popupButton}
              onPress={handleBack}
            >
              <Text style={styles.popupButtonText}>
                {STRINGS.BUTTON_TEXT.GO_TO_LOGIN}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {loading ? (
        <ActivityIndicator
          size='large'
          color={COLORS.CLOCKWISE_PRIMARY}
          style={styles.loader}
        />
      ) : (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSubmit}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>
                {STRINGS.BUTTON_TEXT.RESET_PASSWORD}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default ForgotPassword;
