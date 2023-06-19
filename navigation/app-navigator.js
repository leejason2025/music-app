import React from 'react';
import {
  Image,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../screens/home';
import logo from '../assets/logo.png';

function LogoTitle() {
  return (
    <Image
      style={{
        width: 40, height: 40,
      }}
      source={logo}
    />
  );
}

export function AppNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      />
    </Stack.Navigator>
  );
}
