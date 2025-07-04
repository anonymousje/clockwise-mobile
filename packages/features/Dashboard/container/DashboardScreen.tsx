import { View, Text, Button } from 'react-native';
import styles from '../styles/Dashboard.styles';

import useDashboardScreen from '../hooks/useDashboardScreen';

export default function Dashboard() {
  const { handleBack, user } = useDashboardScreen();
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Dashboard Under Construction </Text>

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
      <Button title='logout' onPress={handleBack} />
    </View>
  );
}
