import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import AppNavigator from './src/navigations/AppNavigator';
import CardDetailsScreen from './src/screens/CardDetailsScreen';
import LikeScreen from './src/screens/LikeScreen';

export default function App() {
  return (
    <AppNavigator />
    // <CardDetailsScreen />
    // <LikeScreen/>
  );
}