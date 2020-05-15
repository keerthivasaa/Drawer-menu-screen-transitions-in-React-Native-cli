import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Drawer from './Drawer';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer/> 
    </NavigationContainer>
  );
}
