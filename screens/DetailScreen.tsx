import {BaseInput} from '@/components/Input/BaseInput';
import {DetailReducerTypes, useDetailContext} from '@/contexts/DetailContext';
import {HeadSize, TextColors} from '@/utils/theme';
import {useEffect} from 'react';
import React, {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function DetailsScreen() {
  const {detail, dispatchDetail} = useDetailContext();
  const onChangeTitle = (title: string) => {
    dispatchDetail({
      type: DetailReducerTypes.수정중,
      payload: {
        inputs: {
          title,
          description: detail?.inputs.description ?? '',
        },
      },
    });
  };

  const onChangeDescription = (description: string) => {
    dispatchDetail({
      type: DetailReducerTypes.수정중,
      payload: {
        inputs: {
          title: detail?.inputs.title ?? '',
          description,
        },
      },
    });
  };

  useEffect(() => {
    return () => {
      dispatchDetail({type: DetailReducerTypes.초기화하기});
    };
  }, [dispatchDetail]);

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
        {detail?.editable ? (
          <View>
            <BaseInput
              placeholder="제목을 입력하세요"
              id="title-input"
              onChange={onChangeTitle}
            />

            <BaseInput
              placeholder="내용을 입력하세요"
              id="description-input"
              onChange={onChangeDescription}
            />
          </View>
        ) : (
          <View style={Styles.summary}>
            <Text style={[HeadSize.h5, Styles.title, TextColors.dark]}>
              {detail?.data?.title}
            </Text>

            <Text style={[Styles.description]}>
              {detail?.data?.description
                ? detail.data.description
                : '설명이 없습니다.'}
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 12,
  },
  description: {
    textAlign: 'center',
  },
  summary: {
    marginBottom: 12,
  },
});
