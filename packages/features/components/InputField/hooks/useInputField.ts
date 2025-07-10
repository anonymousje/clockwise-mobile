import { useRef, useEffect, useState } from 'react';
import { Animated } from 'react-native';

export default function useInputField(value: string) {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const isFocused = isInputFocused || !!value;

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

    color: '#aaa',
    backgroundColor: 'transparent',
    paddingHorizontal: 2,
    zIndex: 1,
  };
  return { labelStyle, isInputFocused, setIsInputFocused };
}
