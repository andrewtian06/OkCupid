import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';

import SettingCard from '../components/SettingList/index';

const SettingScreen = () => {
    const Data = [
        {Title: 'Get OkCupid Premium', margin: 25, onPress: () => {console.log(0)}},

        {Title: 'Notifications', margin: 25, onPress: () => {console.log(1)}},
        {Title: 'Privacy', onPress: () => {console.log(2)}},
        {Title: 'Email address', onPress: () => {console.log(3)}},
        {Title: 'Password', onPress: () => {console.log(4)}},
        {Title: 'Phone Number', onPress: () => {console.log(5)}},
        {Title: 'Connections', onPress: () => {console.log(6)}},
        {Title: 'Unit preference', onPress: () => {console.log(7)}},

        {Title: 'Help', margin: 25, onPress: () => {console.log(8)}},
        {Title: 'Purchases', onPress: () => {console.log(9)}},
        {Title: 'Disable your account', onPress: () => {console.log(10)}},
        {Title: 'Sign Out', onPress: () => {console.log(11)}},

        {Title: 'About', margin: 25, onPress: () => {console.log(12)}},
        {Title: 'Privacy Preference Center', onPress: () => {console.log(13)}},
        {Title: 'Privacy Policy', onPress: () => {console.log(14)}},
        {Title: 'Terms & Conditions', onPress: () => {console.log(15)}},
        {Title: 'Safety tips', onPress: () => {console.log(16)}},
        {Title: 'Community guidelines', onPress: () => {console.log(17)}},
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
    backgroundColor: '#dddddd',
  },
});