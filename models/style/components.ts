import {ImageStyle, TextStyle, ViewStyle} from 'react-native';

export type TBaseStyle = ViewStyle | ImageStyle | TextStyle;

export type TComponentStyleObject = Record<string, TBaseStyle>;
