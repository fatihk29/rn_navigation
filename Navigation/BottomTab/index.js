import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Platform} from 'react-native';

// import TopBarNavigation from './TopBarNavigation';

function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#03cafc',
      }}>
      <Text style={{fontSize: 20, color: '#ffffff', fontWeight: '800'}}>
        Home is here!
      </Text>
    </View>
  );
}

function Contact({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#c203fc',
      }}>
      <Text style={{fontSize: 20, color: '#ffffff', fontWeight: '800'}}>
        Contact is here!
      </Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function About({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#48d969',
      }}>
      <Text style={{fontSize: 20, color: '#ffffff', fontWeight: '800'}}>
        About is here!
      </Text>
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
        activeTintColor: '#e91e63',
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
