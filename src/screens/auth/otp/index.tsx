import {View, Text, KeyboardAvoidingView} from 'react-native';
import React from 'react';
import {style} from './style';
import PrimaryAppHeader from '../../../component/primaryAppHeader';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import PrimaryButton from '../../../component/primaryButton';

export default function OtpScreen() {
  return (
    <>
      <PrimaryAppHeader
        handleLeftIcon={() => {
          console.log('ksvm');
        }}
        leftIcon={true}
      />
      <KeyboardAvoidingView>
        <View style={style.mainView}>
          <Text
            style={style.mainTextStyle}
            accessibilityLabel="OTP Verification">
            OTP Verification
          </Text>
          <Text style={style.subTextStyle} accessibilityLabel="email">
            Please check your email www.uihut@gmail.com to see the verification
            code
          </Text>
        </View>
        <View style={{paddingHorizontal: 20, marginTop: 40}}>
          <Text style={style.otpTextStyle}>OTP Code</Text>
          <OTPInputView
            style={{marginVertical: 20, height: 50}}
            pinCount={4}
            autoFocusOnLoad={true}
            codeInputFieldStyle={style.underlineStyleBase}
            codeInputHighlightStyle={style.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
          />
          <PrimaryButton
            btnName="Verify"
            handleButton={() => {
              console.log('Click OTP button');
            }}
            containerStyle={{paddingVertical: 20}}
          />
        </View>
      </KeyboardAvoidingView>
    </>
  );
}
