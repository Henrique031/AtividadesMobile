import React from 'react';
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