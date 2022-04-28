import React from "react";
import {SafeAreaView,Text, View, TextInput, StyleSheet} from 'react-native';

export default function resumo(){
  const [text, onChangeText] = React.useState('Oque eu aprendi terça dia 26/04 foi que ');
  // const [text, onChangeText] = prompt('Digite algo: ');
  // const [number, onChangeNumber] = React.useState(null);
  return(
  <SafeAreaView>
     <View style={style.div}>
        <Text style={style.text}>'Exercicio 33'</Text>;
        <TextInput style={style.input} value={text} onChangeText={onChangeText}></TextInput>;
        {/* <TextInput style={style.input} value={number} onChangeText={onChangeNumber} placeholder='Digite um número aqui' keyboardType="numeric"></TextInput>; */}
     </View>;
   </SafeAreaView>
  );
};

const style = StyleSheet.create({
  div: {
    justifyContent: 'center',
  },

  text: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',

  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

/* 
Oque eu aprendi terça dia 26/04 foi que é possível order números em um array usando o laço de repetição for. Aprendi que usar o expo CLI é muito fácil, basta baixar o aplicativo do expo e apontar a camera para o qr code do site snack.expo.dev.
*/