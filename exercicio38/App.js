/* 
Faça um app para mostrar 3 botões alinhados a direita sendo um a esquerda do outro conforme layout abaixo:
*---------------------------------------*
| <<C>><<B>><<A>> |
| |
| |
| |
| |
| |
| |
*---------------------------------------*
 */


import React from 'react';
import { Button, View } from 'react-native';

export default props => {

  return (
  <View style={{flex: 1, backgroundColor: 'lightgray'}}>
    <View style={{flexDirection: 'row-reverse',flex: 1, marginTop: 30, justifyContent: 'space-around', alignItems: 'baseline', marginStart: 150  }}>
          <Button title='<A>'/>
          <Button title='<B>'/>
          <Button title='<C>' />
      
    </View>
  </View>
  )
}