import React from 'react';
import {useDIContext} from '@/contexts/DIContext';
import {BaseSpinnerProps} from './Spinner.types';
import {ActivityIndicator} from 'react-native-paper';
import {ESpinnerDI} from '@/models/di';

export default function BaseSpinner({size}: BaseSpinnerProps) {
  const DIContext = useDIContext();

  switch (DIContext.components.spinner) {
    case ESpinnerDI.activityIndicator: {
      return <BaseSpinner.ActivityIndicator size={size} color="#752bed" />;
    }

    default: {
      // TODO: 추후 lottie로 기본값을 설정해야 한다.
      return <BaseSpinner.ActivityIndicator size={size} color="#752bed" />;
    }
  }
}

BaseSpinner.ActivityIndicator = ActivityIndicator;
