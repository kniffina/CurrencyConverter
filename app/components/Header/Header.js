import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const Header = ({ onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Image resizeMode="contain" source={require('./images/gear.png')} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

export default Header;