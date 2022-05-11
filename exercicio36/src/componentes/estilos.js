import React from 'react';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    safe: {
      flex: 1,
    },
    titulo:{
      textAlign: 'center',
      fontSize: 26,
      marginTop: 40,
      margin: 10,
    },
    view:{
       flexDirection: 'row',
       marginVertical: 10, 
    },
    txt: {
      fontSize: 16, 
      marginLeft: 18,
    },
    input: {
      borderColor: 'black',
      borderWidth: 0.5,
      paddingRight: 200,
      // textAlign: 'center',
      // justifyContent: 'center',
      // alignItems: 'center',
      // borderBottomWidth: 1,
      // paddingRight: '60%',
      // paddingLeft: 20,
      // paddingBottom: 1,
      // marginBottom: 40,
    },
    button: {
      borderColor: 'red',
      color: 'red',
      backgroundColor: 'red',
      
    },
    viewtouch: {
      alignContent: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    touchtxt:{
      color: 'white',
      backgroundColor: 'blue',
      alignItems: 'center',
      textAlign: 'center',
      justifyContent: 'center',
      marginStart: 20,
      marginEnd: 1,
      borderWidth: 3,
      marginEnd: 280,
      padding: 2,
      fontSize: 16

    },
    seperador: {
      marginVertical: 1,
      borderBottomColor: '#737373',
      borderBottomWidth: 11,
      marginBottom: 26
    },
});