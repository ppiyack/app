import {IData} from '@/models/detail';

import React, {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react';

interface IDetailContextProviderProps extends PropsWithChildren {}

interface IDetailState {
  data: IData | null;
}

interface IDetailReducerAction {
  type: DetailReducerTypes;
  payload?: Partial<IDetailState>;
}

export enum DetailReducerTypes {
  '조회하기' = '조회하기',
  '수정하기' = '수정하기',
  '초기화하기' = '초기화하기',
}

const initialState: IDetailState = {
  data: null,
};

const DetailContext = createContext<{
  detail: IDetailState | null;
  dispatchDetail: Dispatch<IDetailReducerAction>;
}>({
  detail: null,
  dispatchDetail: () => {},
});

const detailReducer = (state: IDetailState, action: IDetailReducerAction) => {
  switch (action.type) {
    case DetailReducerTypes.조회하기: {
      return {
        ...state,
        data: action?.payload?.data ?? null,
      };
    }

    case DetailReducerTypes.수정하기: {
      return {
        ...state,
        data: action?.payload?.data ?? null,
      };
    }

    case DetailReducerTypes.초기화하기: {
      return {
        ...state,
        data: null,
      };
    }

    default: {
      return state;
    }
  }
};

export const DetailContextProvider = ({
  children,
}: IDetailContextProviderProps) => {
  const [detail, dispatchDetail] = useReducer(detailReducer, initialState);

  return (
    <DetailContext.Provider value={{detail, dispatchDetail}}>
      {children}
    </DetailContext.Provider>
  );
};

export const useDetailContext = () => useContext(DetailContext);
