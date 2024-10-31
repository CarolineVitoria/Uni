import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar ></StatusBar>
      <Routes/>
    </NavigationContainer>
  );
}


