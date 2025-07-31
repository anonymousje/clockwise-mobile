import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import useClock from '../hooks/useClock';
import { styles, iconColour } from '../styles/Clock.styles';
import STRINGS from '../../../../utils/strings';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../Button/container/Button';
import COMMON_CONSTANTS from '../../../../constants/CommonConstants';
import { COLORS } from '../../../../constants/theme';

const Clocking = (refreshFlag: { refreshFlag: boolean }) => {
  const {
    clockIn,
    handleClockOperation,
    clockTime,
    handleBreak,
    handleNoteChange,
    setModal,
    modalVisible,
    onBreak,
    breakTime,
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
              name={COMMON_CONSTANTS.ICONS.ALARM}
              size={COMMON_CONSTANTS.SIZE.SIZE_200}
              color={COLORS.GREY}
              style={styles.icon}
            />
          </View>

          <View>
            {!onBreak && (
              <>
                <View>
                  <Text style={styles.titleText}>
                    {STRINGS.HEADERS.CLOCK_IN}
                  </Text>
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
              </>
            )}

            {onBreak && (
              <>
                <View>
                  <Text style={styles.titleText}>{STRINGS.HEADERS.BREAK}</Text>
                  <Text style={styles.timeText}>{breakTime}</Text>
                </View>
                <View style={styles.clockOutButtonContainer}>
                  <TouchableOpacity
                    onPress={handleBreak}
                    style={styles.breakEndButton}
                  >
                    <Text style={styles.ButtonText}>
                      {STRINGS.BUTTON_TEXT.RESUME_SHIFT}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </>
      )}

      <Modal visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={setModal}>
              <Ionicons
                name={COMMON_CONSTANTS.ICONS.ARROW}
                size={COMMON_CONSTANTS.SIZE.SIZE_24}
                color={iconColour}
                style={styles.headerIcon}
              />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{STRINGS.HEADERS.NOTE}</Text>
          </View>

          <View style={styles.noteContainer}>
            <TextInput
              style={styles.noteInput}
              placeholder={STRINGS.INPUT_PLACEHOLDER_TEXT.NOTE}
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
