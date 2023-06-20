import BaseButton from '@/components/Button/Button';
import {BaseModal} from '@/components/Modal/Default';
import {DetailReducerTypes, useDetailContext} from '@/contexts/DetailContext';
import {useAsyncStorage} from '@/hooks/useAsyncStorage';
import {IData} from '@/models/detail';
import {RootStackNavigationProp} from '@/screens/types';
import {BorderRadius} from '@/utils/theme';
import {TextColors} from '@/utils/theme';
import {Flex} from '@/utils/theme';
import {Skins} from '@/utils/theme';
import {useNavigation} from '@react-navigation/native';

import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function DetailHeaderButtons() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const {detail, dispatchDetail} = useDetailContext();

  const [feeds, setFeeds] = useAsyncStorage<IData[], IData[]>({
    key: 'feeds',
    defaultValue: [],
  });

  const onEditStart = () => {
    dispatchDetail({type: DetailReducerTypes.수정시작하기});
  };

  const onEditComplete = () => {
    setVisible(true);
  };

  const onDeleteButtonClick = () => {
    setDeleteModalVisible(true);
  };

  const onCancel = () => {
    dispatchDetail({type: DetailReducerTypes.수정취소하기});
  };

  const [visible, setVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const onActionDeleteModal = () => {
    setFeeds(feeds.filter(v => v.id !== detail?.data?.id));
    navigation.navigate('Feed');
    onCloseDeleteModal();
  };

  const onCloseDeleteModal = () => {
    setDeleteModalVisible(false);
  };

  const onCancelDeleteModal = () => {
    onCloseDeleteModal();
  };

  const onActionModal = () => {
    dispatchDetail({type: DetailReducerTypes.수정완료하기});

    setFeeds(
      feeds.map(v => {
        const nowDetail = detail?.data as IData;
        return v.id === nowDetail?.id
          ? {
              ...nowDetail,
              title: detail?.inputs?.title,
              description: detail?.inputs?.description,
            }
          : nowDetail;
      }),
    );
    onCloseModal();
  };

  const onCloseModal = () => {
    setVisible(false);
  };

  const onCancelModal = () => {
    onCloseModal();
  };

  return (
    <>
      <BaseModal
        title="성과 수정"
        description="성과를 수정하시겠어요?"
        visible={visible}
        onAction={onActionModal}
        onClose={onCloseModal}
        onCancel={onCancelModal}
      />

      <BaseModal
        title="성과 삭제"
        description="성과를 삭제하시겠어요?"
        visible={deleteModalVisible}
        onAction={onActionDeleteModal}
        onClose={onCloseDeleteModal}
        onCancel={onCancelDeleteModal}
      />

      {detail?.editable ? (
        <View style={[Style.container]}>
          <BaseButton
            style={[
              Style.editButton,
              Flex.center,
              Skins.dark,
              BorderRadius.soft,
            ]}>
            <Text style={[TextColors.white]} onPress={onEditComplete}>
              수정완료
            </Text>
          </BaseButton>

          <BaseButton
            style={[
              Style.editButton,
              Flex.center,
              Skins.white,
              BorderRadius.soft,
            ]}>
            <Text style={[TextColors.dark]} onPress={onCancel}>
              수정취소
            </Text>
          </BaseButton>
        </View>
      ) : (
        <View style={[Style.container]}>
          <BaseButton
            style={[
              Style.editButton,
              Flex.center,
              Skins.dark,
              BorderRadius.soft,
            ]}>
            <Text style={[TextColors.white]} onPress={onEditStart}>
              수정하기
            </Text>
          </BaseButton>
          <BaseButton
            style={[
              Style.editButton,
              Flex.center,
              Skins.white,
              BorderRadius.soft,
            ]}>
            <Text style={[TextColors.dark]} onPress={onDeleteButtonClick}>
              삭제하기
            </Text>
          </BaseButton>
        </View>
      )}
    </>
  );
}

const Style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },

  editButton: {
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 12,
    paddingRight: 12,
    marginRight: 8,
  },
});
