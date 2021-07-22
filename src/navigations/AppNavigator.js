import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MessageScreen from '../screens/MessageScreen';
import HomeScreen from '../screens/HomeScreen';
import LikeScreen from '../screens/LikeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CardDetailsScreen from '../screens/CardDetailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function stackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
            />
            <Stack.Screen
                name="CardDetails"
                component={CardDetailsScreen}
            />
        </Stack.Navigator>
    );
}

function AppNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator
            >
                <Tab.Screen
                    name="Home"
                    component={stackNavigator}
                />
                <Tab.Screen
                    name="Likes"
                    component={LikeScreen}
                />
                <Tab.Screen
                    name="Messages"
                    component={MessageScreen}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

export default AppNavigator;