import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,  } from 'react-native';
import Separador from './Seperador'



const Titulo = () => {
  return(
  <View style={styles.titulo} >
    <Text style={styles.txtTitulo} >Tela de cadastro</Text>
  </View>
  )
}

const Login = (props) => {

  const [email, setEmail] = React.useState(null)
  const [senha, setSenha] = React.useState(null)


  return(
    <View style={{marginTop: 40, marginHorizontal: 15, paddingBottom: 70, }}>
    <TextInput placeholder={props.email} onChangeText={setEmail} value={email} style={{paddingLeft: 10}}  />
    <Separador />
    <TextInput placeholder={props.senha} onChangeText={setSenha} value={senha} style={{paddingLeft: 10, paddingTop: 40, }} />
    <Separador />
    </View>
    
  )
}

const Logar = (props) => {
  return(
    <View style={{marginHorizontal: 20, marginBottom: 40}}>
      <Button title={props.logar} />
    </View>
  )
}

const Ou = () => {
  return(
    <View style={{alignItems: 'center', flexDirection: 'row', justifyContent: 'center', marginBottom: 40, marginTop: 30}} >

      <View style={{borderBottomColor: 'gray', borderWidth: 0.3, width: '40%'}} />
        
      <Text>    Ou    </Text>
        
      <View style={{borderBottomColor: 'gray', borderWidth: 0.3, width: '40%'}} />

    </View>
  )
}

const Botoes = (props) => {
  return(
    <View style={{margin: 20,}}>

      <View style={{marginBottom: 40}} >
        <Button title={props.Botoes}  />
      </View>

      <View style={{marginBottom: 40}} >
        <Button title={props.Twiter} style={{}} />
      </View>

      <View style={{ marginBottom: 40}} >
      <Button title={props.Google}  />
      </View>
    </View>
  )
}

export default function TelaLogin() {
  return (
      <View style={styles.container} >
      
      <Titulo />

      <Login email='Email ou Nome de Usuário' senha="Senha" />
        
      <Logar logar="Logar" />

        <Ou />

      <Botoes Botoes="Login com Facebook" Twiter="Login com Twiter" Google="Login com Google"  />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop: 26
  },
  titulo: {
    backgroundColor: 'lightblue', 
    paddingVertical: 20,
    paddingLeft: 25
  },
  txtTitulo: {
    fontSize: 20,
    color: 'white'
  }
});
