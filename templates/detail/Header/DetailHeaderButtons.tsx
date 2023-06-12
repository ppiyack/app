import BaseButton from '@/components/Button/Button';
import {BorderRadius} from '@/utils/theme';
import {TextColors} from '@/utils/theme';
import {Flex} from '@/utils/theme';
import {Skins} from '@/utils/theme';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function DetailHeaderButtons() {
  return (
    <View style={[Style.container]}>
      <BaseButton
        style={[Style.editButton, Flex.center, Skins.dark, BorderRadius.soft]}>
        <Text style={[TextColors.white]}>수정하기</Text>
      </BaseButton>
      <BaseButton
        style={[Style.editButton, Flex.center, Skins.white, BorderRadius.soft]}>
        <Text style={[TextColors.dark]}>삭제하기</Text>
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
