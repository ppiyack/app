import BaseButton from '@/components/Button/Button';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';

import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from './types';
import {HeadSize, Skins, TextColors} from '@/utils/theme';

// type IHomeScreen<T extends keyof TabNavigatorParamList> = CompositeScreenProps<
//   MaterialBottomTabScreenProps<TabNavigatorParamList, T>,
//   RootStackScreenProps<keyof RootStackParamList>
// >;

export function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const onPressStart = () => {
    navigation.navigate('Feed');
  };
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView style={Styles.inner}>
        <View style={[Styles.section, Skins.dark]}>
          <Text style={[TextColors.white, HeadSize.h2]}>
            더이상 성과 기록에
          </Text>
          <Text style={[TextColors.white, HeadSize.h2]}>부담갖지 마세요</Text>

          <Text style={[Styles.subCopy, TextColors.white, HeadSize.h6]}>
            삐약이 당신의 성과 관리를 쉽게 도와드릴게요 🐣
          </Text>

          <BaseButton
            onPress={onPressStart}
            style={[Styles.button, Skins.primary]}>
            <Text style={[TextColors.white, HeadSize.h6]}>시작하기</Text>
          </BaseButton>
        </View>

        <View style={[Styles.section, Skins.white]}>
          <Text style={[TextColors.dark, HeadSize.h2]}>
            당신의 소중한 경험을
          </Text>
          <Text style={[TextColors.dark, HeadSize.h2]}>더 멋지게 표현해요</Text>

          <Text style={[Styles.subCopy, TextColors.dark, HeadSize.h6]}>
            1분만에 당신을 빛나게 할 성과 지표를 만들어보세요.
          </Text>
        </View>

        <View style={[Styles.section, Skins.dark]}>
          <Text style={[TextColors.white, HeadSize.h2]}>
            만들기가 어려우신가요?
          </Text>
          <Text style={[TextColors.white, HeadSize.h2]}>
            다른 사람들과 비교해요
          </Text>

          <Text style={[Styles.subCopy, TextColors.white, HeadSize.h6]}>
            다른 친구들과 성과 관리 팁을 공유하며
          </Text>
          <Text style={[TextColors.white, HeadSize.h6]}>
            다른 사람들보다 더 앞서나가요 🙆🏻‍♀️🙆🏻
          </Text>
        </View>
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
  inner: {
    width: '100%',
  },
  section: {
    height: 500,
    padding: 20,
  },
  subCopy: {
    marginTop: 20,
    lineHeight: 30,
  },

  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    width: 120,
    height: 40,
    borderRadius: 20,
  },
});
