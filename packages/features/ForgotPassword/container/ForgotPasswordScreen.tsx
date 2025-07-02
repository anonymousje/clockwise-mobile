//Imports
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Appearance,
} from 'react-native';
import styles from '../styles/ForgotPasswordScreen.styles';
import useForgotPasswordScreen from '../hooks/useForgotPasswordScreen';

export default function ForgotPassword() {
  const { email, setEmail, handleSubmit } = useForgotPasswordScreen();

  const mode = Appearance.getColorScheme();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enter Your Email</Text>

      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor={mode === 'light' ? 'black' : 'white'}
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>RESET PASSWORD</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
