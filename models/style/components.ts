import {ImageStyle, StyleProp, TextStyle, ViewStyle} from 'react-native';

export type TBaseStyle = ViewStyle | ImageStyle | TextStyle;

export type TComponentStyleObject = TBaseStyle | StyleProp<TBaseStyle>;
