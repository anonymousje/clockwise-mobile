import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import useClock from '../hooks/useClock';
import { styles } from '../styles/Clock.styles';
import STRINGS from '../../../../utils/strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../Button/container/Button';

const Clocking = (refreshFlag: { refreshFlag: boolean }) => {
  const {
    clockIn,
    handleClockOperation,
    clockTime,
    handleBreak,
    handleNoteChange,
    setModal,
    modalVisible,
  } = useClock(refreshFlag);

  return (
    <View style={styles.container}>
      {!clockIn && (
        <View style={styles.clockInContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleClockOperation}
              style={styles.button}
            >
              <Text style={styles.ButtonText}>
                {STRINGS.BUTTON_TEXT.CLOCK_IN}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {clockIn && (
        <>
          <View style={styles.clockIconBackground}>
            <Ionicons
              name='alarm-outline'
              size={200}
              color='grey'
              style={styles.icon}
            />
          </View>

          <View>
            <View>
              <Text style={styles.titleText}>{STRINGS.HEADERS.CLOCK_IN}</Text>
              <Text style={styles.timeText}>{clockTime}</Text>
            </View>

            <View style={styles.clockOutButtonContainer}>
              <TouchableOpacity
                onPress={handleBreak}
                style={styles.breakButton}
              >
                <Text style={styles.ButtonText}>
                  {STRINGS.BUTTON_TEXT.BREAK}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={setModal}
                style={styles.clockOutButton}
              >
                <Text style={styles.ButtonText}>
                  {STRINGS.BUTTON_TEXT.CLOCK_OUT}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}

      <Modal
        visible={modalVisible}
        animationType='slide'
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={setModal}>
              <Ionicons
                name='arrow-back-outline'
                size={24}
                color='white'
                style={styles.headerIcon}
              />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{STRINGS.HEADERS.NOTE}</Text>
          </View>

          <View style={styles.noteContainer}>
            <TextInput
              style={styles.noteInput}
              placeholder={STRINGS.PLACEHOLDER.NOTE}
              onChangeText={handleNoteChange}
              multiline={true}
            />
            <Button
              label={STRINGS.ICON_TITLES.ADD}
              onPress={handleClockOperation}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Clocking;
