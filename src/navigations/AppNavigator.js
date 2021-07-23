import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardDetailsScreen from '../screens/CardDetailsScreen';
import BottomNavigator from './BottomNavigator';
import SettingScreen from '../screens/SettingScreen';

const Stack = createStackNavigator();

function stackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                // screenOptions={{
                //     headerShown: false,
                // }}
            >
                <Stack.Screen
                    name="BottomNav"
                    component={BottomNavigator}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="CardDetails"
                    component={CardDetailsScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="Settings"
                    component={SettingScreen}
                    options= {{
                        title: 'Settings',
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default stackNavigator;