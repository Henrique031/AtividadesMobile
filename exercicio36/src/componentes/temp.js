import React from "react";
import {Text, View, SafeAreaView, StyleSheet, TextInput, Button} from 'react-native';
import Estilo from './src/componentes/estilos'

const Seperador = () => (
  <View style={Estilo.view}/>
)

function Master(){
  return (  
    <SafeAreaView  style={Estilo.safe}> 
 
        <Text style={Estilo.titulo}> Exercício 36 </Text>
      
         <View style={Estilo.view}>
          <Text style={Estilo.txt}>Cliente:      </Text>
          <TextInput style={Estilo.input} />
        </View>

        <View style={Estilo.view}>
          <Text style={Estilo.txt}>Sabor:        </Text>
          <TextInput style={Estilo.input} />
        </View>
     
        <View style={Estilo.view}>
          <Text style={Estilo.txt}>Tamanho:  </Text>
          <TextInput style={Estilo.input} />
        </View> 

        <View style={Estilo.view}>
          <Text style={Estilo.txt}>Qualidade: </Text>
          <TextInput style={Estilo.input} />
        </View>

        <View style={Estilo.button}>
          <Button title="Gravar" />
        </View>
         
    </SafeAreaView>
  )
}

export default Master;


