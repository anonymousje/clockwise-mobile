import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from '../styles/SplashScreen.styles';

import { COLORS } from '../../../constants/theme';
import useSplashScreen from '../hooks/useSplashScreen';

const SplashScreen = () => {
  useSplashScreen();

  return (
    <View style={styles.container}>
      <ActivityIndicator
        size='large'
        color={COLORS.CLOCKWISE_PRIMARY}
      />
    </View>
  );
};

export default SplashScreen;
