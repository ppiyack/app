import {TComponentStyleObject} from '@/models/style/components';
import {HeadSize, Skins, TextColors} from '@/utils/theme';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ICard {
  title: string;
  description: string;
  style: TComponentStyleObject;
}

export default function Card({style, title, description}: ICard) {
  return (
    <View style={[Styles.container, Skins.white, style]}>
      <Text style={[Styles.title, HeadSize.h6, TextColors.dark]}>{title}</Text>
      <Text style={[Styles.title, TextColors.dark]}>{description}</Text>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    padding: 20,
  },

  title: {
    marginBottom: 12,
  },

  description: {
    marginBottom: 12,
  },
});
