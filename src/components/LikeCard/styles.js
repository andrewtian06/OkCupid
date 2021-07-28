import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card:{
    backgroundColor: '#fff',
    height: 300,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowOffset: {widht: 0, height: 2},
    shadowRadius: 8,
    elevation: 10,
  },
  imageWrapper:{
    height: '65%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },
  image:{
    width: '100%',
    height: 200,
  },
  textTitle:{
      textAlign: 'center',  
      fontSize: 18,
  },
  titleWrapper:{
    marginTop: 15,
    height: '10%',
    justifyContent: 'center',
  },
  descriptionWrapper:{
    margin: 8,
    height: '10%',
    justifyContent: 'center',
  },
  textDescription:{
    textAlign: 'center',  
    fontSize: 13,
  },
});