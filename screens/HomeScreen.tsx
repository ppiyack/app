import React from 'react';

import {
  RootStackParamList,
  RootStackScreenProps,
  TabNavigatorParamList,
} from './types';
import {Button, ScrollView, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {CompositeScreenProps} from '@react-navigation/native';
import {MaterialBottomTabScreenProps} from '@react-navigation/material-bottom-tabs';

/**
 * 네비게이터 불편하다.
 */
type IHomeScreen<T extends keyof TabNavigatorParamList> = CompositeScreenProps<
  MaterialBottomTabScreenProps<TabNavigatorParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

export function HomeScreen({navigation}: IHomeScreen<'Home'>) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollView: {
    width: '100%',
    // flex: 1,
  },
});
