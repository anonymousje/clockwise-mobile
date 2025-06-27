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

//Main Functions
export default function ForgotPassword() {
  const { email, setEmail, handleSubmit } = useForgotPasswordScreen();

  const mode = Appearance.getColorScheme();
  //UI
  return (
    <View style={styles.container}>
      {/*Page Title*/}
      <Text style={styles.header}>Enter Your Email</Text>

      {/*Username Input*/}
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={mode == 'light' ? 'black' : 'white'}
        value={email}
        onChangeText={setEmail}
      />

      {/*SUbmit Button*/}

      <View style={{ width: '100%' }}>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>RESET PASSWORD</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
