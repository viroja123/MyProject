import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logInAction } from '../../../store/auth';
import { LoginScreenProps } from '../../../utils/types';
import { Routes } from '../../../navigation/routes';
import PrimanyTextInput from '../../../component/primanyTextInput';
import { style } from './style';
import PrimaryButton from '../../../component/primaryButton';
import { AutoCapitalize, KeyboardType, ReturnKeyType } from '../../../utils/InputConfig';



const login = ({navigation}:LoginScreenProps) => {
    const dispatch = useDispatch();

      const inputDetials = [
        { PlaceHolder: 'signup:fullName',
        Label: 'signup:fullName',
        KeyboardType: KeyboardType.default,
        ReturnKeyType: ReturnKeyType.next,
        AutoCapitalize: AutoCapitalize.none,
        RightIcon: null,
        ErrorKey: 'fullName',
  }
      ]
    const hadleSignInBtn = ()=>{
      console.log("click the single sign in button");
    }
  return (
    <View style={{paddingHorizontal:20}}>
      
      <Text style={style.mainTextStyle}>Sign in now</Text>
      <Text style={style.subTextStyle}>Please sign in to continue our app</Text>
      <View>
        <PrimanyTextInput placeholder='Enter Text' value='www.uihut@gmail.com' key={'hello'} typeOfKeyboard='default'/>
        {/* <PrimanyTextInput placeholder='Enter Text' value='www.uihut@gmail.com'/> */}
        <Text style={style.forgotTextStyle}> Forget Password?</Text>

      </View>
      <View>
      <PrimaryButton btnName='Sign In' handleButton={hadleSignInBtn}/>
      <View style={{flexDirection:'row'}}>
        <Text>
        Don’t have an account? 
        </Text>
        <Text>Sign up</Text>
      </View>
      <Text style={{textAlign:'center'}}>Or connect</Text>
      </View>
    </View>
  )
}

export default login