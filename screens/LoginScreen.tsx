import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import {RootStackParamList} from './types';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TLoginValue} from '../models/auth';

type ILoginScreen = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({navigation}: ILoginScreen) {
  const [formValue, setFormValue] = useState<TLoginValue>({
    id: '',
    password: '',
  });

  const onClickLoginButton = () => {
    navigation.navigate('Home');
  };

  const onChangeInput = (key: keyof TLoginValue) => (value: string) => {
    setFormValue(state => ({
      ...state,
      [key]: value,
    }));
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.form}>
        <Text>아이디</Text>
        <TextInput
          value={formValue.id}
          onChangeText={onChangeInput('id')}
          style={Styles.input}
        />

        <Text>비밀번호</Text>
        <TextInput
          value={formValue.password}
          onChangeText={onChangeInput('password')}
          style={Styles.input}
        />
      </View>

      <Pressable style={Styles.button} onPress={onClickLoginButton}>
        <Text style={Styles.buttonText}>로그인</Text>
      </Pressable>
    </View>
  );
}

const Styles = StyleSheet.create({
  header: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 20,
  },
  container: {
    padding: 12,
    width: '100%',
  },
  form: {
    // marginLeft: 12,
    // marginRight: 12,
  },
  input: {
    height: 40,
    marginTop: 4,
    marginBottom: 12,
    borderWidth: 0.5,
    borderRadius: 8,
    backgroundColor: '#fff',
  },

  button: {
    backgroundColor: '#752bed',
    marginTop: 20,
    padding: 12,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});
