import {Text, View} from 'react-native';
import React from 'react';
import CustomImage from '../../component/TopImageBackground';
import {style} from './style';

export default function Carousel() {
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
            At Friends tours and travel, we customize reliable and trutworthy
            educational tours to destinations all over the world
          </Text>
        </View>
      </View>
    </View>
  );
}
