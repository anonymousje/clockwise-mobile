import { useRef, useEffect, useState } from 'react';
import { Animated, Appearance, TextInput } from 'react-native';
import { COLORS, MODE } from '../../../../constants/theme';

const useInputField = (value: string) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const isFocused = isInputFocused || !!value;
  const [isPassword, setIsPassword] = useState(true);

  const mode = Appearance.getColorScheme();
  const inputRef = useRef<TextInput>(null);

  const animatedIsFocused = useRef(
    new Animated.Value(isFocused ? 1 : 0),
  ).current;

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [animatedIsFocused, isFocused]);

  const labelStyle = {
    position: 'absolute',
    left: 2,
    opacity: 0.5,

    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [10, -15],
    }),

    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [17, 15],
    }),

    color: mode === MODE.DARK ? COLORS.TEXT_DARK_MODE : COLORS.TEXT_LIGHT_MODE,

    backgroundColor: 'transparent',
    zIndex: 1,
  };

  const labelStyleFocused = {
    color: COLORS.CLOCKWISE_PRIMARY,
    opacity: 1,
  };

  const changePasswordType = () => {
    setIsPassword(!isPassword);
  };

  return {
    labelStyle,
    isInputFocused,
    setIsInputFocused,
    isPassword,
    changePasswordType,
    inputRef,
    labelStyleFocused,
  };
};

export default useInputField;
