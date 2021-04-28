import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './styles';

function Home() {
  return (
    <View style={styles.home}>
      <Text style={{fontSize: 20, color: '#ffffff', fontWeight: '800'}}>
        Home is here!
      </Text>
    </View>
  );
}

function Contact({navigation}) {
  return (
    <View style={styles.contact}>
      <Text style={{fontSize: 20, color: '#ffffff', fontWeight: '800'}}>
        Contact is here!
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function About({navigation}) {
  return (
    <View style={styles.about}>
      <Text style={{fontSize: 20, color: '#ffffff', fontWeight: '800'}}>
        About is here!
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91e63',
        labelStyle: {fontSize: 12},
        style: {backgroundColor: 'white', marginTop: 10},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{tabBarLabel: 'Contact'}}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{tabBarLabel: 'Updates'}}
      />
    </Tab.Navigator>
  );
}
export default function TopBarNavigation() {
  return (
    // Remove in case of stack navigators !IMPORTANT
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
