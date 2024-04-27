import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logInAction } from '../../../store/auth';
import { LoginScreenProps } from '../../../utils/types';
import { Routes } from '../../../navigation/routes';



const login = ({navigation}:LoginScreenProps) => {
    const dispatch = useDispatch();
  return (
    <View>
      <Text>login</Text>
      <Pressable onPress={()=>{
        console.log("click")
        dispatch(logInAction({isLoggedIn: true,userDetails:null}))
        navigation.navigate(Routes.Home);
      }}><Text style={{color:'black',fontSize:15,textAlign:'center'}}>Login</Text></Pressable>
    </View>
  )
}

export default login