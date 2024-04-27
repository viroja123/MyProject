import {View, Text, Button, Pressable} from 'react-native';
import React from 'react';
import styles from './style';
import {HomeScreenProps} from '../../utils/types';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../store/auth';

export default function Home({navigation}: HomeScreenProps) {
const logginSelector = useSelector(selectIsLoggedIn);

  return (
    <View style={{backgroundColor:'red',flex:1}}>
        <Pressable onPress={()=>{
          console.log("------- This is the Authentiction Check ",logginSelector);
        }}>
          <Text style={{color:'black'}}>{logginSelector} Hello</Text>
        </Pressable>
    </View>
  );
}
