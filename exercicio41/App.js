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



  export default function App() {

    const Botao = () => {
      return(
        <View style={{flexGrow: 3, width: 150, marginStart: 130, marginTop: 20, alignItems: 'center'}}>
                  <Button title="Cadastrar" onPress={() => cadastrar()} />
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

      <ImgFundo />
      
      <View style={{flexGrow: 13, justifyContent: 'space-around',}}>
        <Formulario nome="Digite o nome do seu pet" sets={setNome} variavel={nomePet} />
        <Formulario nome="Digite a raçã do seu pet" sets={setRaca} variavel={raca} />      
        <Formulario nome="Digite o peso do seu pet" sets={setPeso} variavel={peso} />  
        <Formulario nome="Digite o Nascimento do seu pet" sets={setNasc} variavel={nasc} />
      </View>   

      <Botao titulo="Cadastrar" />
    
    </View> 
  )
}

const ImgFundo = () => {
  return(
    <ImageBackground source={imgPets} style={{flex: 10}} >
        <View style={{alignItems: 'center', }} >
        <Text style={{color: 'orange', fontSize: 40, backgroundColor: 'rgba(155,155,155, 0.3)', paddingHorizontal: 157}} >PETS</Text>
        </View>
      </ImageBackground>

  )
}

const Formulario = (props) => {

  const Separador = () => {
  return(
    <View style={{borderColor: 'black', borderBottomWidth: 1}} />
    )
  }

  return(

      <View style={{marginBottom: 8}}>
        <TextInput placeholder={props.nome} style={{paddingStart: 7}} onChangeText={props.sets} value={props.variavel} />
        <Separador />
      </View>
    )
}

