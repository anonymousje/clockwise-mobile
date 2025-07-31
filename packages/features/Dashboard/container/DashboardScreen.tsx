import { ScrollView, TouchableOpacity, View } from 'react-native';
import styles from '../styles/Dashboard.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Clocking from '../../components/Clocking/container/Clock';
import { Text } from 'react-native-gesture-handler';
import { RefreshControl } from 'react-native-gesture-handler';
import { FONT_SIZE, COLORS } from '../../../constants/theme';
import STRINGS from '../../../utils/strings';
import useDashboard from '../hooks/useDashboardScreen';
import COMMON_CONSTANTS from '../../../constants/CommonConstants';

const Dashboard = () => {
  const { logout, onRefresh, refreshing, refreshFlag } = useDashboard();
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContainer}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
        />
      }
    >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{STRINGS.TITLES.DASHBOARD}</Text>
          <View style={styles.iconContainer}>
            <Ionicons
              name={COMMON_CONSTANTS.ICONS.SETTINGS}
              size={FONT_SIZE.SIZE_24}
              color={COLORS.CLOCKWISE_PRIMARY}
            />

            <TouchableOpacity onPress={logout}>
              <Ionicons
                name={COMMON_CONSTANTS.ICONS.LOG_OUT}
                size={FONT_SIZE.SIZE_24}
                color={COLORS.CLOCKWISE_PRIMARY}
              />
            </TouchableOpacity>
          </View>
        </View>

        <Clocking refreshFlag={refreshFlag} />

        <View style={styles.widgetContainer}>
          <Text>{STRINGS.PLACEHOLDER.PLACEHOLDER_TEXT}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;
