import Card from '@/components/Item/Card';
import BaseList from '@/components/List/Base';
import {BorderRadius, Flex, HeadSize, Skins, TextColors} from '@/utils/theme';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import uuid from 'react-native-uuid';
import {RootStackParamList} from './types';
import {Input} from '@/components/Input';
import BaseButton from '@/components/Button/Button';

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

  const [inputValue, setInputValue] = useState('');

  const onCardPress = (id: string) => {
    navigation.navigate('Details', {id});
  };

  const onChange = (text: string) => {
    setInputValue(text);
  };

  const onSubmit = () => {
    setInputValue('');
  };

  return (
    <SafeAreaView style={[Styles.container, Skins.dark]}>
      <Text style={[Styles.head, HeadSize.h4, TextColors.white]}>
        성장을 기록해요!
      </Text>

      <View style={Styles.feeds}>
        <View style={Styles.form}>
          <Input.Base
            style={Flex.full}
            placeholder="성과 기록하기"
            onChange={onChange}
            value={inputValue}
          />
          <BaseButton
            onPress={onSubmit}
            style={[
              Flex.center,
              Styles.formButton,
              Skins.primary,
              BorderRadius.soft,
            ]}>
            <Text style={TextColors.white}>추가하기</Text>
          </BaseButton>
        </View>

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
  form: {
    display: 'flex',
    flexDirection: 'row',
  },
  formButton: {
    width: 80,
    marginLeft: 12,
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
