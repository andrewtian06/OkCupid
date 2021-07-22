import React from 'react';
import { Text, View, StyleSheet, Image, FlatList } from 'react-native';
import ChatCard from '../components/ChatCard/ChatCard';

const DATA = [
    {
        source: require('../../assets/pet1.jpg'),
        name: 'vera',
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
    },
    {
        source: require('../../assets/pet2.jpg'),
        name: 'selyn',
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    },
    {
        source: require('../../assets/pet3.jpg'),
        name: 'abc',
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    },

];

const MessageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.messageHeaderContainer}>
                <Text style={styles.headerTitle}>Messages</Text>
            </View>
            <View style={styles.possibleMatchContainer}>
                <Image style={styles.image} source={require('../../assets/pet1.jpg')} />
                <View style={styles.possibleMatchTextContainer}>
                    <Text style={styles.countPossible}>14 Possibile Matches</Text>
                    <Text style={styles.description}>Match with them and chat now!</Text>
                </View>
            </View>
            <View style={{ top: 110 }}>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ChatCard name={item.name} source={item.source} />
                    )}
                />
            </View>
        </View >
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1
    },
    messageHeaderContainer: {
        alignItems: 'center',
        top: 80,
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    possibleMatchContainer: {
        top: 100,
        flexDirection: 'row',
        backgroundColor: '#141414',
        width: '100%',
        padding: 20
    },
    possibleMatchTextContainer: {
        justifyContent: 'center',
        marginLeft: 10
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "gray",
    },
    countPossible: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    description: {
        fontSize: 16,
        color: 'white'
    },
});



export default MessageScreen;