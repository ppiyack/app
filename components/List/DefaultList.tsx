import React from 'react';
import {FlatList, ListRenderItem} from 'react-native';

interface AnonymousObjectWithId {
  id: string;
}

interface IList<Data> {
  data: ArrayLike<Data>;
  render: ListRenderItem<Data>;
}

export default function DefaultList<Data extends AnonymousObjectWithId>({
  data,
  render,
}: IList<Data>) {
  return (
    <FlatList data={data} renderItem={render} keyExtractor={item => item.id} />
  );
}
