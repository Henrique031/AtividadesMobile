import React from 'react';
import { SafeAreaView } from 'react-native';
import Tela1 from './src/componentes/tela1';
import Tela2 from './src/componentes/tela2';



export default function pets() {

  

  return (
    <SafeAreaView style={{flex: 1, marginTop: 40}}>

      <Tela1 />
      {/* <Tela2 /> */}

    </SafeAreaView>
  )
}

