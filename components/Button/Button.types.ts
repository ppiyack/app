import {PropsWithChildren} from 'react';
import {TComponentStyleObject} from '../../models/style/components';

export enum EButtonDI {
  'pressable' = 'pressable',
  'touchableOpacity' = 'touchableOpacity',
}

export type TButtonProps = {
  type: EButtonDI;
  onPress: () => void;
  style: TComponentStyleObject;
} & PropsWithChildren;
