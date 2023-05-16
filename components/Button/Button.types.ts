import {PropsWithChildren} from 'react';
import {TComponentStyleObject} from '@/models/style/components';

export type TButtonProps = {
  onPress: () => void;
  style: TComponentStyleObject;
} & PropsWithChildren;
