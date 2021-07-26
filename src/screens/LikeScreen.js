import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card from '../components/LikeCard/index'
import {DummyData} from '../../test/DummyData'

const LikeScreen = () => {
    return (
        <View style={styles.container}>
            <FlatList
              data={DummyData}
              renderItem={({item, index}) => {
                return(
                  <Card
                    Title= {item.Title}
                    Description = {item.Description}
                    source = {item.source}
                  />
                );}}
              keyExtractor={item => item.key}
              numColumns={2}
            />
        </View>
    );
}

export default LikeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  title: {
    margin: 10,
  }
});