// In App.js in a new project
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './screens/types';
import {DetailsScreen} from './screens/DetailScreen';

import {TabNavigator} from './navigators/TabNavigator';
import LoginScreen from './screens/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{headerTitle: '상세 정보'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
