import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CardDetailsScreen from '../screens/CardDetailsScreen';
import BottomNavigator from './BottomNavigator';
import SettingScreen from '../screens/SettingScreen';

import EditScreen from '../screens/EditScreen';
import QuestionScreen from '../screens/QuestionScreen';
import EditPhotoScreen from '../screens/EditPhotoScreen';

import PreferenceScreen from '../screens/PreferenceScreen';

//inside preference screen
import GenderScreen from '../screens/inside_preference/GenderScreen';
import AgeScreen from '../screens/inside_preference/AgeScreen';
import DistanceScreen from '../screens/inside_preference/DistanceScreen';
import ConnectionScreen from '../screens/inside_preference/ConnectionScreen';
import BodyTypeScreen from '../screens/inside_preference/BodyTypeScreen';
import LanguageScreen from '../screens/inside_preference/LanguageScreen';
import OrientationScreen from '../screens/inside_preference/OrientationScreen';
import EthnicityScreen from '../screens/inside_preference/EthnicityScreen';
import ReligionScreen from '../screens/inside_preference/ReligionScreen';
import PoliticalScreen from '../screens/inside_preference/PoliticalScreen';
import EducationScreen from '../screens/inside_preference/EducationScreen';
import EmploymentScreen from '../screens/inside_preference/EmploymentScreen';
import AstrologicalScreen from '../screens/inside_preference/AstrologicalScreen';
import AlcoholScreen from '../screens/inside_preference/AlcoholScreen';
import SmokingScreen from '../screens/inside_preference/SmokingScreen';
import MarijuanaScreen from '../screens/inside_preference/MarijuanaScreen';
import DietScreen from '../screens/inside_preference/DietScreen';
import PetScreen from '../screens/inside_preference/PetScreen';
import HasKidScreen from '../screens/inside_preference/HasKidScreen';
import WantKidScreen from '../screens/inside_preference/WantKidScreen';

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
                    name="EditPhoto"
                    component={EditPhotoScreen}
                    options={{
                        title: '',
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
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
                <Stack.Screen
                    name="Preferences"
                    component={PreferenceScreen}
                    options= {{
                        title: 'My Ideal Person',
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            alignSelf: 'center',
                        },
                        headerRight: () => (<View></View>),
                    }}
                />
                <Stack.Screen 
                    name="Gender" 
                    component={GenderScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Age" 
                    component={AgeScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Distance" 
                    component={DistanceScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Connection" 
                    component={ConnectionScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Body Type" 
                    component={BodyTypeScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Language" 
                    component={LanguageScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Orientation" 
                    component={OrientationScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Ethnicity" 
                    component={EthnicityScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Religion" 
                    component={ReligionScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Political" 
                    component={PoliticalScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Education" 
                    component={EducationScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Employment" 
                    component={EmploymentScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Astrological" 
                    component={AstrologicalScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Alcohol" 
                    component={AlcoholScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Smoking" 
                    component={SmokingScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Marijuana" 
                    component={MarijuanaScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Diet" 
                    component={DietScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Pets" 
                    component={PetScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Has kids" 
                    component={HasKidScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
                <Stack.Screen 
                    name="Wants kids" 
                    component={WantKidScreen}
                    options={{
                        headerShown: true,
                        title: 'My Ideal Person',
                        headerStyle:{
                            backgroundColor: '#000',
                        },
                        headerTintColor: '#fff',
                        headerTitleAlign: 'center',
                        animationEnabled: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default stackNavigator;