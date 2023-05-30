import {TComponentStyleObject} from '@/models/style/components';
import {BorderRadius, Borders, Skins} from '@/utils/theme';
import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface IBaseInput {
  id?: string;
  placeholder: string;
  onChange: (text: string) => void;
  value?: string;
  style?: TComponentStyleObject;
}
export function BaseInput({
  id,
  onChange,
  placeholder,
  value,
  style,
}: IBaseInput) {
  return (
    <TextInput
      id={id}
      onChangeText={onChange}
      placeholder={placeholder}
      value={value}
      style={[
        Styles.input,
        BorderRadius.soft,
        Skins.white,
        Borders.thin,
        style,
      ]}
    />
  );
}

const Styles = StyleSheet.create({
  input: {
    paddingLeft: 12,
  },
});
