import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs';
import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Feed: undefined;
  Details: {
    id: string;
  };
};

export type RootStackNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export type TabNavigatorParamList = {
  Home: undefined;
  Profile: undefined;
  Notifications: undefined;
};

export type TabNavigatorScreenParams =
  MaterialBottomTabNavigationProp<TabNavigatorParamList>;

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
