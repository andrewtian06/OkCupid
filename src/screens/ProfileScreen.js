import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    StatusBar,
    Dimensions,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Progress from 'react-native-progress';
import { EvilIcons, SimpleLineIcons, Octicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
    return (

        <ScrollView>

            <View style={{ backgroundColor: '#DCDCDC' }}>

                <View style={styles.headerContainer}>

                    <View style={styles.profile}>
                        <Image style={styles.image} source={require('../../assets/pet1.jpg')} />
                        <View style={styles.description}>
                            <Text style={styles.textStyles}>Andrew</Text>
                            <Text style={styles.locationText}>Kelapagading</Text>
                        </View>
                        <TouchableWithoutFeedback onPress={() => { navigation.navigate('EditScreen') }}>
                            <View style={styles.pencilIcon} >
                                <EvilIcons name="pencil" size={35} color="white" />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>


                    <View style={styles.buttonContainer}>

                        <View style={styles.border} />

                        <View style={{ flexDirection: 'row' }}>

                            <TouchableWithoutFeedback>
                                <View style={styles.preferencesButton}>
                                    <Octicons name="settings" size={24} color="white" style={styles.filter} />
                                    <Text style={styles.preferences}>Preferences</Text>
                                </View>
                            </TouchableWithoutFeedback>

                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Settings')}>
                                <View style={styles.settingsButton}>
                                    <SimpleLineIcons name="settings" size={20} color="white" style={styles.settingsIcon} />
                                    <Text style={styles.preferences}>Settings</Text>
                                </View>
                            </TouchableWithoutFeedback>

                        </View>

                    </View>

                </View >

                <View style={{ margin: 15 }} >
                    <LinearGradient
                        colors={['#4A00E0', '#8E2DE2', '#192f6a']}
                        style={styles.getPremium}>
                        <Text style={styles.premiumText}>GET OKCUPID PREMIUM</Text>
                    </LinearGradient>
                </View>

                <View style={{ marginHorizontal: 15 }} >
                    <LinearGradient
                        colors={['#f953c6', '#b91d73']}
                        style={styles.getBoost}>
                        <Text style={styles.boostText}>GET BOOST</Text>
                    </LinearGradient>
                </View>

                {/* STEPS TO SUCCESS */}

                <View style={{ marginHorizontal: 15, marginTop: 10 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>IQupid</Text>
                    <Text>Insider tips to level-up your dating IQ</Text>

                    <View style={{ marginTop: 10, backgroundColor: 'white', marginBottom: 20 }}>

                        <View style={{ backgroundColor: 'black', padding: 10 }}>
                            <Text
                                style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
                                STEPS TO SUCCESS
                            </Text>
                        </View>

                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 12 }}>
                                Complete your profile to get seen more &#38; get more matches!
                            </Text>

                            <View style={{ marginRight: 15 }}>
                                <Progress.Bar progress={0.3} width={Dimensions.get('window').width - 50} height={10} marginRight={50} marginRight={20} marginTop={20} color={'#861657'} borderRadius={10} />
                            </View>
                            <Text style={{ marginTop: 25, fontSize: 12 }}>Tip: Upload photos of you doing activities you love.</Text>
                        </View>

                        <View
                            style={styles.borderSteps}
                        />

                        <View style={{ flexDirection: 'row', padding: 10, marginRight: 20 }}>
                            <Text>{'\u3007'}</Text>
                            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Add 5 more photos</Text>
                        </View>

                        <View style={{ flexDirection: 'row', padding: 10, marginRight: 20 }}>
                            <Text>{'\u3007'}</Text>
                            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Expand your "About Me" to at least 50 words (currently 0)</Text>
                        </View>

                        <View style={{ flexDirection: 'row', padding: 10, marginRight: 20 }}>
                            <Text>{'\u3007'}</Text>
                            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Answer more questions</Text>
                        </View>

                        <View style={{ flexDirection: 'row', padding: 10, marginRight: 20 }}>
                            <Text>{'\u3007'}</Text>
                            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Finish filling in your details</Text>
                        </View>

                        <View style={{ flexDirection: 'row', padding: 10, marginRight: 20 }}>
                            <Text>{'\u3007'}</Text>
                            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Check your IQupid dashboard</Text>
                        </View>

                    </View>

                </View>

            </View >

        </ScrollView>

    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'black',
        height: 220,
        marginTop: StatusBar.currentHeight
    },
    textStyles: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold'
    },
    profile: {
        flexDirection: 'row',
        marginLeft: 40,
        marginTop: 30,
        width: Dimensions.get('window').width
    },
    locationText: {
        fontSize: 18,
        color: 'white'
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 90 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "gray",
    },
    description: {
        marginLeft: 15
    },
    border: {
        borderBottomColor: 'gray',
        borderBottomWidth: 0.7,
    },
    preferencesButton: {
        width: Dimensions.get('window').width / 2,
        alignItems: 'center',
        borderRightColor: 'gray',
        borderRightWidth: 0.7,
        height: 55,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    preferences: {
        color: 'white'
    },
    buttonContainer: {
        marginTop: 45
    },
    settingsButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        width: Dimensions.get('window').width / 2
    },
    getPremium: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    premiumText: {
        color: 'white',
        fontSize: 18,
    },
    getBoost: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    boostText: {
        color: 'white',
        fontSize: 18,
    },
    borderSteps: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
    },
    pencilIcon: {
        left: 90,
        backgroundColor: 'blue',
        width: 35,
        height: 35,
        borderRadius: 35 / 2,
        padding: 2
    },
    filter: {
        backgroundColor: 'blue',
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        padding: 4,
        marginRight: 5
    },
    settingsIcon: {
        marginRight: 5,
        backgroundColor: 'blue',
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        padding: 6,
    }
});

export default ProfileScreen;