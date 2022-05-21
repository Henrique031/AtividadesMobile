/* import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tela1 from './src/views/Tela1'
import Tela2 from './src/views/Tela2'



const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1, marginTop: 20}} >
      <NavigationContainer  > 
        <Tab.Navigator screenOptions={{headerShown: false}} >
          <Tab.Screen name="Tela1" component={Tela1} options={{ tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'blue', tabBarLabelStyle: { fontSize: 20} }}/>
          <Tab.Screen name="Tela2" component={Tela2} options={{ tabBarActiveTintColor: 'red', tabBarInactiveTintColor: 'blue', tabBarLabelStyle: { fontSize: 20} }}  />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
 */



import React from 'react';
import { Text, View, TextInput, Button, ImageBackground } from 'react-native';
import imgPets from './assets/Pets.png'
import Tela2 from './src/views/Tela2'


const Separador = () => {
  return(
    <View style={{borderColor: 'black', borderBottomWidth: 1}} />
    )
  }
  export default (props) => {

  const Botao = () => {
    return(
      <View style={{flexGrow: 3, width: 150, marginStart: 130, marginTop: 20, alignItems: 'center'}}>
                <Button title='Cadastrar' style={{}} onPress={() => cadastrar()} />
            </View>
        )
      }

      const cadastrar = () => {
        console.warn(nomePet)
        console.warn(raca)
        console.warn(peso)
        console.warn(nasc)
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
          <TextInput placeholder='Nome do Pet' style={{paddingStart: 7}} onChangeText={setNome} value={props.nomePet} />

        <Separador />

        </View>
        <View style={{marginBottom: 8}}>
          <TextInput placeholder='Raça' style={{paddingStart: 7}} onChangeText={setRaca} value={props.raca} />

        <Separador />

        </View>
        <View style={{marginBottom: 8}}>
          <TextInput placeholder='Peso' style={{paddingStart: 7}} onChangeText={setPeso} value={props.peso} />

        <Separador />

        </View>
        <View style={{marginBottom: 8}}>
        <TextInput placeholder='Nacimento' style={{paddingStart: 7}} onChangeText={setNasc} value={props.nasc} keyboardType='numeric' />
        <Separador />
        </View>
      </View>  

      <Botao />
    
    </View> 
  )
}
