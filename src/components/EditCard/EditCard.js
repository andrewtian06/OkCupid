import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

const EditCard = ({ navigation }) => {

    return (


        <View style={styles.container}>

            <View style={styles.headerQuestion}>
                <Text style={styles.headerTitle}>ABOUT ME</Text>
                <Text style={styles.description}>MOST PEOPLE THAT KNOW ME WOULD SAY I'M</Text>
            </View>
            <TouchableWithoutFeedback onPress={() =>
                navigation.navigate('QuestionScreen', {
                    name: 'ABOUT ME'
                })
            }>

                <View>

                    <Text style={styles.prompt}>How would a friend describe you?</Text>

                    <View style={styles.button}>
                        <Text style={styles.buttonText}>WRITE</Text>
                        <EvilIcons name="pencil" size={24} color="black" />
                    </View>
                </View>

            </TouchableWithoutFeedback>

        </View>

    );

};

const styles = StyleSheet.create({
    container: {
        height: 170,
        backgroundColor: 'white',
        margin: 10
    },
    headerQuestion: {
        height: 70,
        backgroundColor: 'black',
        padding: 5
    },
    headerTitle: {
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 10
    },
    description: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 10,
        marginRight: 20
    },
    button: {
        borderTopColor: 'black',
        borderTopWidth: 0.4,
        justifyContent: 'center',
        padding: 15,
        flexDirection: 'row'
    },
    prompt: {
        padding: 15,
        marginLeft: 5,
        color: 'gray'
    }
});


export default EditCard;