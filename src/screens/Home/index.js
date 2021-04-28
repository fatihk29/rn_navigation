import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from '../../components/Header';
import App from '../../../Navigation/TopBar';
import styles from './style';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Home" navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>Home is here!</Text>
        <Button title="Main Menu" onPress={() => navigation.navigate(App)} />
      </View>
    </View>
  );
}
