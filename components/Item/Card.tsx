import React from 'react';
import {Text, View} from 'react-native';

interface ICard {
  title: string;
  description: string;
}

export default function Card({title, description}: ICard) {
  return (
    <View>
      <Text>{title}</Text>
      <Text>{description}</Text>
    </View>
  );
}
