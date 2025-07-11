import React from 'react';
import {
  View,
  TextInput,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';
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
  const {
    labelStyle,
    isInputFocused,
    setIsInputFocused,
    isPassword,
    changePwdType,
  } = useInputField(value);

  if (!props.secureTextEntry) {
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
  } else {
    return (
      <View>
        <Animated.Text style={labelStyle as any}>{label}</Animated.Text>
        <View style={styles.passwordRow}>
          <TextInput
            style={styles.inputPassword}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isPassword}
          />
          <TouchableOpacity onPress={changePwdType}>
            <Text style={styles.showPasswordButton}>
              {isPassword ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
