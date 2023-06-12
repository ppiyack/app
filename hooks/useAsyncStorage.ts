import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
interface IUseAsyncStorage<V, DV = unknown> {
  key: string;
  defaultValue: DV;
}

export const useAsyncStorage = <V, DV = unknown>({
  key,
  defaultValue,
}: IUseAsyncStorage<V, DV>): [V | DV, (value: V) => void, () => void] => {
  const [value, setStorageValue] = useState<V | DV>(defaultValue);

  useEffect(() => {
    async function getValue() {
      const keyValue = await AsyncStorage.getItem(key);

      setStorageValue(keyValue ? JSON.parse(keyValue) : defaultValue);
    }

    getValue();
  }, [key, defaultValue]);

  const setValue = (value: V) => {
    try {
      AsyncStorage.setItem(key, JSON.stringify(value)).then(() => {
        setStorageValue(value);
      });
    } catch (e) {
      console.error('Storage Failed: ', e);
    }
  };

  const clearValue = () => {
    AsyncStorage.removeItem(key);
    if (defaultValue) {
      AsyncStorage.setItem(key, JSON.stringify(defaultValue));
    }
  };

  return [value, setValue, clearValue];
};
