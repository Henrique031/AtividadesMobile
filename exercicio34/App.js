/* 
Crie um projeto usando o EXPO CLI chamado matematica que mostre na tela a seguinte expressão e 
seu resultado:
4 * 8 / 2 = 16

**Desafio coloque as informações da expressão e do resultado em variáveis
*/


import react from "react";
import { Text, View, StyleSheet } from "react-native";

export default () => {
  let calculo = 4 * 8 / 2
  let resultado = calculo
  return(
    <View style={styles.view} >
      <Text style={styles.txt}>
        4 * 8 / 2 = {resultado}
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    view:{
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#bcbdd4',
      flex: 1,
      // backgroundColor: '#bcbdd4'

    },
    txt:{
      textAlign:'center',
      fontSize: 30,
    },
})