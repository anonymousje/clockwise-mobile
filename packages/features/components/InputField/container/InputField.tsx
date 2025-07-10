import React from 'react';
import { View, TextInput, Animated, Text } from 'react-native';
import { InputFieldProps } from '../../../types';
import { styles } from '../styles/InputField.styles';
import useInputField from '../hooks/useInputField';

export default function InputField({
  label,
  value,
  error,
  onChangeText,
  ...props
}: InputFieldProps) {
  const { labelStyle, isInputFocused, setIsInputFocused } =
    useInputField(value);

  return (
    <View style={styles.inputField}>
      <View>
        <Animated.Text style={labelStyle as any}>{label}</Animated.Text>
        <TextInput
          {...props}
          value={value}
          onChangeText={onChangeText}
          style={[
            styles.input,
            error && styles.inputError,
            isInputFocused && styles.inputFocused,
          ]}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
      </View>
      {error ? <Text style={styles.errorMsg}>{error}</Text> : null}
    </View>
  );
}
