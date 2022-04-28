/* 
Crie um projeto usando o EXPO CLI na sua maquina chamado meusdados para mostrar no dispositivo os seguintes dados:
Faculdade Fecaf
Analise e Desenvolvimento de Sistemas
RA - Nome
Meu primero programa React - Native
*/

import React from "react";
import { Text, View, StyleSheet, SafeAreaView} from "react-native";

export default function dados(){
  return(
    
    <View style={styles.div}>
      <SafeAreaView>
        <Text style={styles.text}>instituição: Faculdade Fecaf</Text>
        <Text style={{fontSize: 23, fontWeight: 'bold', textAlign: 'center'}}>Curso: Analise e Desenvolvimento de Sistemas</Text>
        <Text style={styles.text}>RA: 30225 - Henrique</Text>
        <Text style={styles.text}>Meu primeiro programa React - Native</Text>
      </SafeAreaView>
    </View>
  )
} 

const styles = StyleSheet.create({
  text: {
    textAlign: 'center', //--> Alinhhamento do texto
    fontWeight: 'bold', //--> Negrito
    fontSize: 23, //--> Tamanho da letra
    margin: 5, //--> Espaçamento entre as linhas 
    
  },
  div: {
    flex: 1, //--> ?
    justifyContent: 'center', //--> ?
    backgroundColor: '#ecf0f1', //--> Cor do fundo da <View>
    padding: 30, //--> Preenchimento
  }
})