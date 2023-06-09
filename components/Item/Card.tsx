import {TComponentStyleObject} from '@/models/style/components';
import {HeadSize, Skins, TextColors} from '@/utils/theme';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import BaseButton from '../Button/Button';

interface ICard {
  title: string;
  description: string;
  style: TComponentStyleObject;
  onPress: (e?: Event) => void;
}

export default function Card({style, title, description, onPress}: ICard) {
  return (
    <BaseButton
      style={[Styles.container, Skins.white, style]}
      onPress={onPress}>
      <Text style={[Styles.title, HeadSize.h6, TextColors.dark]}>{title}</Text>
      <Text style={[Styles.title, TextColors.dark]}>{description}</Text>
    </BaseButton>
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
