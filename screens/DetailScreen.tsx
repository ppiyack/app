import {useDetailContext} from '@/contexts/DetailContext';
import {HeadSize, TextColors} from '@/utils/theme';
import React, {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export function DetailsScreen() {
  const {detail} = useDetailContext();

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView>
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
