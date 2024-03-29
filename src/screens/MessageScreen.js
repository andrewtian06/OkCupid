import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    FlatList,
    StatusBar,
    Dimensions,
    ScrollView
} from 'react-native';
import ChatCard from '../components/ChatCard/ChatCard';

const DATA = [
    {
        source: require('../../assets/pet1.jpg'),
        name: '14 Possible Matches',
        id: "3ac68afc-c605-48d3-a4f8-fbd91ab14dsf",
        description: 'Match with them and chat now!',
    },
    {
        source: require('../../assets/pet1.jpg'),
        name: 'vera',
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        description: 'iya lmyn sih gw suka iseng2 masak',
        margin: 30,
    },
    {
        source: require('../../assets/pet2.jpg'),
        name: 'selyn',
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        description: 'iya lmyn sih gw suka iseng2 masak',
    },
    {
        source: require('../../assets/pet3.jpg'),
        name: 'abc',
        id: "3ac68afc-c605-48d3-a4f8-fbd91ab99f63",
        description: 'iya lmyn sih gw suka iseng2 masak',
    },
    {
        source: require('../../assets/pet3.jpg'),
        name: 'abc',
        id: "4",
        description: 'iya lmyn sih gw suka iseng2 masak',
    },
    {
        source: require('../../assets/pet3.jpg'),
        name: 'abc',
        id: "5",
        description: 'iya lmyn sih gw suka iseng2 masak',
    },
    {
        source: require('../../assets/pet3.jpg'),
        name: 'asdfas',
        id: "6",
        description: 'iya lmyn sih gw suka iseng2 masak',
    },
];

const MessageScreen = () => {
    console.log(Dimensions.get('window').height, Dimensions.get('window').width)
    return (
        <View style={styles.container}>

            <View style={styles.messageHeaderContainer}>
                <Text style={styles.headerTitle}>Messages</Text>
            </View>

            <View style={styles.chat}>
                <FlatList
                    data={DATA}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => (
                        <ChatCard name={item.name} source={item.source} description={item.description} margin={item.margin} />
                    )}
                />
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        height: Dimensions.get('window').height,
        marginTop: StatusBar.currentHeight,
        width: Dimensions.get('window').width
    },
    messageHeaderContainer: {
        alignItems: 'center',
        marginTop: 30,
    },
    headerTitle: {
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white'
    },
    possibleMatchContainer: {
        marginTop: 30,
        flexDirection: 'row',
        backgroundColor: '#141414',
        width: Dimensions.get('window').width,
        padding: 20
    },
    possibleMatchTextContainer: {
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 30
    },
    image: {
        width: Dimensions.get('window').width > 350 ? 70 : 50,
        height: Dimensions.get('window').height > 600 ? 70 : 50,
        borderRadius: Dimensions.get('window').width > 350 && Dimensions.get('window').height > 600 ? 70 / 2 : 50 / 2,
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
    chat: {
        flex: 1,
        marginTop: 30
    }
});



export default MessageScreen;