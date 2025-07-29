import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles/Button.styles';
import { ButtonProps } from '../../../types';
import { COLORS } from '../../../../constants/theme';

const Button = ({
  onPress,
  label,
  color = COLORS.CLOCKWISE_PRIMARY,
  style = {},
}: ButtonProps) => {
  return (
    <>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={onPress}
          style={[styles.button, { backgroundColor: color }, style]}
        >
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Button;
