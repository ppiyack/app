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
import {FeedScreen} from './screens/FeedScreen';
import {DetailContextProvider} from './contexts/DetailContext';
import BaseButton from './components/Button/Button';
import {Text, View} from 'react-native';
import DetailHeaderButtons from './templates/detail/Header/DetailHeaderButtons';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <DIContextProvider>
      <UserContextProvider>
        <DetailContextProvider>
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
                name="Feed"
                component={FeedScreen}
                options={{headerTitle: '게시판'}}
              />

              <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                  headerTitle: '상세 정보',
                  headerRight: () => <DetailHeaderButtons />,
                }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </DetailContextProvider>
      </UserContextProvider>
    </DIContextProvider>
  );
}

export default App;
