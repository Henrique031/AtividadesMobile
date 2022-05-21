import React from 'react';
import { Text, View, TextInput, Button, ImageBackground } from 'react-native';
import imgPets from '../../assets/Pets.png'


const Separador = () => {
  return(
    <View style={{borderColor: 'black', borderBottomWidth: 1}} />
    )
  }
  export default function Tela1() {
  const Botao = () => {
    return(
      <View style={{flexGrow: 3, width: 150, marginStart: 130, marginTop: 20, alignItems: 'center'}}>
                <Button title='Cadastrar' style={{}} onPress={() => cadastrar()} />
            </View>
        )
      }

      const cadastrar = () => {
        console.log(nomePet)
        console.log(raca)
        console.log(peso)
        console.log(nasc)
      }

      const [ nomePet, setNome] = React.useState(null)
      const [ raca, setRaca] = React.useState(null)
      const [ peso, setPeso] = React.useState(null)
      const [ nasc, setNasc] = React.useState(null)
      
  return (
    <View style={{flex: 1}}>
      
      <ImageBackground source={imgPets} style={{flex: 10}} >
        <View style={{alignItems: 'center', }} >
        <Text style={{color: 'orange', fontSize: 40, backgroundColor: 'rgba(155,155,155, 0.3)', paddingHorizontal: 157}} >PETS</Text>
        </View>
      </ImageBackground>

      <View style={{flexGrow: 13, justifyContent: 'space-around',}}>
        <View style={{marginBottom: 8}}>
          <TextInput placeholder='Nome do Pet' style={{paddingStart: 7}} onChange={setNome} value={nomePet} />

        <Separador />

        </View>
        <View style={{marginBottom: 8}}>
          <TextInput placeholder='Raça' style={{paddingStart: 7}} onChange={setRaca} value={raca} />

        <Separador />

        </View>
        <View style={{marginBottom: 8}}>
          <TextInput placeholder='Peso' style={{paddingStart: 7}} onChange={setPeso} value={peso} />

        <Separador />

        </View>
        <View style={{marginBottom: 8}}>
        <TextInput placeholder='Nacimento' style={{paddingStart: 7}} onChange={setNasc} value={nasc} />
        <Separador />
        </View>
      </View>  

      <Botao />
    
    </View> 
  )
}
/* import React, { useState} from 'react';
import { Text, View, TextInput, Button, ImageBackground } from 'react-native';
import imgPets from '../../assets/Pets.png'
import props from './../../../exercicio39/App';


function Separador (){
  return(
    <View style={{borderColor: 'black', borderBottomWidth: 1}} />
    )
  }
  export default function Tela1(props) {
  function Botao () {
    return(
      <View style={{flexGrow: 3, width: 150, marginStart: 130, marginTop: 20, alignItems: 'center'}}>
                <Button title='Cadastrar' style={{}}  />
            </View>
        )
      }

      let [ nomePet, setNome] = React.useState('')
      let [ raca, setRaca] = React.useState('')
      let [ peso, setPeso] = React.useState('')
      let [ nasc, setNasc] = React.useState('')
      
  return (
    <View style={{flex: 1}}>
      
      <ImageBackground source={imgPets} style={{flex: 10}} >
        <View style={{alignItems: 'center', }} >
        <Text style={{color: 'orange', fontSize: 40, backgroundColor: 'rgba(155,155,155, 0.3)', paddingHorizontal: 157}} >PETS</Text>
        </View>
      </ImageBackground>

      <View style={{flexGrow: 13, justifyContent: 'space-around',}}>
        <View style={{marginBottom: 8}}>
          <TextInput placeholder='Nome do Pet' style={{paddingStart: 7}} onChange={setNome} value={nomePet} />

        <Separador />

        </View>
        <View style={{marginBottom: 8}}>
          <TextInput placeholder='Raça' style={{paddingStart: 7}} onChange={setRaca} value={raca} />

        <Separador />

        </View>
        <View style={{marginBottom: 8}}>
          <TextInput placeholder='Peso' style={{paddingStart: 7}} onChange={setPeso} value={peso} />

        <Separador />

        </View>
        <View style={{marginBottom: 8}}>
        <TextInput placeholder='Nacimento' style={{paddingStart: 7}} onChange={setNasc} value={nasc} />
        <Separador />
        </View>
      </View>  

      <Botao />
    
    </View> 
  )
} */