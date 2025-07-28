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
import STRINGS from '../../../../utils/strings';

const InputField = ({
  label,
  value,
  error,
  onChangeText,
  ...props
}: InputFieldProps) => {
  const {
    labelStyle,
    labelStyleFocused,
    isInputFocused,
    setIsInputFocused,
    isPassword,
    changePwdType,
    inputRef,
  } = useInputField(value);

  if (!props.secureTextEntry) {
    return (
      <View style={styles.inputContainer}>
        <View>
          <Animated.Text
            style={[labelStyle as any, isInputFocused && labelStyleFocused]}
          >
            {label}
          </Animated.Text>

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
      <View style={styles.inputContainer}>
        <Animated.Text style={labelStyle as any}>{label}</Animated.Text>

        <View
          style={[
            styles.passwordContainer,
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
              {isPassword ? STRINGS.ICON_TITLES.SHOW : STRINGS.ICON_TITLES.HIDE}
            </Text>
          </TouchableOpacity>
        </View>

        {error ? <Text style={styles.errorMsg}>{error}</Text> : null}
      </View>
    );
  }
};

export default InputField;
