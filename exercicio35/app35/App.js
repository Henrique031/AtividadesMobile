/* Crie uma aplicativo React Native com um formulário para cadastrar Pets conforme o layout em anexo. */

import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

export default () => {

  return(
    <View style={styles.view}>
      <Text style={styles.txt}>Exercício35</Text>
      <TextInput style={styles.txtinput} placeholder=' Nome do Pet' />
      <Text> </Text>
      <TextInput style={styles.txtinput} placeholder=' Raça' />
      <Text> </Text>
      <TextInput style={styles.txtinput} placeholder=' Peso' />
      <Text> </Text>
      <TextInput style={styles.txtinput} placeholder=' Nascimento' />
    </View>
  )

}



const styles = StyleSheet.create({
  txtinput:{
    backgroundColor: "#c5c7e8", //cor do fundo
    borderColor: "black", //cor da borda
    borderWidth: 2, //largura da borda
    borderRadius: 20,
    numberOfLines: "5",
    multiline: "true",
    maxLength:  "100",
    lineHeight: 70

    /* fontSize: 20,
    // width: 100, // largura
    // maxWidth: 200, // largura maxima
    lineHeight: 130, // altura da linha
    borderColor: '#F33',
    borderRadius: 45, // Curva na borda
    borderEndColor: '#F33'
 */
  },
  view:{
    flex: 1,
    backgroundColor: '#5f68eb',

  },
  txt:{
    fontSize:40,
    textAlign:'center'
  }
})