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
    <View style={{backgroundColor:'#0d6efd',flex:1}}>
      <Text style={{textAlign:'center',color:'white',fontSize:20}}>Halo</Text>
    </View>
  )
}