import {View, Text} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {SignupScreenProps} from '../../../utils/types';
import {style} from './style';
import PrimaryButton from '../../../component/primaryButton';
import {
  AutoCapitalize,
  KeyboardType,
  ReturnKeyType,
} from '../../../utils/InputConfig';
import PrimaryAppHeader from '../../../component/primaryAppHeader';
import {useTheme} from '@react-navigation/native';
import PrimaryTextInput from '../../../component/PrimaryTextInput';
import {FacebookSvgs, InstagramSvgs} from '../../../assets/Svgs';
import {Routes} from '../../../navigation/routes';

const Signup = ({navigation}: SignupScreenProps) => {
  const dispatch = useDispatch();

  const inputDetials = [
    {
      PlaceHolder: 'User Name',
      Label: 'Name',
      KeyboardType: KeyboardType.default,
      ReturnKeyType: ReturnKeyType.next,
      AutoCapitalize: AutoCapitalize.none,
      RightIcon: false,
      ErrorKey: 'Name',
      onSubmitEditing: () => {
        // refCallbackForNextInputField.current.focus();
      },
    },
    {
      PlaceHolder: 'Email',
      Label: 'Email',
      KeyboardType: KeyboardType.default,
      ReturnKeyType: ReturnKeyType.next,
      AutoCapitalize: AutoCapitalize.none,
      RightIcon: false,
      ErrorKey: 'Email',
      onSubmitEditing: () => {
        // refCallbackForNextInputField.current.focus();
      },
    },
    {
      PlaceHolder: 'Password',
      Label: 'Password',
      KeyboardType: KeyboardType.default,
      ReturnKeyType: ReturnKeyType.next,
      AutoCapitalize: AutoCapitalize.none,
      RightIcon: true,
      ErrorKey: 'Password',
    },
  ];
  const hadleSignUpBtn = () => {
    console.log('click the single sign Up button');
  };

  const handleNavigation = () => {
    navigation.navigate(Routes.Signup);
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  const {colors} = useTheme();
  return (
    <>
      <PrimaryAppHeader
        leftIcon={true}
        key={'header'}
        handleLeftIcon={handleGoBack}
      />
      <View
        style={[style.mainTextViewStyle, {backgroundColor: colors.background}]}>
        <Text style={style.mainTextStyle} accessibilityLabel="Sign Up now">
          Sign up now
        </Text>
        <Text
          style={style.subTextStyle}
          accessibilityLabel="Please sign Up to continue our app">
          Please fill the details and create account
        </Text>
        {inputDetials.map((item, index) => (
          <View style={{marginTop: 24}} key={index}>
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

        <Text
          style={style.forgotTextStyle}
          accessibilityLabel="Forgot your password?">
          Forget Password?
        </Text>

        <PrimaryButton
          btnName="Sign Up"
          handleButton={hadleSignUpBtn}
          containerStyle={{paddingTop: 40}}
        />
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Already have an account</Text>
          <Text
            style={{paddingHorizontal: 8, color: 'blue', fontSize: 15}}
            onPress={handleNavigation}>
            Sign in
          </Text>
        </View>
        <Text style={{textAlign: 'center'}}>Or connect</Text>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FacebookSvgs />
          <InstagramSvgs />
        </View>
      </View>
    </>
  );
};

export default Signup;
