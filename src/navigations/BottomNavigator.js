import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MessageScreen from '../screens/MessageScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import LikeNavigator from './LikeNavigator';
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();
const Like = createStackNavigator();

function BottomNavigator() {
    return (
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
                component={HomeScreen}
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
    );
}

export default BottomNavigator;

const LikeScreen = ({ navigation }) => (
    <Like.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#fff',
                elevation: 0,
            },
            headerTintColor: '#000',
        }}
    >
        <Like.Screen
            name="LikeNavigator"
            component={LikeNavigator}
            options={{
                headerShown: true,
                title: 'Likes',
                headerStyle: {
                    backgroundColor: '#000',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    fontSize: 25,
                },
                headerRight: () => (
                    <TouchableOpacity>
                        <LinearGradient
                            colors={['#f953c6', '#b91d73']}
                            style={{
                                flexDirection: 'row',
                                marginRight: 10,
                                borderRadius: 20,
                                width: 100,
                                height: 30,
                                paddingRight: 10,
                                justifyContent: 'center',
                            }}
                        >
                            <Icons
                                name="lightning-bolt"
                                size={25}
                                color='#fff'
                                style={{}}
                            />
                            <Text
                                style={{
                                    fontSize: 20,
                                    fontWeight: 'bold',
                                    color: "#fff",
                                }}
                            >
                                boost
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                ),
            }}
        />
    </Like.Navigator>
);