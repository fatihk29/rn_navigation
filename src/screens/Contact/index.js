import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';

export default function Contact({navigation}) {
  return (
    <View style={styles.container}>
      <Header title="Contact" hasBackButton={true} navigation={navigation} />
      <View style={styles.content}>
        <Text style={styles.text}>Contact is here!</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </View>
  );
}
