import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';
import {
  Text,
  TouchableRipple,
} from 'react-native-paper';

import PreferenceCard from '../components/PreferenceCard/index';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PreferenceScreen = ({navigation}) => {
    const Data = [

        {Title: 'Gender', onPress: () => {navigation.navigate('Gender')}, Header: 'show',Icon: 'shape-outline',HeaderTitle: 'BASICS', margin: 1,},
        {Title: 'Age', onPress: () => {navigation.navigate('Age')}, margin: 1,},
        {Title: 'Distance', onPress: () => {navigation.navigate('Distance')}, margin: 1,},
        {Title: 'Connections', onPress: () => {navigation.navigate('Connection')}, margin: 1,},

        {Title: 'Body Type', onPress: () => {navigation.navigate('Body Type')}, Header: 'show',Icon: 'face',HeaderTitle: 'LOOKS', margin: 1,},
        {Title: 'Height', onPress: () => {console.log(6)}, margin: 1,},

        
        {Title: 'Languages', onPress: () => {navigation.navigate('Language')}, Header: 'show',Icon: 'earth',HeaderTitle: 'BACKGROUND & IDENTITY', margin: 1,},
        {Title: 'Orientation', onPress: () => {navigation.navigate('Orientation')}, margin: 1,},
        {Title: 'Preferred Ethnicity', onPress: () => {navigation.navigate('Ethnicity')}, margin: 1,},
        {Title: 'Religion', onPress: () => {navigation.navigate('Religion')}, margin: 1,},
        {Title: 'Political View', onPress: () => {navigation.navigate('Political')}, margin: 1,},
        {Title: 'Education', onPress: () => {navigation.navigate('Education')}, margin: 1,},
        {Title: 'Employment', onPress: () => {navigation.navigate('Employment')}, margin: 1,},
        {Title: 'Astrological sign', onPress: () => {navigation.navigate('Astrological')}, margin: 1,},

        {Title: 'Alcohol', onPress: () => {navigation.navigate('Alcohol')}, Header: 'show',Icon: 'glass-cocktail',HeaderTitle: 'LIFESTYLE', margin: 1,},
        {Title: 'Smoking', onPress: () => {navigation.navigate('Smoking')}, margin: 1,},
        {Title: 'Marijuana', onPress: () => {navigation.navigate('Marijuana')}, margin: 1,},
        {Title: 'Diet', onPress: () => {navigation.navigate('Diet')}, margin: 1,},

        {Title: 'Pets', onPress: () => {navigation.navigate('Pets')}, Header: 'show',Icon: 'home-outline',HeaderTitle: 'FAMILY', margin: 1,},
        {Title: 'Has kids', onPress: () => {navigation.navigate('Has kids')}, margin: 1,},
        {Title: 'Wants kids', onPress: () => {navigation.navigate('Wants kids')}, margin: 25,},
    ];
    return (
        <SafeAreaView>
        <View style={styles.menuWrapper}>
            <FlatList
                data={Data}
                renderItem={({item, index}) => {
                  if(item.Header === 'show'){
                    return(
                      <View>
                        <View style={styles.header}>
                          <Icon
                            name={item.Icon}
                            size={25}
                            color='#000'
                          />
                          <Text style={styles.headerText}>{item.HeaderTitle}</Text>
                        </View>
                        <PreferenceCard
                            Title= {item.Title}
                            onPress = {item.onPress}
                            marginBottom = {item.margin}
                        />
                      </View>
                    );
                  }else{
                    return(
                      <View>
                        <PreferenceCard
                            Title= {item.Title}
                            onPress = {item.onPress}
                            marginBottom = {item.margin}
                        />
                      </View>
                    );
                  }
                }}
                keyExtractor={item => item.Title}
            />
        </View>
        </SafeAreaView>
    );
}

export default PreferenceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor:'#fff',
  },
  header: {
    marginTop: 10,
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: 26,
    marginLeft: 15,
  }
});