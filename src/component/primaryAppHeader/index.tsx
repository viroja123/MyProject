import { View, Text, Pressable } from 'react-native';
import React from 'react';
import { Arrow } from '../../assets/Svgs/index';
import { useTheme } from '@react-navigation/native';
import styles from './style';

interface AppHeaderProps {
  headerName?: string;
  rightIcon?: boolean;
  leftIcon?: boolean;
  handleLeftIcon?: () => void;
  handleRightIcon?: () => void;
}

export default function PrimaryAppHeader({ headerName, rightIcon, leftIcon, handleLeftIcon, handleRightIcon }: AppHeaderProps) {
  const { colors } = useTheme();

  return (
    <View style={styles.mainViewContainer}>
      {/* Left Icon */}
      {leftIcon && (
        <Pressable onPress={handleLeftIcon} accessibilityLabel="Navigate back">
          <Arrow />
        </Pressable>
      )}

      {/* Header Text */}
      <Text style={[styles.centerText, { color: colors.text }]}>{headerName}</Text>

      {/* Right Icon */}
      {rightIcon && (
        <Pressable onPress={handleRightIcon} accessibilityLabel="Navigate forward">
          <Arrow />
        </Pressable>
      )}
    </View>
  );
}
