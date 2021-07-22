import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { AntDesign, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Footer from '../components/Footer/index';

const CardDetailsScreen = props => {

    const { handleChoice } = props.route.params;

    return (
        <View style={styles.container}>

            <ScrollView>

                <Image source={require('../../assets/pet1.jpg')} style={styles.image} />

                <View style={styles.personalInfo}>

                    <View style={{ padding: 10, marginLeft: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Agustin dwi</Text>
                        <Text style={{ marginTop: 5 }}>20{'\u30FB'}Jakarta</Text>
                    </View>

                    <View
                        style={styles.border}
                    />

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                        <AntDesign name="search1" size={15} color="black" style={{ padding: 10 }} />
                        <Text>Woman | Straight | Monogamous | Single</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                        <MaterialCommunityIcons name="human-male-height" size={24} color="black" style={{ padding: 10 }} />
                        <Text>5'4"</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
                        <Ionicons name="eye-outline" size={24} color="black" style={{ padding: 10 }} />
                        <Text>Looking for men</Text>
                    </View>


                </View>

                <View>

                    <View style={styles.selfSummary}>
                        <View style={{ padding: 10, marginLeft: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 5 }}>My self-summary</Text>
                            <Text style={{ marginTop: 10, fontSize: 15 }}>Hi, aku pengguna baru. Tolong arahannya ya hihi</Text>
                        </View>
                    </View>


                </View>


            </ScrollView>

            <View style={{ alignItems: 'center', bottom: 250 }}>
                <Footer handleChoice={handleChoice} />
            </View>



        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        top: 70
    },
    image: {
        height: Dimensions.get('window').height - 350,
        width: Dimensions.get('window').width
    },
    personalInfo: {
        backgroundColor: 'white',
        height: 200
    },
    border: {
        borderBottomColor: 'black',
        borderBottomWidth: 0.5,
    },
    selfSummary: {
        backgroundColor: '#F0F0F0',
        height: 500
    }
});

export default CardDetailsScreen;
