import React, { useRef } from 'react';
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

  const inputRef = useRef<TextInput>(null);

  if (!props.secureTextEntry) {
    return (
      <View style={styles.inputField}>
        <View>
          <Animated.Text style={labelStyle as any}>{label}</Animated.Text>

          <TextInput
            {...props}
            ref={inputRef}
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
      <View style={styles.inputField}>
        <Animated.Text style={labelStyle as any}>{label}</Animated.Text>

        <View
          style={[
            styles.passwordRow,
            error && styles.inputError,
            isInputFocused && styles.inputFocused,
          ]}
        >
          <TextInput
            ref={inputRef}
            style={styles.inputPassword}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={isPassword}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
          />

          <TouchableOpacity onPress={changePwdType}>
            <Text style={styles.showPasswordButton}>
              {isPassword ? 'Show' : 'Hide'}
            </Text>
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.errorMsg}>{error}</Text> : null}
      </View>
    );
  }
}
