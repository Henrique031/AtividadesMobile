import React from 'react';
import { TextInput, View, SafeAreaView, ImageBackground, Button } from 'react-native';
// import imgPets from './assets/Pets.png'

export default function pets() {

  function Separador (){
    return(
      <View style={{borderColor: 'black', borderBottomWidth: 1}} />
    )
  }

  return (
    <SafeAreaView style={{flex: 1, marginTop: 40}}>
      {/* <ImageBackground source={imgPets} style={{flex:1}} > */}

      {/* </ImageBackground> */}

      <View style={{marginBottom: 8}}>
        <TextInput placeholder='Nome do Pet' />
      </View>
      <Separador />
      <View style={{marginBottom: 8}}>
        <TextInput placeholder='Raça' />
      </View>
      <Separador />
      <View style={{marginBottom: 8}}>
        <TextInput placeholder='Peso' />
      </View>
      <Separador />
      <View style={{marginBottom: 8}}>
        <TextInput placeholder='Nascimento' />
      </View>
     
        <Button title='Cadastrar' style={{}} />
      <Separador />
    </SafeAreaView>
  )
}