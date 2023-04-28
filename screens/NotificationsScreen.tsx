import React from 'react';

import {RootStackParamList} from './types';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';

type INotificationsScreen = MaterialBottomTabScreenProps<
  RootStackParamList,
  'Notifications'
>;

export function NotificationsScreen({navigation}: INotificationsScreen) {
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
