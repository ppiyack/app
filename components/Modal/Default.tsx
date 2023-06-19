import {View, Modal, StyleSheet} from 'react-native';
import React from 'react';
import {BorderRadius, Skins} from '@/utils/theme';

export type TModalProps = {
  visible: boolean;
  onClose: () => void;
};
export const Default = ({visible, onClose}: TModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose();
      }}>
      <View style={[Styles.Container, BorderRadius.round, Skins.white]} />
    </Modal>
  );
};

const Styles = StyleSheet.create({
  Container: {
    width: 240,
    height: 160,
  },
});
