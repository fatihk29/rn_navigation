import React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from '../../src/components/Header/style';

function Home() {
  return (
    <View style={styles.home}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

function Contact({navigation}) {
  return (
    <View style={styles.contact}>
      <Text style={styles.text}>Contact Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function About({navigation}) {
  return (
    <View style={styles.about}>
      <Text style={styles.text}>About Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#e91',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => <Text>Home</Text>,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({color, size}) => <Text>Contact</Text>,
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          tabBarLabel: 'About',
          tabBarIcon: ({color, size}) => <Text>About</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

export default function TabNavigation() {
  return (
    <NavigationContainer independent={true}>
      <MyTabs />
    </NavigationContainer>
  );
}
