/* 
Faça um app para mostrar 3 botões centralizados com espaço iguais no eixo vertical, 
e de forma que o primeiro botão adicionado fique mais embaixo, o segundo botão no meio e o 
terceiro botão fique acima de todos, conforme layout abaixo:
*---------------------------------------*
| |
| <<C>> |
| |
| <<B>> |
| |
| <<A>> |
| |
*---------------------------------------*
*/

import React from 'react';
import { View, Button } from 'react-native';

export default props => {

  return (
    <View style={{flex: 1}}>

      <View style={{marginTop: 70, marginStart: 45, alignItems: 'flex-start', flexDirection: 'column-reverse', justifyContent: 'space-around', flex: 1,}}>

        <Button title='<<A>>'/>
        <Button title='<<B>>'/>
        <Button title='<<C>>'/>

      </View>

    </View>
  )
}