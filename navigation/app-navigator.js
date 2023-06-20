import React from 'react';
import {
  Image,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import logo from '../assets/logo.png';
import { Home } from '../screens/home';

export function AppNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
