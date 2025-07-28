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
import { colors } from '../../../constants/theme';
import { modeColor } from '../styles/ForgotPasswordScreen.styles';
import STRINGS from '../../../utils/strings';

const NewPassword = () => {
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
      <Text style={styles.header}>{STRINGS.ENTER_NEW_PASSWORD}</Text>

      <View style={styles.form}>
        {!match && (
          <Text style={styles.errorMsg}>{STRINGS.VALIDATIONS.MATCH_ERROR}</Text>
        )}

        <View style={styles.NewPasswordRow}>
          <TextInput
            style={styles.inputPassword}
            placeholder={STRINGS.INPUT_PLACEHOLDER_TEXT.NEW_PASSWORD}
            placeholderTextColor={modeColor}
            value={newPassword}
            onChangeText={setNewPassword}
            secureTextEntry={isPassword}
            autoCapitalize='none'
          />

          <TouchableOpacity onPress={changePwdType}>
            <Text style={styles.showPassButton}>
              {isPassword ? STRINGS.ICON_TITLES.SHOW : STRINGS.ICON_TITLES.HIDE}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.ConfirmPasswordRow}>
          <TextInput
            style={styles.inputPassword}
            placeholder={STRINGS.INPUT_PLACEHOLDER_TEXT.CONFIRM_PASSWORD}
            placeholderTextColor={modeColor}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry={isConfirmPassword}
          />

          <TouchableOpacity onPress={changeConfirmPwdType}>
            <Text style={styles.showPassButton}>
              {isConfirmPassword
                ? STRINGS.ICON_TITLES.SHOW
                : STRINGS.ICON_TITLES.HIDE}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.rulesContainer}>
          <Text style={styles.rulesText}>{STRINGS.VALIDATIONS.TITLE}</Text>

          {!isLength && (
            <Text style={styles.rulesText}>• {STRINGS.VALIDATIONS.LENGTH}</Text>
          )}

          {!isSpecialChar && (
            <Text style={styles.rulesText}>
              • {STRINGS.VALIDATIONS.SPECIAL_CHAR}
            </Text>
          )}

          {!isUppercase && (
            <Text style={styles.rulesText}>
              • {STRINGS.VALIDATIONS.UPPERCASE}
            </Text>
          )}

          {!isNumber && (
            <Text style={styles.rulesText}>• {STRINGS.VALIDATIONS.NUMBER}</Text>
          )}
        </View>

        <Modal
          visible={!!errorMsg}
          transparent={true}
          animationType='fade'
        >
          <View style={styles.modalContainer}>
            <View style={styles.popupBox}>
              <Text style={styles.popUpBoxText}>{STRINGS.ERROR.DEFAULT}</Text>

              <TouchableOpacity
                style={styles.popupButton}
                onPress={() => setErrorMsg(false)}
              >
                <Text style={styles.popupButtonText}>
                  {STRINGS.ICON_TITLES.CLOSE}
                </Text>
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
                {STRINGS.RESET_PASSWORD_SUCCESS}
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
            color={colors.CLOCKWISE_PRIMARY}
            style={styles.loader}
          />
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>{STRINGS.ICON_TITLES.RESET}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default NewPassword;
