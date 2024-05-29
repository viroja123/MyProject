import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {commonThemeColor} from '../../../theme/Colors';
import PrimaryAppHeader from '../../../component/primaryAppHeader';
import PrimaryTextInput from '../../../component/PrimaryTextInput';
import PrimaryButton from '../../../component/primaryButton';
import {style} from './style';
import {
  AutoCapitalize,
  KeyboardType,
  ReturnKeyType,
} from '../../../utils/InputConfig';
import {useTheme} from '@react-navigation/native';
import {ForgotPasswordScreenProps} from '../../../utils/types';
import PrimaryAlertModel from '../../../component/primaryAlertModel';
import {Routes} from '../../../navigation/routes';

const inputDetials = [
  {
    PlaceHolder: 'User Email',
    Label: 'Email',
    KeyboardType: KeyboardType.default,
    ReturnKeyType: ReturnKeyType.next,
    AutoCapitalize: AutoCapitalize.none,
    RightIcon: false,
    ErrorKey: 'EmailError',
    onSubmitEditing: () => {
      // refCallbackForNextInputField.current.focus();
    },
  },
];

export default function ForgotPassword({
  navigation,
}: ForgotPasswordScreenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const {colors} = useTheme();
  const hadleForgotBtn = () => {
    console.log('CLick passwrod button');
    setIsVisible(true);
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleClose = () => {
    setIsVisible(false);
  };
  return (
    <>
      <PrimaryAppHeader
        leftIcon={true}
        key={'header'}
        handleLeftIcon={handleBack}
      />
      <View
        style={{
          // backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={[{backgroundColor: colors.background}]}>
          <Text
            style={style.mainTextStyle}
            accessibilityLabel="Forgot Password">
            Forgot password
          </Text>
          <Text style={style.subTextStyle} accessibilityLabel="forgot">
            Enter your email account to reset your password
          </Text>
          {inputDetials.map((item, index) => (
            <View style={{marginTop: 40}} key={index}>
              <View>
                {/* <Text style={{ color: 'black', fontSize: 16, fontWeight: '400' }}>{item.Label}</Text> */}
              </View>
              <PrimaryTextInput
                key={index}
                rightIcon={item.RightIcon}
                placeholder={item.PlaceHolder}
                onChangeText={text => {
                  console.log(text, '----------------');
                }}
                typeOfKeyboard={item.KeyboardType}
                onBlur={(item: string) => {
                  return console.log(item, '------------blur', index);
                }}
                handleRightIconClick={() => {
                  console.log('-------------->');
                }}
              />
            </View>
          ))}
          <PrimaryButton
            btnName="Reset Password"
            handleButton={hadleForgotBtn}
            containerStyle={{paddingTop: 40}}
          />
          <PrimaryAlertModel
            isVisible={isVisible}
            handleCloseBtn={handleClose}
            handleButton={() => {
              setIsVisible(false), navigation.navigate(Routes.OtpScreen);
            }}
          />
        </View>
      </View>
    </>
  );
}
