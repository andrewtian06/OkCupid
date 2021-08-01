import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableWithoutFeedback, ScrollView, TouchableOpacity } from 'react-native';
import { EvilIcons, AntDesign, FontAwesome, Fontisto } from '@expo/vector-icons';
import EditCard from '../components/EditCard/EditCard';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const EditScreen = props => {

    return (
        <View style={styles.container}>

            <ScrollView>

                <View>
                    <View style={{top: 50,}}>
                        <Image source={require('../../assets/pet1.jpg')} style={styles.image}/>
                        <TouchableOpacity style={styles.editStyle} onPress={()=> {props.navigation.navigate('EditPhoto')}}>
                            <Icon
                                name='camera'
                                color='#fff'
                                size={25}
                            />
                            <Text style={{color:'#fff', fontSize: 18,marginLeft: 5,}}>Edit Photos</Text>
                        </TouchableOpacity>
                    </View>

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

                    <View style={{ marginTop: 10, marginBottom: 20, backgroundColor: 'white', borderRadius: 10 }}>

                        <View style={{ backgroundColor: 'black', padding: 10 }}>
                            <Text
                                style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>
                                DETAILS
                            </Text>
                        </View>

                        <View
                            style={styles.borderSteps}
                        />

                        <View style={styles.childParent}>
                            <View style={{ width: 24 }}>
                                <AntDesign name="appstore-o" size={24} color="black" />
                            </View>

                            <Text style={styles.textStyle}>Man | Straight | Monogamous | Single</Text>
                        </View>

                        <View style={styles.childParent}>
                            <View style={{ width: 24 }}>
                                <AntDesign name="notification" size={24} color="black" />
                            </View>
                            <Text style={styles.textStyle}>Add: Pronouns</Text>
                        </View>

                        <View style={styles.childParent}>
                            <View style={{ width: 24 }}>
                                <FontAwesome name="male" size={24} color="black" />
                            </View>
                            <Text style={styles.textStyle}>Add: Height | Body Type</Text>
                        </View>

                        <View style={styles.childParent}>
                            <View style={{ width: 24 }}>
                                <Fontisto name="world-o" size={24} color="black" />
                            </View>
                            <Text style={styles.textStyle}>Asian | Christianity | Undergraduate degree</Text>
                        </View>

                        <TouchableWithoutFeedback>
                            <View style={{ borderTopColor: 'black', borderTopWidth: 0.5 }}>
                                <View style={{ justifyContent: 'center', flexDirection: 'row', padding: 10, marginTop: 5 }}>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'blue' }}>EDIT</Text>
                                    <EvilIcons name="pencil" size={24} color="black" style={{ alignSelf: 'center' }} />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>


                    </View>

                </View>

                <EditCard navigation={props.navigation} />
                <EditCard navigation={props.navigation} />
                <EditCard navigation={props.navigation} />
                <EditCard navigation={props.navigation} />
                <EditCard navigation={props.navigation} />
                <EditCard navigation={props.navigation} />
                <EditCard navigation={props.navigation} />
                <EditCard navigation={props.navigation} />
                <EditCard navigation={props.navigation} />


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
        height: 300,
        width: Dimensions.get('window').width,
    },
    info: {
        top: 50,
        height: 70,
        backgroundColor: 'white',
    },
    childParent: {
        flexDirection: 'row',
        padding: 10,
        marginRight: 15,
        alignItems: 'center'
    },
    textStyle: {
        marginLeft: 10,
        fontSize: 15
    },
    editStyle: {
        width: 150,
        height: 50, 
        position: 'absolute', 
        right: 10, 
        bottom: 10,
        borderRadius: 30,
        backgroundColor: '#000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default EditScreen;