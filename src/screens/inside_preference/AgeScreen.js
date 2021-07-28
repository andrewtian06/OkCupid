import React, { Component } from 'react';
import { FlatList, Picker, StyleSheet, Text, View, TouchableOpacity, CheckBox, ScrollView} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const countries = ["18", "19", "20", "21", "22", "23", "24","25","26","27","28","29","30",]

//stateful class
class AgeScreen extends Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.container4}>
          <Text style={styles.titleText}>Age</Text>
        </View>

        <View style={styles.container2}>
        <View style={styles.box}>
          <SelectDropdown
            data={countries}
            defaultButtonText={"18"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown1BtnStyle}
            buttonTextStyle={styles.dropdown1BtnTxtStyle}
            renderDropdownIcon={() => {
              return (
                <Icon name="chevron-down" color={"#444"} size={18} />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown1DropdownStyle}
            rowStyle={styles.dropdown1RowStyle}
            rowTextStyle={styles.dropdown1RowTxtStyle}
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
            }]}>Save</Text>
        </TouchableOpacity>
      </View>

      </View>
    )
  }
}
export default AgeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2:{
    height: '60%',
    paddingHorizontal: 15,
    paddingTop: 50,
    justifyContent: 'center',
  },
  container3:{
    height: '30%',
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
  },
  container4:{
    height: '10%',
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {widht: 0, height: 2},
    shadowRadius: 8,
    elevation: 5,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 13,
    paddingHorizontal: 25,
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
  textSign: {
    color: '#000',
    fontSize: 20,
    lineHeight: 30,
  },
  titleText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },

  dropdown1BtnStyle: {
    width: "100%",
    backgroundColor: "#FFF",
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },

});