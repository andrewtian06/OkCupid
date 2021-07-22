import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MessageScreen from '../screens/MessageScreen';
import HomeScreen from '../screens/HomeScreen';
import LikeScreen from '../screens/LikeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CardDetailsScreen from '../screens/CardDetailsScreen';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function stackNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,

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
                tabBarOptions={
                    {
                        activeTintColor: 'white',
                        tabStyle: { backgroundColor: 'black', }
                    }
                }

                screenOptions={({ route }) => ({
                    tabBarIcon: () => {
                        if (route.name == "Home") {
                            return <AntDesign name="team" size={24} color="white" />
                        } else if (route.name == "Likes") {
                            return <Ionicons name="heart-outline" size={24} color="white" />
                        } else if (route.name == "Messages") {
                            return <MaterialCommunityIcons name="message-processing-outline" size={24} color="white" />
                        } else if (route.name == "Profile") {
                            return <Ionicons name="person-circle" size={24} color="white" />
                        }
                    }
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={stackNavigator}
                />
                <Tab.Screen
                    name="Likes"
                    component={LikeScreen}
                    options={{ tabBarBadge: 13 }}
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