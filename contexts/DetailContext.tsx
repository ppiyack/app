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
  editable: boolean;
}

interface IDetailReducerAction {
  type: DetailReducerTypes;
  payload?: Partial<IDetailState>;
}

export enum DetailReducerTypes {
  '조회하기' = '조회하기',
  '수정시작하기' = '수정시작하기',
  '수정완료하기' = '수정완료하기',
  '초기화하기' = '초기화하기',
}

const initialState: IDetailState = {
  data: null,
  editable: false,
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

    case DetailReducerTypes.수정시작하기: {
      return {
        ...state,
        editable: true,
      };
    }

    case DetailReducerTypes.수정완료하기: {
      return {
        ...state,
        data: action?.payload?.data ?? null,
        editable: false,
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
