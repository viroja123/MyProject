import {View, Text} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {LoginScreenProps} from '../../../utils/types';
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
import {commonThemeColor} from '../../../theme/Colors';

const Login = ({navigation}: LoginScreenProps) => {
  const inputDetials = [
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
  const hadleSignInBtn = () => {
    console.log('click the single sign in button');
  };

  const handleNavigation = () => {
    navigation.navigate(Routes.Signup);
  };

  const {colors} = useTheme();
  const handleForgotScreen = () => {
    navigation.navigate(Routes.Forgot);
  };

  return (
    <View style={{backgroundColor: colors.background}}>
      <PrimaryAppHeader leftIcon={true} key={'header'} />
      <View
        style={[style.mainTextViewStyle, {backgroundColor: colors.background}]}>
        <Text style={style.mainTextStyle} accessibilityLabel="Sign in now">
          Sign in now
        </Text>
        <Text
          style={style.subTextStyle}
          accessibilityLabel="Please sign in to continue our app">
          Please sign in to continue our app
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

        <Text
          style={style.forgotTextStyle}
          accessibilityLabel="Forgot your password?"
          onPress={handleForgotScreen}>
          Forget Password?
        </Text>

        <View>
          <PrimaryButton
            btnName="Sign In"
            handleButton={hadleSignInBtn}
            containerStyle={{paddingTop: 40}}
          />
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 30,
              alignSelf: 'center',
            }}>
            <Text style={style.commanTextStyle}>Don’t have an account?</Text>
            <Text
              style={{paddingHorizontal: 8, color: 'blue', fontSize: 15}}
              onPress={handleNavigation}>
              Sign up
            </Text>
          </View>
          <Text style={{textAlign: 'center'}}>Or connect</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 30,
            alignSelf: 'center',
          }}>
          <FacebookSvgs />
          <Text> </Text>
          <InstagramSvgs />
        </View>
      </View>
    </View>
  );
};

export default Login;
