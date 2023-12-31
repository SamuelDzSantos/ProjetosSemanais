import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import Home2 from './components/Home2';
import ColorList from './components/ColorList';
import CounterScreen from './components/CounterScreen';
import Form from './components/Form';
import Api from './components/Api';
const Stack = createStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Home2" component={Home2} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Color" component={ColorList} />
        <Stack.Screen name="Counter" component={CounterScreen} />
        <Stack.Screen name="Api" component={Api} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
