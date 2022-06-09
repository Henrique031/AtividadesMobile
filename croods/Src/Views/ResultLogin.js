import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TelaLogin from './TelaLogin';

export default function ResultLogin ({props}) {
    return(
        <View style={styles.conteiner}>
            <Text>Login: {props.email}</Text>
            <Text>Senha: {props.senha}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    conteiner: {

    }
})