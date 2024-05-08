import { Pressable, Text, View } from 'react-native';
import React from 'react';
import CustomImage from '../../component/TopImageBackground';
import { style } from './style';
import PrimaryButton from '../../component/primaryButton'; 
import { Routes } from '../../navigation/routes';

export default function Carousel({navigation}) {
  return (
    <View>
      <CustomImage urlName="../../assets/images/boat.png" />
      <View style={style.viewStyle}>
        <View>
          <Text style={style.mainText}>
            Life is short and the world is wide
          </Text>
        </View>
        <View>
          <Text style={style.subText}>
            At Friends tours and travel, we customize reliable and trustworthy educational tours to destinations all over the world
          </Text>
        </View>
        <PrimaryButton
          btnName="Click Me"
          handleButton={() => {
            console.log("Click")
            navigation.navigate(Routes.login)
          }}
          // btnStyle={{ marginTop: 20 }} 
          // btnTextStyle={{ fontSize: 16 }}
        />
      </View>
    </View>
  );
}
