import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const ChatCard = ({ name, source, description, margin }) => {
    return (
        <View style={[styles.possibleMatchContainer, {marginTop: margin}]}>
            <Image style={styles.image} source={source} />
            <View style={styles.possibleMatchTextContainer}>
                <Text style={styles.countPossible}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
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
        marginLeft: 10,
        marginRight: 30,
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
});

export default ChatCard;