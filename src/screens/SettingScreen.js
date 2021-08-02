import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';

import SettingCard from '../components/SettingList/index';

const SettingScreen = ({navigation}) => {
    const Data = [
        {Title: 'Email address', margin: 25, onPress: () => {navigation.navigate('Email')},},
        {Title: 'Password', onPress: () => {navigation.navigate('Password')},},
        {Title: 'Phone Number', onPress: () => {navigation.navigate('PhoneNumber')},},

        {Title: 'Disable your account', margin: 25, onPress: () => {console.log(10)}},
        {Title: 'Sign Out', onPress: () => {console.log(11)}},
    ];
    return (
        <SafeAreaView>
        <View style={styles.menuWrapper}>
            <FlatList
                data={Data}
                renderItem={({item, index}) => {
                    return(
                    <SettingCard
                        Title= {item.Title}
                        onPress = {item.onPress}
                        marginTop = {item.margin}
                    />
                    );}}
                keyExtractor={item => item.Title}
                nestedScrollEnabled = {true}
            />
        </View>
        </SafeAreaView>
    );
}

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    backgroundColor:'#fff',
  },
  menuWrapper: {
    backgroundColor: '#f5f5f5',
  },
});