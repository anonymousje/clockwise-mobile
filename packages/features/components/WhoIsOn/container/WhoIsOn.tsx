import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/WhoIsOn.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COMMON_CONSTANTS from '../../../../constants/CommonConstants';
import { COLORS } from '../../../../constants/theme';
import useWhoIsOn from '../hooks/useWhoIsOn';
import { getInitials } from '../../../../utils/helper';

const WhoIsOn = () => {
  const { whoIsOnList } = useWhoIsOn();
  return (
    <View style={styles.container}>
      <View style={styles.widgetHeaderContainer}>
        <Ionicons
          name='time-outline'
          style={styles.iconStyle}
          size={COMMON_CONSTANTS.SIZE.SIZE_24}
          color={COLORS.CLOCKWISE_PRIMARY}
        />
        <Text style={styles.title}> Who Is On Now </Text>
      </View>

      <View style={styles.widgetListContainer}>
        <View style={styles.widgetListItem}>
          <View style={styles.avatarIconContainer}>
            <Text style={styles.avatarText}>
              {getInitials(whoIsOnList[0].name)}
            </Text>
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{whoIsOnList[0].name}</Text>
          </View>
        </View>

        <View style={styles.widgetListItem}>
          <View style={styles.avatarIconContainer}>
            <Text style={styles.avatarText}>
              {getInitials(whoIsOnList[1].name)}
            </Text>
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{whoIsOnList[1].name}</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomBorder}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.bottomText}>SEE MORE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WhoIsOn;
