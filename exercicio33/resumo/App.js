/* 
Crie um projeto usando o EXPO CLI chamado resumo,
 o qual deve mostrar no dispositvo um resumo de 5 linhas
do conteúdo que foi mostrado na aula do dia 26/04 em um TextInput
 */

import React from "react";
import {Text, View, SafeAreaView, Button, Alert, StyleSheet, TextInput} from 'react-native';

import Resumo from "./componentes";

/* export default function botao() {
  return(
  <SafeAreaView>
    <View>
      <Button title="Aperte em mim" onPress={ () => Alert.alert('Botão pressionado')}/>
    </View>
  </SafeAreaView>
  )
}
 */
export default function app (){
  const [text, onChangeText] =React.useState('Oque eu aprendi terça dia 26/04 foi que ')
  return(
  <SafeAreaView>
    <View>
      <Text/>
      <Text/>
      {/* <Resumo/> */}
      <Text style={style.texto}>Exercicio 33</Text>
      <TextInput style={style.input} value={text} onChangeText={onChangeText}/>
      <Button style={style.botao} title="Aperte em mim" onPress={ () => Alert.alert('Você clicou em mim')}/>
    </View>

  </SafeAreaView>
  )
}
/* const style = StyleSheet.create({
  botao: {
  },
}); */

const style = StyleSheet.create({
  texto:{
    fontSize: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    borderRadius: 10,
    maxWidth: 1,
    width: 1,
    lineHeight: 1,
    alignItems: 'center'
  }
})