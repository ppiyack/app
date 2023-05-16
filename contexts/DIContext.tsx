import {EButtonDI, ESpinnerDI} from '@/models/di';
import React, {PropsWithChildren, createContext, useContext} from 'react';

const componentsDI = {
  button: EButtonDI.pressable,
  spinner: ESpinnerDI.activityIndicator,
};

const initialState = {
  components: componentsDI,
};

const DIContext = createContext(initialState);

export const DIContextProvider = (props: PropsWithChildren) => {
  return (
    <DIContext.Provider value={initialState}>
      {props.children}
    </DIContext.Provider>
  );
};

export const useDIContext = () => useContext(DIContext);
