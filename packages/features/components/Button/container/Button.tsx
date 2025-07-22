import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/Button.styles';
import { ButtonProps } from '../../../types';
import { colors } from '../../../theme';

export default function Button({
  onPress,
  label,
  color = colors.CLOCKWISE_PRIMARY,
}: ButtonProps) {
  return (
    <>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onPress}
          style={[styles.button, { backgroundColor: color }]}
        >
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
