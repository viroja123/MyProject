import React from 'react';
import {View, Image, ImageProps, ViewProps} from 'react-native';
import {style} from './style';

type CustomImageProps = {
  urlName: string;
  customImageStyle?: ImageProps['style'];
  customViewStyle?: ViewProps['style'];
};

const CustomImage =  ({
  urlName,
  customImageStyle,
  customViewStyle,
}:CustomImageProps) => {
  console.log(urlName);
  return (
    <View style={[customViewStyle]}>
      <Image
        source={require('../../assets/images/boat.png')}
        style={[style.imageStyle, customImageStyle]}
      />
    </View>
  );
};

export default CustomImage;
