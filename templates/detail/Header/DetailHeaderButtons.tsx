import BaseButton from '@/components/Button/Button';
import {useDetailContext} from '@/contexts/DetailContext';
import {useAsyncStorage} from '@/hooks/useAsyncStorage';
import {IData} from '@/models/detail';
import {RootStackNavigationProp} from '@/screens/types';
import {BorderRadius} from '@/utils/theme';
import {TextColors} from '@/utils/theme';
import {Flex} from '@/utils/theme';
import {Skins} from '@/utils/theme';
import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function DetailHeaderButtons() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const {detail} = useDetailContext();

  const [feeds, setFeeds] = useAsyncStorage<IData[], IData[]>({
    key: 'feeds',
    defaultValue: [],
  });

  const onDelete = () => {
    setFeeds(feeds.filter(v => v.id !== detail?.data?.id));
    navigation.navigate('Feed');
  };

  return (
    <View style={[Style.container]}>
      <BaseButton
        style={[Style.editButton, Flex.center, Skins.dark, BorderRadius.soft]}>
        <Text style={[TextColors.white]}>수정하기</Text>
      </BaseButton>
      <BaseButton
        style={[Style.editButton, Flex.center, Skins.white, BorderRadius.soft]}>
        <Text style={[TextColors.dark]} onPress={onDelete}>
          삭제하기
        </Text>
      </BaseButton>
    </View>
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
