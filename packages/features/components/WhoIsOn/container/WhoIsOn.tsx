import { Text, TouchableOpacity, View, Modal } from 'react-native';
import styles from '../styles/WhoIsOn.styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COMMON_CONSTANTS from '../../../../constants/CommonConstants';
import { COLORS } from '../../../../constants/theme';
import useWhoIsOn from '../hooks/useWhoIsOn';
import { formatTimeFromISOString, getInitials } from '../../../../utils/helper';
import STRINGS from '../../../../utils/strings';

const WhoIsOn = () => {
  const { whoIsOnList, showModal, setShowModal, handleUserPress } =
    useWhoIsOn();

  const displayUserUI = () => {
    return (
      <>
        {whoIsOnList.slice(0, 2).map((user, index) => (
          <View
            style={styles.widgetListContainer}
            key={index}
          >
            <View style={styles.widgetListItem}>
              <View style={styles.avatarIconContainer}>
                <Text style={styles.avatarText}>{getInitials(user.name)}</Text>
              </View>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{user?.name}</Text>
              </View>
            </View>
          </View>
        ))}
        <View style={styles.bottomBorder}>
          <TouchableOpacity
            onPress={() => {
              setShowModal(true);
            }}
          >
            <Text style={styles.bottomText}>
              {STRINGS.BUTTON_TEXT.SEE_MORE}
            </Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.widgetHeaderContainer}>
        <Ionicons
          name={COMMON_CONSTANTS.ICONS.CLOCK}
          style={styles.iconStyle}
          size={COMMON_CONSTANTS.SIZE.SIZE_24}
          color={COLORS.CLOCKWISE_PRIMARY}
        />
        <Text style={styles.title}> {STRINGS.HEADERS.WHO_IS_ON_NOW} </Text>
      </View>

      {whoIsOnList.length > COMMON_CONSTANTS.ZERO && displayUserUI()}

      {whoIsOnList.length === COMMON_CONSTANTS.ZERO && (
        <Text style={styles.noDataText}>{STRINGS.NO_USERS_ONLINE}</Text>
      )}

      <Modal
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeaderContainer}>
            <Text style={styles.modalTitle}>
              {STRINGS.HEADERS.WHO_IS_ON_NOW}
            </Text>
            <Ionicons
              name={COMMON_CONSTANTS.ICONS.CLOSE}
              size={COMMON_CONSTANTS.SIZE.SIZE_30}
              color={COLORS.CLOCKWISE_PRIMARY}
              onPress={() => setShowModal(false)}
            />
          </View>
          <View>
            {whoIsOnList.map((user, index) => (
              <TouchableOpacity
                key={index}
                onPress={handleUserPress}
              >
                <View style={styles.modalListItem}>
                  <View style={styles.modalAvatarIconContainer}>
                    <Text style={styles.modalAvatarText}>
                      {getInitials(`${user.name}`)}
                    </Text>
                  </View>
                  <View style={styles.modalDetailsContainer}>
                    <View style={styles.modalNameContainer}>
                      <Text style={styles.modalNameText}>{user.name}</Text>
                      <Text style={styles.modalShiftText}>
                        {user.shiftStartTime
                          ? `${STRINGS.SHIFT}: ${user.shiftStartTime} - ${user.shiftEndTime}`
                          : STRINGS.NO_SHIFT}
                      </Text>
                    </View>

                    <View>
                      <Text style={styles.clockInTimeText}>
                        {formatTimeFromISOString(user.clockInTime)}
                      </Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default WhoIsOn;
