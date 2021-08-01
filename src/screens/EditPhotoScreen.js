import React, { Component } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Alert, View, Modal, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

class EditPhotoScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            modalVisible: false,
            ImageUri: '',
            fileList: [{havePicture: false},{havePicture: false},{havePicture: false},{havePicture: false},{havePicture: false},{havePicture: false},{havePicture: false},{havePicture: false},{havePicture: false},{havePicture: false},],
        }
    }

    renderItem = ({item, index}) => {
        return(
            <View style={styles.imageBoxContainer}>
                <Image style={styles.imageBox} source={item.url}/>
            </View>
        );
    }

    verifyPermissions = async () => {
        const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if(result.status !== 'granted'){
            Alert.alert(
                'Insufficient permissons!',
                'You need to grand camera permissions to use this app.',
                [{text: 'Okay'}],
            );
            return false;
        }
        return true;
    }
    
    takeImageHandler = async () =>{
        let newData = this.state.fileList;
        if(newData.findIndex(x => x.havePicture === false) === -1){
            Alert.alert(
            "",
            "You can only have 10 pictures max",
            [
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
            );
            return;
        }
        const hasPermission = await this.verifyPermissions();
        if(!hasPermission){
            return;
        }
        const image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.5,
        });
        this.setState({ImageUri: image.uri});
        
        const source = {uri: image.uri};
        // let item = {url: source};
        const index = newData.findIndex(x => x.havePicture === false);
        newData[index] = {url: source, havePicture: true};
        // newData.push(item);
        this.setState({fileList: newData});
    }

    takeImageLibrary = async () =>{
        let newData = this.state.fileList;
        if(newData.findIndex(x => x.havePicture === false) === -1){
            return;
        }
        const hasPermission = await this.verifyPermissions();
        if(!hasPermission){
            return;
        }
        const image = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [4, 4],
            quality: 0.5,
        });
        this.setState({ImageUri: image.uri});
        
        const source = {uri: image.uri};
        const index = newData.findIndex(x => x.havePicture === false);
        newData[index] = {url: source, havePicture: true};
        this.setState({fileList: newData});
    }

    render(){
    return (
        <View style={styles.container}>
            {/* Pop Up Component using Modal */}
            <Modal 
                animationType="fade"
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={()=> {this.setState({modalVisible: false})}}
            >
            <TouchableOpacity 
                style={styles.container2} 
                activeOpacity={1} 
                onPressOut={()=> {this.setState({modalVisible: false})}}
            >
                <ScrollView 
                    directionalLockEnabled={true}
                    contentContainerStyle={styles.scrollModal}
                >
                <TouchableWithoutFeedback>
                    <View style={styles.modalContainer}>
                        <View style={styles.ModalHeader}>
                            <Text style={{
                                color: '#00008B', fontSize: 20
                                }}
                            >
                                Take a photo!
                            </Text>
                            <Text style={{textAlign: 'center',marginTop: '5%'}}>You need to be in the photo and also, no naughty bits!</Text>
                        </View>
                        <View style={styles.ModalBody}>
                            <TouchableOpacity style={styles.modalButton} onPress={()=>{this.takeImageHandler(), this.setState({modalVisible: false})}}>
                                <Text style={styles.modalButtonText}>Take Photo</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.modalButton} onPress={()=>{this.takeImageLibrary(), this.setState({modalVisible: false})}}>
                                <Text style={styles.modalButtonText}>Choose Existing</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                </ScrollView>
            </TouchableOpacity>   
            </Modal> 
            {/* End of Pop Up Component using Modal */}


            <FlatList
                data= {this.state.fileList}
                renderItem= {this.renderItem}
                keyExtractor= {(item, index) => index.toString()}
                extraData= {this.state}
                numColumns={2}
                contentContainerStyle= {styles.flatListStyle}
            />
            
            {/* { (this.state.ImageUri === '') ? (
                <Text>Hello</Text>
            ) : (
                <Image style={{width: 100, height: 100}} source={{uri: this.state.ImageUri}}/>
            )} */}
            <TouchableOpacity 
                style={styles.TouchableStyle}
                onPress={()=> {this.setState({modalVisible: true})}}
            >
            <View style={styles.circle}>
                <Icon
                    name='image-plus'
                    size={30}
                    style={{
                        alignSelf: 'center',
                        color: '#fff'
                    }}
                />
            </View> 
            </TouchableOpacity>
        </View>
    );
    }
}

export default EditPhotoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems:'center',
  },
  alignButton:{
    borderWidth: 1,
  },
  circle: {
    backgroundColor: '#00008B',
    width: 55,
    height: 55,
    borderRadius: 28,
    justifyContent: 'center',
  },
  TouchableStyle:{
    width: 55,
    height: 55,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  container2: {
    width: '100%',
    height:'100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  flatListStyle: {
      paddingHorizontal: 20,
      paddingVertical: 20,
  },
  ModalHeader:{
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    backgroundColor: '#F5F5F5'
  },
  scrollModal:{
    width: '100%',
    height:'100%',
    justifyContent: 'center',
  },
  modalContainer:{
      width: 300,
      height:'auto',
      backgroundColor: '#fff',
      alignSelf: 'center'
  },
  modalButton:{
    borderTopWidth: 1,
    borderColor: '#d3d3d3',
    paddingHorizontal: 20, 
    paddingVertical: 15, 
    alignItems:'center',
  },
  modalButtonText:{
    fontSize: 17,
    color: '#00008B'
  },
  imageBoxContainer: {
    width: '50%',
    padding: 5,
  },
  imageBox: {
    height: 150,
    borderWidth: 1,
    backgroundColor: '#dddd',
  },
});