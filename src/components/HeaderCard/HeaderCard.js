import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const HeaderCard = ({ sourceName, userName }) => {
    return (
        <View style={{ alignItems: 'flex-start' }}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={sourceName} />
                <Text style={styles.textStyle}>{userName}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: 75,
        marginLeft: 20,
        alignItems: 'center'
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        overflow: "hidden",
        borderWidth: 2,
        borderColor: "white",
    },
    textStyle: {
        color: 'white',
        fontSize: 12,
        marginTop: 3
    }
});

export default HeaderCard;