import React from 'react';

import {RootStackParamList} from './types';
import {Button, StyleSheet, Text, View} from 'react-native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';

type IFeedScreen = MaterialBottomTabScreenProps<RootStackParamList, 'Feed'>;

export function FeedScreen({navigation}: IFeedScreen) {
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
