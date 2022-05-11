import React from "react";
import {Text, View, SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';

function Master(){
  return (  
    <SafeAreaView  style={Styles.view}> 

      {/* <View> */}

        <Text> </Text>
        <Text> </Text>
        <Text style={Styles.txt}>Olá mundo</Text>
        <Text> </Text>

        <View style={Styles.view}>
        <Text>Cliente: </Text>
        <TextInput style={Styles.input} />
        </View>

        <View>
          <Text>Sabor:</Text>
        <TextInput style={Styles.input} />
        </View>

        <View>
          <Text>Tamanho: </Text>
        <TextInput style={Styles.input} />
        </View>

        <View>
          <Text></Text>
        <TextInput style={Styles.input} />
        </View>
        {/* <Button style={Styles.button} title="Next" /> */}
      
      {/* </View> */}
    
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  safe: {
    flex: 1,
    // backgroundColor: '808080'
  },
  view:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txt: {
    textAlign: 'center',
  },
  input: {
   
  },
  button: {
   

  }
})