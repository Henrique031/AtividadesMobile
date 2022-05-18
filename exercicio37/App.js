import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 function App() {
  return (
    <View style={styles.container}>

      <View style={{flexDirection: 'row'}}>
        <Text style={{backgroundColor: 'green', width: 130, height: 130}}></Text>
        <Text style={{backgroundColor: 'white', width: 130, height: 130}}></Text>
        <Text style={{backgroundColor: 'red', width: 130, height: 130}}></Text>  
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={{backgroundColor: 'green', width: 130, height: 130}}></Text>
        <Text style={{backgroundColor: 'white', width: 130, height: 130}}></Text>
        <Text style={{backgroundColor: 'red', width: 130, height: 130}}></Text>  
      </View>
      
 
    </View>
  );
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  }
});