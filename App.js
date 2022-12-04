import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import registerNNPushToken from 'native-notify';
import { Text, View } from 'react-native';

import Home from './src/screens/Home'

const Stack = createNativeStackNavigator() ;

export default function App() {
  //push notifications 
  registerNNPushToken(5137, 'rOdbNIpmwabVsOIt7JN4YB');
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

