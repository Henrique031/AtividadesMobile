import React from 'react';
import { createBottomTabNavigador } from '@react-navigation/bottom-tabs';
import Tela1 from '../views/Tela1';
import Tela2 from '../views/Tela2';


const Tab = createBottomTabNavigador()

export default function barra() {

    return (
        
        <Tab.Navigator>
            <Tab.Screen name='Cadastrar Pet' component={Tela1} />
            <Tab.Screen name='Listar' component={Tela2} />
        </Tab.Navigator>
    )
}

