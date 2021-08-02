import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

class PhoneNumberScreen extends Component {
    constructor (props) {
        super(props)
        this.state = { Phone: '0813126096283' }
    }

    render() {
        return (
            <View>
            <View style={styles.menuBox}>
                <View style={styles.menuItem}>
                    <Text style={styles.menuItemText}>{this.state.Phone}</Text>
                </View>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity
                    onPress={() => {this.props.navigation.navigate('EditPhone')}}
                    style={[styles.signUp, {
                        backgroundColor: '#00008B',
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#fff'
                    }]}>EDIT PHONE NUMBER</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    }
}

export default PhoneNumberScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
  },
  menuBox: {
    backgroundColor: '#fff',
    marginBottom: 1,
    marginTop: 20,
  },
  menuItemText: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: '100%',
    color: '#00008B',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 26,
  },
  container3:{
    height: '30%',
    paddingHorizontal: 15,
    marginTop: 20,
    justifyContent: 'flex-end',
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
});