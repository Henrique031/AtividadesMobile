import React from 'react'
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import Task from './assets/tasklist.png'
import Check from './assets/Check.png'
import Circulo from './assets/Circle.png'



export default function Master() {

  function Linha(){
    return(
      <View style={{marginVertical: 8, borderBottomColor: 'black', borderBottomWidth: StyleSheet.hairlineWidth,}} />
    )
  }

  return(

  <View style={{flex: 1, backgroundColor: 'white',}}>

      <ImageBackground source={Task} style={styles.imgBackground}>
        <Text style={styles.txt}>Hoje</Text>
        <Text style={styles.txt1} >Terça, 17 de maio </Text>
      </ImageBackground>

    <View style={{flex: 6}}>

      <View style={{flexDirection: 'row', flex: 1, marginBottom: 1, marginTop: 5, marginStart: 15, alignItems: 'center'  }}>

          <Image source={Check} style={{ width: 30, height: 30,}} />

        <View style={{marginStart: 30,}}>
          <Text style={{textDecorationLine: 'line-through',}}>Assistir aulas na faculdade </Text>
          <Text>qua, 20 de maio</Text>
        </View>

      </View>
            <Linha />
      <View style={{flexDirection: 'row', flex: 1, marginBottom: 1, marginTop: 5, marginStart: 15, alignItems: 'center'  }}>

          <Image source={Circulo} style={{ width: 30, height: 30,}} />

        <View style={{marginStart: 30,}}>
          <Text>Assistir aulas na faculdade </Text>
          <Text>qua, 20 de maio</Text>
        </View>

      </View>
            <Linha />
      <View style={{flexDirection: 'row', flex: 1, marginBottom: 1, marginTop: 5, marginStart: 15, alignItems: 'center'  }}>

          <Image source={Check} style={{ width: 30, height: 30,}} />

        <View style={{marginStart: 30,}}>
          <Text style={{textDecorationLine: 'line-through',}}>Assistir aulas na faculdade </Text>
          <Text>qua, 20 de maio</Text>
        </View>

      </View>
            <Linha />
      <View style={{flexDirection: 'row', flex: 1, marginBottom: 1, marginTop: 5, marginStart: 15, alignItems: 'center'  }}>

          <Image source={Check} style={{ width: 30, height: 30,}} />

        <View style={{marginStart: 30,}}>
          <Text style={{textDecorationLine: 'line-through',}}>Assistir aulas na faculdade </Text>
          <Text>qua, 20 de maio</Text>
        </View>

      </View>
            <Linha />
      <View style={{flexDirection: 'row', flex: 1, marginBottom: 1, marginTop: 5, marginStart: 15, alignItems: 'center'  }}>

          <Image source={Check} style={{ width: 30, height: 30,}} />

        <View style={{marginStart: 30,}}>
          <Text style={{textDecorationLine: 'line-through',}}>Assistir aulas na faculdade </Text>
          <Text>qua, 20 de maio</Text>
        </View>

      </View>
            <Linha />
     
    </View>

  </View>
  )
} 

const styles = StyleSheet.create({

  imgBackground:{
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  txt: {
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'rgba(155, 155, 155, 0.3)',
    paddingVertical: 15,
    paddingHorizontal: 115,
    margin: 20,
    // backgroundColor:
  },
  txt1: {
    backgroundColor: 'rgba(200, 200, 200, 0.4)',
    paddingVertical: 7,
    paddingHorizontal: 95,
    marginBottom: 20,
  },
})