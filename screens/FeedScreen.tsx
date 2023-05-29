import Card from '@/components/Item/Card';
import BaseList from '@/components/List/Base';
import {HeadSize, Skins, TextColors} from '@/utils/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import uuid from 'react-native-uuid';
import {RootStackParamList} from './types';

const data = [
  {
    id: uuid.v4() as string,
    title: '타이틀1입니다.',
    description: '설명1입니다.',
  },
  {
    id: uuid.v4() as string,
    title: '타이틀2입니다.',
    description: '설명2입니다.',
  },
  {
    id: uuid.v4() as string,
    title: '타이틀1입니다.',
    description: '설명1입니다.',
  },
  {
    id: uuid.v4() as string,
    title: '타이틀2입니다.',
    description: '설명2입니다.',
  },
  {
    id: uuid.v4() as string,
    title: '타이틀1입니다.',
    description: '설명1입니다.',
  },
  {
    id: uuid.v4() as string,
    title: '타이틀2입니다.',
    description: '설명2입니다.',
  },
  {
    id: uuid.v4() as string,
    title: '타이틀1입니다.',
    description: '설명1입니다.',
  },
  {
    id: uuid.v4() as string,
    title: '타이틀2입니다.',
    description: '설명2입니다.',
  },
];

export function FeedScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onCardPress = (id: string) => {
    navigation.navigate('Details', {id});
  };

  return (
    <SafeAreaView style={[Styles.container, Skins.dark]}>
      <Text style={[Styles.head, HeadSize.h4, TextColors.white]}>
        성장을 기록해요!
      </Text>

      <View style={Styles.feeds}>
        <BaseList
          data={data}
          render={({item}) => (
            <Card
              style={Styles.card}
              title={item.title}
              description={item.description}
              onPress={() => onCardPress(item.id)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  head: {
    margin: 12,
  },
  feeds: {
    flex: 1,
    width: '100%',
    paddingLeft: 24,
    paddingRight: 24,
  },
  card: {
    marginTop: 12,
    marginBottom: 12,
  },
});
