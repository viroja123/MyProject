import React, {useEffect, useRef, useState} from 'react';
import {AboutScreenProps} from '../../utils/types';
import storage from '@react-native-firebase/storage';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

import {style} from './style';
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function About({}: AboutScreenProps) {


  return (
    <View>
     <Text>About Screen</Text>
    </View>
  );
}
