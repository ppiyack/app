import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
interface IUseAsyncStorage<V, DV> {
  key: string;
  defaultValue: DV;
}

interface ISetValueParams<V, DV> {
  key: string;
  value: V | DV;
}

export const useAsyncStorage = <V, DV>({
  key,
  defaultValue,
}: IUseAsyncStorage<V, DV>) => {
  const [value, setStorageValue] = useState<V | DV>(defaultValue);

  useEffect(() => {
    async function getValue() {
      const keyValue = await AsyncStorage.getItem(key);

      setStorageValue(() => (keyValue ? JSON.parse(keyValue) : defaultValue));
    }

    getValue();
  }, [key, defaultValue]);

  const setValue = ({key, value}: ISetValueParams<V, DV>) => {
    try {
      AsyncStorage.setItem(key, JSON.stringify(value)).then(() => {
        setStorageValue(() => value);
      });
    } catch (e) {
      console.error('Storage Failed: ', e);
    }
  };

  return {
    value,
    setValue,
  };
};
