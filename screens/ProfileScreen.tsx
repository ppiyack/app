import React from 'react';

import {RootStackParamList} from './types';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';

type IProfileScreen = MaterialBottomTabScreenProps<
  RootStackParamList,
  'Profile'
>;

export function ProfileScreen({navigation}: IProfileScreen) {
  return (
    <View style={styles.container}>
      <Text>Profile Screen</Text>
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
