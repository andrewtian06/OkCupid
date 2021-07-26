import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    TextInput,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';

const QuestionScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.prompt}>Most people that know me would say I'm</Text>

            <View
                style={styles.border}
            />
            <TextInput
                placeholder='How would a friend describe you?'
                style={styles.textInput}
                multiline={true} />

            <TouchableWithoutFeedback>
                <View style={styles.button}>
                    <Text style={{ alignSelf: 'center', color: 'white', fontWeight: 'bold' }}>SAVE</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        height: Dimensions.get('window').height,
        flexDirection: 'column'
    },
    prompt: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 20
    },
    border: {
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        marginTop: 15,
        marginHorizontal: 15
    },
    textInput: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    button: {
        alignSelf: 'center',
        width: Dimensions.get('window').width - 30,
        position: 'absolute',
        bottom: 100,
        backgroundColor: 'blue',
        height: 50,
        justifyContent: 'center'
    }
});

export default QuestionScreen;