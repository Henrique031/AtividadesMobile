import React from 'react';
import { Text, View, TextInput, Button, ImageBackground } from 'react-native';
import imgPets from '../../assets/Pets.png'


export default props => {
    function Separador (){
        return(
          <View style={{borderColor: 'black', borderBottomWidth: 1}} />
        )
      }
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={imgPets} style={{flex: 10}} >
        <View style={{alignItems: 'center', }} >
        <Text style={{color: 'orange', fontSize: 40, backgroundColor: 'rgba(155,155,155, 0.3)', paddingHorizontal: 157}} >PETS</Text>
        </View>
      </ImageBackground>

      <View style={{flexGrow: 13, justifyContent: 'space-around',}}>
        <View style={{marginBottom: 8}}>
          <TextInput placeholder='Nome do Pet' style={{paddingStart: 7}} />
        <Separador />
        </View>
        <View style={{marginBottom: 8}}>
          <TextInput placeholder='Raça' style={{paddingStart: 7}} />
        <Separador />
        </View>
        <View style={{marginBottom: 8}}>
          <TextInput placeholder='Peso' style={{paddingStart: 7}} />
        <Separador />
        </View>
        <View style={{marginBottom: 8}}>
          <TextInput placeholder='Nascimento' style={{paddingStart: 7}} />
        <Separador />
        </View>
      </View>  
      
      <View style={{flexGrow: 3, width: 150, marginStart: 130, marginTop: 20, alignItems: 'center'}}>
          <Button title='Cadastrar' style={{}} />
      </View>

      <View style={{backgroundColor: 'lightblue', flexGrow: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'}}>
        <Text >Cadastrar Pet</Text>
        <Text >Listar</Text>

      </View>
    </View>
  )
}