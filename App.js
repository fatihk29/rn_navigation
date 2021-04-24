import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import TopBarNavigation from './Navigation/TopBar';
import BottomBarNavigation from './Navigation/BottomTab';
import StackNavigator from './Navigation/StackNavigation';
import DrawerNavigation from './Navigation/Drawer';
import RouteParamsNavigation from './Navigation/RoutepParams';

export default function App() {
  return (
    <SafeAreaProvider>
      <TopBarNavigation />
    </SafeAreaProvider>
  );
}
