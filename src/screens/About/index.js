import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from '../../components/Header';
import styles from './style';

export default function About({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="About" hasBackButton={true} navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>About is here!</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
