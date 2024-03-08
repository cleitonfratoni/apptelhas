import React, {useState, useEffect} from 'react';
import {Text, View, Button, Alert } from 'react-native';
import {css} from './assets/css/Css';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {AddTelhas, Home, Inventario, Revenda, Relatorio} from './views/index'

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name='Home' 
        component={Home} 
        options={{
          title:"Início",
          headerStyle:{backgroundColor:'#C72100'},
          headerTitleStyle:{fontWeight:'bold',alignItems:'center'},
        }}/>
        <Stack.Screen 
        name='Inventario' 
        component={Inventario}
        options={{
          title:"Inventário",
          headerStyle:{backgroundColor:'#C72100'},
          headerTitleStyle:{fontWeight:'bold',alignSelf:'center'}
        }}/>
        <Stack.Screen 
        name='AddTelhas' 
        component={AddTelhas}
        options={{
          title:"Add Telhas",
          headerStyle:{backgroundColor:'#C72100'},
          headerTitleStyle:{fontWeight:'bold',alignSelf:'center'}
        }}/>
        <Stack.Screen 
        name='Revenda' 
        component={Revenda}
        options={{
          title:"Revenda",
          headerStyle:{backgroundColor:'#C72100'},
          headerTitleStyle:{fontWeight:'bold',alignSelf:'center'}
        }}/>
        <Stack.Screen 
        name='Relatorio' 
        component={Relatorio}
        options={{
          title:"Relatório",
          headerStyle:{backgroundColor:'#C72100'},
          headerTitleStyle:{fontWeight:'bold',alignSelf:'center'}
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}