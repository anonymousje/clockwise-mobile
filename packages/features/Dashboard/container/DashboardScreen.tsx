import { View, Text } from 'react-native';
import styles from '../styles/Dashboard.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export default function Dashboard() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Dashboard Under Construction </Text>
      <Text style={styles.subtitle}>Here, have a cookie! 🍪</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}> Email:</Text>
        <Text style={styles.value}>{user.email}</Text>

        <Text style={styles.label}> Access Token:</Text>
        <Text style={styles.value}>{user.accessToken}</Text>

        <Text style={styles.label}> Refresh Token:</Text>
        <Text style={styles.value}>{user.refreshToken}</Text>

        <Text style={styles.label}> Role:</Text>
        <Text style={styles.value}>{user.role}</Text>
      </View>
    </View>
  );
}
