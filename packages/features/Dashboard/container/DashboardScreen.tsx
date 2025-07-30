import { TouchableOpacity, View } from 'react-native';
import styles from '../styles/Dashboard.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clocking from '../../components/Clocking/container/Clock';
import { Text } from 'react-native-gesture-handler';
import { FONT_SIZE, COLORS } from '../../../constants/theme';
import STRINGS from '../../../utils/strings';
import useDashboard from '../hooks/useDashboardScreen';

const Dashboard = () => {
  const { logout } = useDashboard();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{STRINGS.TITLES.DASHBOARD}</Text>
        <View style={styles.iconContainer}>
          <Ionicons
            name='settings-outline'
            size={FONT_SIZE.SIZE_24}
            color={COLORS.CLOCKWISE_PRIMARY}
          />

          <TouchableOpacity onPress={logout}>
            <Ionicons
              name='log-out-outline'
              size={FONT_SIZE.SIZE_24}
              color={COLORS.CLOCKWISE_PRIMARY}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Clocking />

      <View style={styles.widgetContainer}>
        <Text>PlaceHolder</Text>
      </View>
    </View>
  );
};

export default Dashboard;
