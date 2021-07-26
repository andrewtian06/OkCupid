import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CardDetailsScreen from '../screens/CardDetailsScreen';
import BottomNavigator from './BottomNavigator';
import SettingScreen from '../screens/SettingScreen';
import EditScreen from '../screens/EditScreen';
import QuestionScreen from '../screens/QuestionScreen';

const Stack = createStackNavigator();

function stackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
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
                    options={{
                        title: 'Settings',
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                    }}
                />
                <Stack.Screen
                    name="EditScreen"
                    component={EditScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="QuestionScreen"
                    component={QuestionScreen}
                    options={
                        ({ route }) => ({
                            title: route.params.name,
                            headerStyle: {
                                backgroundColor: '#000',
                                height: 100
                            },
                            headerTintColor: '#fff',
                            headerTitleAlign: 'center'
                        })
                    }
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default stackNavigator;