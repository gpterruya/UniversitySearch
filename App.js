import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PesquisaUniversidades from './components/PesquisaUniversidades';
import Favoritos from './components/Favoritos';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Pesquisa">
        <Stack.Screen name="Pesquisa" component={PesquisaUniversidades} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
