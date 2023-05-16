import React, {PropsWithChildren, createContext, useContext} from 'react';
import {EButtonDI} from '../components/Button/Button.types';
import {ESpinnerDI} from '../components/Spinner/Spinner.types';

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
