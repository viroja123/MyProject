import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Routes } from '../../navigation/routes'

export default function splash({navigation}) {
    useEffect(() =>{
        setTimeout(() => {
            navigation.navigate(Routes.login)
        }, 3000);
    }
)
  return (
    <View style={{backgroundColor:'yellow',flex:1}}>
      <Text style={{justifyContent:'center',alignItems:'center',textAlign:'center',color:'white',fontSize:20}}>splash</Text>
    </View>
  )
}