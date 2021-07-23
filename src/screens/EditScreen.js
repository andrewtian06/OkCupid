import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { EvilIcons, AntDesign, FontAwesome, Fontisto } from '@expo/vector-icons';

const EditScreen = () => {

    return (
        <View style={styles.container}>

            <ScrollView>

                <View>
                    <Image source={require('../../assets/pet1.jpg')} style={styles.image} />

                    <View style={styles.info}>

                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Andrew</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ color: 'gray' }}>20 {'\u30FB'} Kelapagading</Text>
                                <TouchableWithoutFeedback>
                                    <EvilIcons name="pencil" size={24} color="black" />
                                </TouchableWithoutFeedback>
                            </View>
                        </View>

                    </View>

                </View>

                <View style={{ marginHorizontal: 15, marginTop: 60 }}>

                    <View style={{ marginTop: 10, marginBottom: 20, height: Dimensions.get('window').height - 450, backgroundColor: 'white', borderRadius: 10 }}>

                        <View style={{ backgroundColor: 'black', padding: 10 }}>
                            <Text
                                style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
                                DETAILS
                            </Text>
                        </View>

                        <View
                            style={styles.borderSteps}
                        />

                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <AntDesign name="appstore-o" size={24} color="black" />
                            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Man | Straight | Monogamous | Single</Text>
                        </View>

                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <AntDesign name="notification" size={24} color="black" />
                            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Add: Pronouns</Text>
                        </View>

                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <FontAwesome name="male" size={24} color="black" />
                            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Add: Height | Body Type</Text>
                        </View>

                        <View style={{ flexDirection: 'row', padding: 10 }}>
                            <Fontisto name="world-o" size={24} color="black" />
                            <Text style={{ paddingLeft: 5, fontSize: 15 }}>Asian | Christianity | Undergraduate degree</Text>
                        </View>

                        <TouchableWithoutFeedback>
                            <View style={{ borderTopColor: 'black', borderTopWidth: 0.5 }}>
                                <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'blue' }}>EDIT</Text>
                                    <EvilIcons name="pencil" size={24} color="black" style={{ alignSelf: 'center' }} />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>

                    </View>

                </View>

            </ScrollView>

        </View>
    );

};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DCDCDC'
    },
    image: {
        top: 50,
        height: Dimensions.get('window').height - 350,
        width: Dimensions.get('window').width
    },
    info: {
        top: 50,
        height: 70,
        backgroundColor: 'white'
    }

});

export default EditScreen;