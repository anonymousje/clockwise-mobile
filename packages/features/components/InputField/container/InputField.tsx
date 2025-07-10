import React from 'react';
import { View, TextInput, Animated, Text, Pressable } from 'react-native';
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

  return (
    <View style={styles.inputField}>
      <View>
        <Animated.Text style={labelStyle as any}>{label}</Animated.Text>
        <View
          style={[
            props.secureTextEntry && styles.inputPassword,
            { position: 'relative' },
          ]}
          pointerEvents='box-none' // <-- Add this line
        >
          <TextInput
            {...props}
            value={value}
            onChangeText={onChangeText}
            style={[
              styles.input,
              error && styles.inputError,
              isInputFocused && styles.inputFocused,
              styles.inputPassword,
            ]}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            secureTextEntry={isPassword}
          />

          {props.secureTextEntry && (
            <Pressable
              onPressIn={changePwdType}
              focusable={false}
              style={styles.button}
              android_disableSound={true}
              pointerEvents='box-none'
            >
              <Text style={styles.showPassButton}>
                {isPassword ? 'Show' : 'Hide'}
              </Text>
            </Pressable>
          )}
        </View>
      </View>
      {error ? <Text style={styles.errorMsg}>{error}</Text> : null}
    </View>
  );
}
