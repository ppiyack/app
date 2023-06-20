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
  inputs: {
    title: string;
    description: string;
  };
  editable: boolean;
}

interface IDetailReducerAction {
  type: DetailReducerTypes;
  payload?: Partial<IDetailState>;
}

export enum DetailReducerTypes {
  '조회하기' = '조회하기',
  '수정시작하기' = '수정시작하기',
  '수정중' = '수정중',
  '수정완료하기' = '수정완료하기',
  '수정취소하기' = '수정취소하기',
  '초기화하기' = '초기화하기',
}

const initialState: IDetailState = {
  data: null,
  inputs: {
    title: '',
    description: '',
  },
  editable: false,
};

const DetailContext = createContext<{
  detail: IDetailState;
  dispatchDetail: Dispatch<IDetailReducerAction>;
}>({
  detail: initialState,
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
        inputs: {
          ...state.inputs,
          title: state.data?.title ?? '',
          description: state.data?.description ?? '',
        },
      };
    }

    case DetailReducerTypes.수정중: {
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...(action?.payload?.inputs ?? {}),
        },
      };
    }

    case DetailReducerTypes.수정완료하기: {
      const nextData = state.data
        ? {
            data: {
              ...state.data,
              title: state.inputs.title,
              description: state.inputs.description,
            },
          }
        : {};

      return {
        ...state,
        ...nextData,
        inputs: {
          ...state.inputs,
          title: '',
          description: '',
        },
        editable: false,
      };
    }

    case DetailReducerTypes.수정취소하기: {
      return {
        ...state,
        inputs: {
          title: '',
          description: '',
        },
        editable: false,
      };
    }

    case DetailReducerTypes.초기화하기: {
      return initialState;
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
