import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ChatCard = ({ name, source }) => {
    return (
        <View style={styles.possibleMatchContainer}>
            <Image style={styles.image} source={source} />
            <View style={styles.possibleMatchTextContainer}>
                <Text style={styles.countPossible}>{name}</Text>
                <Text style={styles.description}>iya lmyn sih gw suka iseng2 masak</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    possibleMatchContainer: {
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

export default ChatCard;