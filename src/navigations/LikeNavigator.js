import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import LikeScreen from '../screens/LikeScreen'

const Tab = createMaterialTopTabNavigator();

const LikeNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#e91e63',
                labelStyle: {
                    fontSize: 15,
                    fontWeight: 'bold',
                },
                style: {
                    elevation: 0,
                    borderWidth: 0,
                    shadowOpacity: 0,
                    backgroundColor: '#000',
                    marginRight: 100,
                },
                indicatorStyle: {
                    backgroundColor: 'purple',
                    height: 3,
                },
                activeTintColor: '#fff',
                inactiveTintColor: '#696969'
            }}
            style={{
                backgroundColor: '#000',
            }}
        >
            <Tab.Screen name="Likes You" component={LikeScreen} />
            <Tab.Screen name="Intro" component={LikeScreen} />
            <Tab.Screen name="You Like" component={LikeScreen} />
        </Tab.Navigator>
    );
}

export default LikeNavigator;
