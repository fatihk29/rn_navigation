import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import styles from './style';

const Header = ({navigation, title}) => {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      {/* icon for the menu */}
      <TouchableOpacity onPress={openMenu} style={styles.icons}>
        <Text>HEADERICON</Text>
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
