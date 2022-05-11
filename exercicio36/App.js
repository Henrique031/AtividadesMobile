/* 
Crie um formulário para cadastrar uma pizza conforme o layout em anexo.
Desafios:
Deixar o objeto com os dados de estilos em um arquivo separado, que será importado posteriormente 
Criar um componente para exibir o label e o textinput em um módulo separado que possa ser importado pelo módulo principal
Reutilize o componente criado, passando o texto a ser mostrado na tela como atributo da tag do componente
 */


import React from "react";
import {Text, View, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import Estilo from './src/componentes/estilos'
import { Button } from 'react-native';

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

        <View style={Estilo.viewtouch}>
          <TouchableOpacity style={{}} >
            <Text style={Estilo.touchtxt}>Examinar</Text>
          </TouchableOpacity>
        </View>

        <Button title="Aperte em mim"/>
         
    </SafeAreaView>
  )
}

export default Master;



