// In App.js in a new project

import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

function DetailsScreen() {
  return (
    <View style={DeetailsScreenStyles.container}>
      <Text>Details Screen</Text>
    </View>
  );
}

const DeetailsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

type IHomeScreen = NativeStackScreenProps<
  RootStackParamList,
  'Home',
  'Details'
>;

function HomeScreen({navigation}: IHomeScreen) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Header Title'}}
        />

        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
