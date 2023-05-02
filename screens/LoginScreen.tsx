import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from './types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type ILoginScreen = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({navigation}: ILoginScreen) {
  const onClickLoginButton = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={Styles.container}>
      <Text>카카오로 바로 시작하기</Text>
      <Button title="로그인" onPress={onClickLoginButton} />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
