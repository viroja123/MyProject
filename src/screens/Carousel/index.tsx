import React from 'react';
import { View, Text } from 'react-native';
import CustomImage from '../../component/TopImageBackground';
import { style } from './style';
import PrimaryButton from '../../component/primaryButton';
import { Routes } from '../../navigation/routes';

export default function Carousel({ navigation }) {
  return (
    <View>
      <CustomImage 
        urlName="" 
        customViewStyle={style.customImageContainer} // Example custom style
        customImageStyle={style.customImage} // Example custom style
        accessibilityLabel="Boat Image" // Example accessibility label
      />
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
          // viewStyle={{ paddingVertical: 30 }}
          btnName="Click Me"
          handleButton={() => {
            console.log("Click")
            navigation.navigate(Routes.login)
          }}
        />
      </View>
    </View>
  );
}
