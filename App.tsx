// In App.js in a new project
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './screens/types';
import {DetailsScreen} from './screens/DetailScreen';

import {TabNavigator} from './navigators/TabNavigator';
import LoginScreen from './screens/LoginScreen';
import {UserContextProvider} from './contexts/UserContext';
import {DIContextProvider} from './contexts/DIContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <DIContextProvider>
      <UserContextProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Home"
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
      </UserContextProvider>
    </DIContextProvider>
  );
}

export default App;
