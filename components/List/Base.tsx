import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

interface AnonymousObjectWithId {
  id: string;
}

interface IList<Data> {
  data: ArrayLike<Data>;
  render: ListRenderItem<Data>;
  onScrollEnd?: FlatList['props']['onEndReached'];
  scrollThreshold?: number;
}

export default function BaseList<Data extends AnonymousObjectWithId>({
  data,
  render,
  onScrollEnd,
  scrollThreshold = 0.8,
}: IList<Data>) {
  return (
    <FlatList
      data={data}
      renderItem={render}
      keyExtractor={item => item.id}
      onEndReached={onScrollEnd}
      onEndReachedThreshold={scrollThreshold}
    />
  );
}
