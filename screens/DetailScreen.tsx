import React, {StyleSheet, Text, View} from 'react-native';

export function DetailsScreen() {
  return (
    <View style={DeetailsScreenStyles.container}>
      <Text>Details Screen</Text>
    </View>
  );
}

const DeetailsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
