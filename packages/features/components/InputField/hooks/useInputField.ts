import { useRef, useEffect, useState } from 'react';
import { Animated, Appearance } from 'react-native';
import { colors } from '../../../theme';

export default function useInputField(value: string) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const isFocused = isInputFocused || !!value;
  const [isPassword, setIsPassword] = useState(true);

  const mode = Appearance.getColorScheme();

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
    left: 8,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [10, -20],
    }),

    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 14],
    }),

    color: mode === 'dark' ? colors.TEXT_DARK_MODE : colors.TEXT_LIGHT_MODE,

    backgroundColor: 'transparent',
    paddingHorizontal: 2,
    zIndex: 1,
  };
  function changePwdType() {
    setIsPassword((prevState) => !prevState);
  }

  return {
    labelStyle,
    isInputFocused,
    setIsInputFocused,
    isPassword,
    changePwdType,
  };
}
