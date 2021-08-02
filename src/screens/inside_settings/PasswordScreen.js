import React, {Component} from 'react';
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

class PasswordScreen extends Component {
    constructor (props) {
        super(props)
        this.state = { queryText: 'handyperson12@gmail.com' }
    }

    handleInputTextChange = (newText) => {
        this.setState({ queryText: newText })
    }

    render() {
        return (
            <View>
            <View style={styles.menuBox}>
                <View style={styles.menuItem}>
                    <TextInput
                        placeholder='Enter your password'
                        style={styles.menuItemText}
                        secureTextEntry={true}
                        />
                </View>
            </View>
            <View style={{paddingHorizontal: 20, paddingVertical: 10,}}>
                <TouchableOpacity style={{justifyContent: 'flex-start', flexDirection: 'row'}}>
                    <Text style={{color: '#00008B', fontSize: 16,}}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.menuBox}>
                <View style={styles.menuItem}>
                    <TextInput
                        placeholder='Enter your new password'
                        style={styles.menuItemText}
                        secureTextEntry={true}
                        />
                </View>
            </View>
            <View style={[styles.menuBox, {marginTop: 1,}]}>
                <View style={styles.menuItem}>
                    <TextInput
                        placeholder='Enter your new password, again'
                        style={styles.menuItemText}
                        secureTextEntry={true}
                        />
                </View>
            </View>
            </View>
        );
    }
}

export default PasswordScreen;

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
});