import {View, Text, Modal, Dimensions, Pressable} from 'react-native';
import React from 'react';
import {EmailSentSvgs} from '../../assets/Svgs';
import {style} from './style';
import {colors} from '../../theme';
import {useTheme} from '@react-navigation/native';
import Colors, {commonThemeColor} from '../../theme/Colors';
import PrimaryButton from '../primaryButton';

interface PrimaryAlertModel {
  isVisible: boolean;
  handleCloseBtn: () => void;
  handleButton: () => void;
}

export default function PrimaryAlertModel({
  isVisible,
  handleCloseBtn,
  handleButton,
}: PrimaryAlertModel) {
  const {height} = Dimensions.get('screen');
  const marginHeight = Number((height / 3).toFixed(0));
  return (
    <Modal
      visible={isVisible}
      onRequestClose={handleCloseBtn}
      animationType={'fade'}
      style={style.container}
      transparent={true}>
      <View style={{flex: 1, backgroundColor: '#8080807D'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 200,
            marginTop: marginHeight,
            marginHorizontal: 20,
            borderRadius: 24,
          }}>
          <EmailSentSvgs />
          <Text style={style.titleTextStyle} onPress={handleCloseBtn}>
            Check your email
          </Text>

          <Text
            style={[
              style.titleTextStyle,
              {color: commonThemeColor.primaryLightTextColor},
            ]}>
            We have send password recovery instruction to your email
          </Text>

          {/* <Pressable style={{backgroundColor:Colors.commonThemeColor.primaryLightTextColor}}><Text>OK</Text></Pressable> */}
          <PrimaryButton
            btnName="OK"
            handleButton={handleButton}
            btnStyle={{width: 200}}
          />
        </View>
      </View>
    </Modal>
  );
}
