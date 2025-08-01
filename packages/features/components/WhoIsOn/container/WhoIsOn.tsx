import { Text, TouchableOpacity, View, Modal } from 'react-native';
import styles from '../styles/WhoIsOn.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COMMON_CONSTANTS from '../../../../constants/CommonConstants';
import { COLORS } from '../../../../constants/theme';
import useWhoIsOn from '../hooks/useWhoIsOn';
import { formatTimeFromISOString, getInitials } from '../../../../utils/helper';

const WhoIsOn = () => {
  const { whoIsOnList, showModal, setShowModal } = useWhoIsOn();
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
              {whoIsOnList[0] ? getInitials(whoIsOnList[0].name) : ''}
            </Text>
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{whoIsOnList[0]?.name || ''}</Text>
          </View>
        </View>

        <View style={styles.widgetListItem}>
          <View style={styles.avatarIconContainer}>
            <Text style={styles.avatarText}>
              {whoIsOnList[1] ? getInitials(whoIsOnList[1].name) : ''}
            </Text>
          </View>

          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>{whoIsOnList[1]?.name || ''}</Text>
          </View>
        </View>
      </View>

      <View style={styles.bottomBorder}>
        <TouchableOpacity
          onPress={() => {
            setShowModal(true);
          }}
        >
          <Text style={styles.bottomText}>SEE MORE</Text>
        </TouchableOpacity>
      </View>
      <Modal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Who Is On Now</Text>
          <TouchableOpacity onPress={() => setShowModal(false)}>
            {whoIsOnList.map((user, index) => (
              <View
                key={index}
                style={styles.modalListItem}
              >
                <View style={styles.modalAvatarIconContainer}>
                  <Text style={styles.modalAvatarText}>
                    {getInitials(
                      user.name.split(' ')[0],
                      user.name.split(' ')[1],
                    )}
                  </Text>
                </View>
                <View style={styles.modalDetailsContainer}>
                  <View style={styles.modalNameContainer}>
                    <Text style={styles.modalNameText}>{user.name}</Text>
                    <Text style={styles.modalShiftText}>
                      {user.shiftStartTime
                        ? `Shift: ${user.shiftStartTime} - ${user.shiftEndTime}`
                        : 'No shift'}
                    </Text>
                  </View>

                  <View>
                    <Text style={styles.clockInTimeText}>
                      {formatTimeFromISOString(user.clockInTime)}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default WhoIsOn;
