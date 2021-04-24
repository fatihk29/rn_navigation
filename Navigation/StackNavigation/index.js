import React from 'react';
import {View, Button, Text, Animated} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import styles from '../../src/components/Header/style';

function Home({navigation}) {
  return (
    <View style={styles.home}>
      <Text style={styles.text}>Home is here!</Text>
      <Button
        title="Go to Contact"
        onPress={() => navigation.navigate('Contact')}
      />
    </View>
  );
}

function Contact({navigation}) {
  return (
    <View style={styles.contact}>
      <Text style={styles.contact}>Contact is here!</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
}

function About({navigation}) {
  return (
    <View style={styles.about}>
      <Text style={styles.text}>About is here!</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const forFade = ({current, next}) => {
  const opacity = Animated.add(
    current.progress,
    next ? next.progress : 0,
  ).interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 1, 0],
  });

  return {
    leftButtonStyle: {opacity},
    rightButtonStyle: {opacity},
    titleStyle: {opacity},
    backgroundStyle: {opacity},
  };
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'green'},
        }}
      />
      <Stack.Screen
        name="Contact"
        component={Contact}
        options={{headerStyleInterpolator: forFade}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerStyleInterpolator: forFade}}
      />
    </Stack.Navigator>
  );
}

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
