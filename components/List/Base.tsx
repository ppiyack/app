import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

interface AnonymousObjectWithId {
  id: string;
}

interface IList<Data> {
  data: ArrayLike<Data>;
  render: ListRenderItem<Data>;
  onScrollEnd?: FlatList['props']['onEndReached'];
}

export default function BaseList<Data extends AnonymousObjectWithId>({
  data,
  render,
  onScrollEnd,
}: IList<Data>) {
  return (
    <FlatList
      data={data}
      renderItem={render}
      keyExtractor={item => item.id}
      onEndReached={onScrollEnd}
    />
  );
}
