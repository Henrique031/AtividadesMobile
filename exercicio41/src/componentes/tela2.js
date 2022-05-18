import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import imgPets from '../../assets/Pets.png'

export default props => {
    function Separador (){
        return(
          <View style={{borderColor: 'lightgray', borderBottomWidth: 6}} />
        )
      }
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={imgPets} style={{flex: 1}} >
        <View style={{alignItems: 'center', }} >
        <Text style={{color: 'orange', fontSize: 40, backgroundColor: 'rgba(155,155,155, 0.3)', paddingHorizontal: 157}} >
          PETS
        </Text>
        </View>
      </ImageBackground>
        <Separador />

        <View style={{flex: 1}}>
          <View style={{marginTop: 20, marginStart: 20, marginBottom: 20, alignItems: 'flex-start', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Mike
            </Text>
            <Text style={{fontWeight: '100', fontSize: 17}}>
              Vira lata-11,4 Kilos-25/01/2014
            </Text>
          </View>
            <Separador />
          <View style={{marginTop: 20, marginStart: 20, marginBottom: 20, alignItems: 'flex-start', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Princisa
            </Text>
            <Text style={{fontWeight: '100', fontSize: 17}}>
              Poodle-7,3 Kilos-10/06/2018
            </Text>
          </View>
            <Separador />
          <View style={{marginTop: 20, marginStart: 20, marginBottom: 20, alignItems: 'flex-start', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Mike
            </Text>
            <Text style={{fontWeight: '100', fontSize: 17}}>
              Vira lata-11,4 Kilos-25/01/2014
            </Text>
          </View>
            <Separador />
          <View style={{marginTop: 20, marginStart: 20, marginBottom: 20, alignItems: 'flex-start', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Mike
            </Text>
            <Text style={{fontWeight: '100', fontSize: 17}}>
              Vira lata-11,4 Kilos-25/01/2014
            </Text>
          </View>
            <Separador />
        </View>
    </View>
  )
}