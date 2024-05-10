import { View, Text, Pressable, PressableProps, TextStyle, ViewStyle } from 'react-native';
import React from 'react';
import styles from './style';

interface ButtonProps extends PressableProps {
  btnName: string;
  handleButton: () => void;
  btnStyle?: ViewStyle;
  btnTextStyle?: TextStyle;
  containerStyle?: ViewStyle;
  accessibilityLabel?: string; 
}

const PrimaryButton = ({ btnName, handleButton, btnStyle, btnTextStyle, containerStyle, accessibilityLabel }: ButtonProps) => {
  return (
    <View style={containerStyle}>
      <Pressable onPress={handleButton} style={[styles.pressButton, btnStyle]} accessibilityLabel={accessibilityLabel}>
        <Text style={[styles.text, btnTextStyle]}>{btnName}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
