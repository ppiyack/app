import React from 'react';
import {Pressable, TouchableOpacity} from 'react-native';

import {getComponentStyle} from '../../utils/style/getComponentStyle';
import {EButtonDI, TButtonProps} from './Button.types';
import {useDIContext} from '../../contexts/DIContext';

/**
 * INFO: 추후 버튼에 대한 스펙이 바뀌면 유연하게 변경할 수 있도록 한다.
 */
export default function BaseButton({children, onPress, style}: TButtonProps) {
  const DIContext = useDIContext();

  switch (DIContext.components.button) {
    case EButtonDI.touchableOpacity: {
      return (
        <BaseButton.TouchableOpacity
          onPress={onPress}
          style={getComponentStyle(style)}>
          {children}
        </BaseButton.TouchableOpacity>
      );
    }

    default: {
      return (
        <BaseButton.Pressable
          onPress={onPress}
          style={getComponentStyle(style)}>
          {children}
        </BaseButton.Pressable>
      );
    }
  }
}

BaseButton.Pressable = Pressable;
BaseButton.TouchableOpacity = TouchableOpacity;
