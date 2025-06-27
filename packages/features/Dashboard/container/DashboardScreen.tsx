import { View, Text } from 'react-native';
import styles from '../styles/Dashboard.styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
export default function Dashboard() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <View style={styles.container}>
      <Text>
        Dashboard Under Construction, Here have a Cookie *insert cookie emoji*
      </Text>
      <Text>Your email is: {user.email}</Text>
      <Text>
        ps ur access token is:
        {user.accessToken}
      </Text>
      <Text>
        and ur refresh token is
        {user.refreshToken}
      </Text>
    </View>
  );
}
