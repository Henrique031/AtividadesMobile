import React from 'react';
import { Text, View } from 'react-native';
import imgPets from '../../assets/Pets.png'

export default props => {
    function Separador (){
        return(
          <View style={{borderColor: 'black', borderBottomWidth: 3}} />
        )
      }
  return (
    <View>
      <ImageBackground source={imgPets} style={{flex: 10}} >
        <View style={{alignItems: 'center', }} >
        <Text style={{color: 'orange', fontSize: 40, backgroundColor: 'rgba(155,155,155, 0.3)', paddingHorizontal: 157}} >PETS</Text>
        </View>
        <Separador />
      </ImageBackground>
    </View>
  )
}