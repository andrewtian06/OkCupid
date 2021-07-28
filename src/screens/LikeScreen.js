import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, TouchableOpacityBase, View } from 'react-native';
import Card from '../components/LikeCard/index'
import {DummyData} from '../../test/DummyData'

const LikeScreen = ({navigation, handleChoice}) => {
    return (
        <View style={styles.container}>
            <FlatList
              data={DummyData}
              renderItem={({item, index}) => {
                return(
                  <TouchableOpacity
                    onPress= {() => navigation.navigate('CardDetails', {
                        handleChoice: handleChoice
                    })}
                    style={{width: '50%'}}
                  >
                    <Card
                      Title= {item.Title}
                      Description = {item.Description}
                      source = {item.source}
                    />
                  </TouchableOpacity>
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
  },
  title: {
    margin: 10,
  }
});