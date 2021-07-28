import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, CheckBox, ScrollView} from 'react-native';

//stateful class
class PoliticalScreen extends Component {
  constructor(props){
      super(props);
      this.state = {
          Value: [
              {id:0 ,name: 'Politically liberal', checked:false},
              {id:1 ,name: 'Politically moderate', checked:false},
              {id:2 ,name: 'Politically conservative', checked:false},
              {id:3 ,name: 'Other political beliefs', checked:false},
            ]
      };
  }
  onchecked(id){
      const data = this.state.Value
      const index = data.findIndex((x) => x.id === id)
      data[index].checked = !data[index].checked
      this.setState(data)
  }
  renderCheckbox(){
      return this.state.Value.map((item) => {
          return(
            <TouchableOpacity style={styles.boxContainer} key = {item.id} onPress={() =>{this.onchecked(item.id)}}>
            <Text style={styles.textSign}>{item.name}</Text>
              <CheckBox
                value={item.checked}
                onValueChange={() => {this.onchecked(item.id)}}
                tintColors={{ true: '#00008B', false: 'black' }}
                style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
              />
            </TouchableOpacity>
          )
      })
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.container4}>
          <Text style={styles.titleText}>Political View</Text>
        </View>

        <View style={styles.container2}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                <View style={styles.box}>
                    {
                        this.renderCheckbox()
                    } 
                </View>
            </ScrollView>
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
export default PoliticalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2:{
    height: '75%',
    paddingHorizontal: 15,
  },
  container3:{
    height: '15%',
    paddingHorizontal: 15,
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
  }
});