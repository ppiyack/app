import {View, Modal, StyleSheet, Text} from 'react-native';
import React from 'react';
import {BorderRadius, Flex, HeadSize, Skins, TextColors} from '@/utils/theme';
import BaseButton from '../Button/Button';

export type TModalProps = {
  visible: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onAction: () => void;
  onCancel: () => void;
};
export const BaseModal = ({
  visible,
  onClose,
  title,
  description,
  onAction,
  onCancel,
}: TModalProps) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        onClose();
      }}>
      <View style={[Styles.BackgroundDim, Flex.center, Skins.darkWithOpacity]}>
        <View style={[Styles.Container, BorderRadius.round, Skins.white]}>
          <View style={[Flex.center, Flex.full]}>
            <Text style={[Styles.Title, HeadSize.h5, TextColors.dark]}>
              {title}
            </Text>
            <Text style={[TextColors.dark]}>{description}</Text>
          </View>

          <View style={[Styles.Buttons]}>
            <BaseButton
              style={[
                Flex.center,
                Styles.Button,
                Skins.primary,
                BorderRadius.soft,
              ]}
              onPress={onAction}>
              <Text style={[TextColors.white]}>확인</Text>
            </BaseButton>

            <BaseButton
              style={[
                Flex.center,
                Styles.Button,
                Skins.white,
                BorderRadius.soft,
              ]}
              onPress={onCancel}>
              <Text style={[TextColors.dark]}>취소</Text>
            </BaseButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const Styles = StyleSheet.create({
  BackgroundDim: {
    flex: 1,
  },
  Container: {
    padding: 20,
    alignItems: 'center',
    width: 240,
    height: 180,
  },

  Contents: {
    flex: 1,
  },
  Title: {
    marginBottom: 12,
  },

  Buttons: {
    flexDirection: 'row',
  },
  Button: {
    width: 80,
    height: 40,
  },
});
