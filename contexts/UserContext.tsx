import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';
import {Dispatch} from 'react';

interface IUserContextProviderProps extends PropsWithChildren {}
interface IUserState {
  accessToken: string | null;
  info: {
    userId: string;
    profileUrl: string;
  } | null;
}

interface IUserReducerAction {
  type: string;
  payload: Partial<IUserState>;
}

const initialState = {
  accessToken: null,
  info: null,
};

const UserContext = createContext<{
  user: [IUserState, Dispatch<IUserReducerAction>] | null;
}>({
  user: null,
});

const userReducer = (state: IUserState, action: IUserReducerAction) => {
  switch (action.type) {
    case 'check': {
      return {
        ...state,
        ...action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export const UserContextProvider = ({children}: IUserContextProviderProps) => {
  const user = useReducer(userReducer, initialState);
  return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
