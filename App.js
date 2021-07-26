import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import AppNavigator from './src/navigations/AppNavigator';
import CardDetailsScreen from './src/screens/CardDetailsScreen';
import LikeScreen from './src/screens/LikeScreen';
import EditScreen from './src/screens/EditScreen';
import EditCard from './src/components/EditCard/EditCard';
import QuestionScreen from './src/screens/QuestionScreen';

export default function App() {
  return (
    // <QuestionScreen />
    // <EditCard />
    // <EditScreen />
    <AppNavigator />
    // <CardDetailsScreen />
    // <LikeScreen/>
  );
}