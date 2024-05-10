import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logInAction } from '../../../store/auth';
import { LoginScreenProps } from '../../../utils/types';
import { Routes } from '../../../navigation/routes';
import { style } from './style';
import PrimaryButton from '../../../component/primaryButton';
import { AutoCapitalize, KeyboardType, ReturnKeyType } from '../../../utils/InputConfig';
import PrimaryAppHeader from '../../../component/primaryAppHeader';
import { useTheme } from '@react-navigation/native';
import PrimaryTextInput from '../../../component/PrimaryTextInput';



const login = ({ navigation }: LoginScreenProps) => {
  const dispatch = useDispatch();

  const inputDetials = [
    {
      PlaceHolder: 'Email',
      Label: 'Email',
      KeyboardType: KeyboardType.default,
      ReturnKeyType: ReturnKeyType.next,
      AutoCapitalize: AutoCapitalize.none,
      RightIcon: null,
      ErrorKey: 'Email',
      onSubmitEditing: () => {
        // refCallbackForNextInputField.current.focus();
      }
    },
    {
      PlaceHolder: 'Password',
      Label: 'Password',
      KeyboardType: KeyboardType.default,
      ReturnKeyType: ReturnKeyType.next,
      AutoCapitalize: AutoCapitalize.none,
      RightIcon: true,
      ErrorKey: 'Password',
    }
  ]
  const hadleSignInBtn = () => {
    console.log("click the single sign in button");
  }
  const { colors } = useTheme();
  return (
    <>
      <PrimaryAppHeader leftIcon={true} />
      <View style={{ paddingHorizontal: 20, backgroundColor: colors.background, marginTop: 40 }}>

      <Text style={style.mainTextStyle} accessibilityLabel="Sign in now">Sign in now</Text>
        <Text style={style.subTextStyle} accessibilityLabel="Please sign in to continue our app">Please sign in to continue our app</Text>
        {inputDetials.map((item, index) => (
          <View style={{ marginTop: 40 }}>
            <View>
              {/* <Text style={{ color: 'black', fontSize: 16, fontWeight: '400' }}>{item.Label}</Text> */}
            </View>
            <PrimaryTextInput
              // reference={ref => { index + 1 }}
              placeholder={item.PlaceHolder}
              onChangeText={(text) => {
                console.log(text, "----------------");
              }}
              key={index.toString()}
              typeOfKeyboard={item.KeyboardType}
              onBlur={(item: string) => { console.log(item, "------------blur") }}
            />
          </View>
        ))}

<Text style={style.forgotTextStyle} accessibilityLabel="Forgot your password?">Forget Password?</Text>

        <View>
          <PrimaryButton btnName='Sign In' handleButton={hadleSignInBtn} viewStyle={{ paddingTop: 40 }} />
          <View style={{ flexDirection: 'row', paddingVertical: 40, alignItems: 'center', justifyContent: 'center' }}>
            <Text>
              Don’t have an account?
            </Text>
            <Text style={{ paddingHorizontal: 8, color: 'blue', fontSize: 15 }}>Sign up</Text>
          </View>
          <Text style={{ textAlign: 'center' }}>Or connect</Text>
        </View>
      </View>
    </>
  )
}

export default login