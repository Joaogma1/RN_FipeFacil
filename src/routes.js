//react
import React from 'react';
// Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
//pages
import Main from './pages/main/index.js';
import Details from './pages/Details/index.js';
function Routes() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: true, title: 'Detalhes'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
