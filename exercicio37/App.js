import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

 function App() {
  return (
    <View style={styles.container}>

      <View style={{flexDirection: 'column'}}>
      <Text style={styles.txt}></Text>
      <Text style={styles.txt}></Text>
      <Text style={styles.txt}></Text>
    </View>

    <View>
      <Text style={styles.txt}></Text>
    </View>

    </View>
  );
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
  }
});
