// In App.js in a new project
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './screens/types';
import {DetailsScreen} from './screens/DetailScreen';

import {TabNavigator} from './navigators/TabNavigator';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{title: 'Header Title'}}
        />

        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
