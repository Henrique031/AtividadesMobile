/* 
Crie um projeto usando o EXPO CLI chamado resumo, 
o qual deve mostrar no dispositvo um resumo de 5 
linhas do conteúdo que foi mostrado na aula do dia 26/04 em um TextInput
*/

/* Oque eu aprendi na aula do dia 26/04 foi que a gente pode ordenar os dados em ordem crescente, dentro de um array, usando apenas um laço de repetição for. O professor nos mostrou um site, chamado snack.expo.dev onde podemos desenvolver nossa aplicação, apenas usando um navegador web. E por último, ele nos mostrou algumas tags do react native e como importar algumas bibliotecas */


import React from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
// import { useState } from 'react';

export default function resumo () {
  const [nome, setNome] = React.useState(null)
  return(
    <SafeAreaView style={styles.view}>
    <View >
      <Text> </Text>
      <Text> </Text>
      <Text style={styles.txt}>Resumo</Text>
      <Text> </Text>
       <TextInput style={styles.txtInput} value={nome}  placeholder="  Digite aqui oque você aprendeu dia 26/04" onChangeText={setNome}/>
    </View>

    <View>
       <Text> </Text> 
       <Text> </Text>
       <Text style={styles.txtnome} > Resumo: {nome}</Text>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  view:{
    flex: 1,
    backgroundColor: "gray",
  },
   txt:{
    fontSize: 22,
    textAlign: 'center',
  },
  txtInput:{
    borderColor: "black",
    backgroundColor: "white",
   borderWidth: 2, // largura da borda
   borderRadius: 10,
   lineHeight: 20, //altura da linha
   height: 50,  // altura

  },
  txtnome: {
    fontSize: 19,
  }
}) 

