import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, CheckBox} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

//stateful class
class BodyTypeScreen extends Component {
  constructor(props){
      super(props);
      this.state = {
          Value: [
              {id:0 ,name: 'Thin', checked:false},
              {id:1 ,name: 'Overweight', checked:false},
              {id:2 ,name: 'Average', checked:false},
              {id:3 ,name: 'Fit', checked:false},
              {id:4 ,name: 'Jacked', checked:false},
              {id:5 ,name: 'A little extra', checked:false},
              {id:6 ,name: 'Curvy', checked:false},
              {id:7 ,name: 'Full figured', checked:false},
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
          <Text style={styles.titleText}>Body Type</Text>
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
export default BodyTypeScreen;

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