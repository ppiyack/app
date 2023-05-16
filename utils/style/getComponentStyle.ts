import {ImageStyle, StyleSheet, TextStyle, ViewStyle} from 'react-native';

export const getComponentStyle = (
  style: Record<string, ViewStyle | ImageStyle | TextStyle>,
) => {
  return StyleSheet.create(style);
};
