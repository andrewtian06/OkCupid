import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity, TouchableOpacityBase} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import {CountryPicker} from "react-native-country-codes-picker/components/CountryPicker";
import CountryPicker from 'react-native-country-picker-modal'

class EditPhoneScreen extends Component {
    constructor (props) {
        super(props)
        this.state = { 
          Phone: '0813126096283',
          countryCode: 'FR',
          callingCode: '62',
          country: null,
          withCallingCode: true,
          modalVisible: false,
        }
    }
    onSelect = (Country) => {
      this.setState({countryCode: Country.cca2});
      this.setState({country: Country});
      this.setState({callingCode: Country.callingCode});
    }

    render() {
        return (
            <View style={styles.container}>
            <CountryPicker
              countryCode={this.state.countryCode}
              withCallingCode={this.state.withCallingCode}
              withFlagButton={false}
              withCallingCodeButton={false}
              modalProps={{visible: this.state.modalVisible,animationType: 'slide',}}
              withModal={true}
              withFilter={true}
              onSelect={this.onSelect}
              onClose={()=> {this.setState({modalVisible: false});}}
            />
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>What's your phone number?</Text>
            </View>
            <View style={styles.container4}>
                <TouchableOpacity style={styles.CountryNumberStyle} onPress={()=> {this.setState({modalVisible: true})}}>
                    <Text style={{fontSize: 20,}}>+{this.state.callingCode}</Text>
                    
                    <Icon
                        name='chevron-down'
                        size={30}
                        color='#00008B'
                        style={{width: 30,height: 30, alignSelf: 'center'}}
                    />
                </TouchableOpacity>
                <View style={styles.menuItemText}>
                    <TextInput
                        style={{fontSize: 20}}
                        multiline={true}
                        keyboardType={'phone-pad'}
                    />
                </View>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity
                    onPress={() => {}}
                    style={[styles.signUp, {
                        backgroundColor: '#00008B',
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>NEXT</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    }
}

export default EditPhoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container3:{
    height: '30%',
    paddingHorizontal: 15,
    marginTop: 20,
  },
  container4:{
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  CountryNumberStyle:{
    width: '25%',
    paddingVertical: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {widht: 0, height: 2},
    shadowRadius: 8,
    elevation: 8,
  },
  signUp: {
    width: '100%',
    height: 50,
    marginBottom: '10%',
    marginTop: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  menuItemText:{
    backgroundColor: '#fff',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {widht: 0, height: 2},
    shadowRadius: 8,
    elevation: 8,
    padding: 15,
    width: '70%',
  },
  textSign: {
    color: '#000',
    fontSize: 20,
    lineHeight: 30,
  },
  titleContainer:{
    padding: 20,
    paddingBottom: 100,
  },
  titleText: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },
});