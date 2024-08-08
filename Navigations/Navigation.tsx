import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { inicio } from '../src/Screens/inicio';
import { formulario } from '../src/Screens/formulario';

const Stack = createStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{ 
      headerShown: false
    }}>
      <Stack.Screen name="Inicio" component={inicio} />
      <Stack.Screen name="Formurario" component={formulario} />
    </Stack.Navigator>
  );
}