import React from 'react';
import {View, Image, ImageProps, ViewProps} from 'react-native';
import {style} from './style';

type CustomImageProps = {
  urlName?: string;
  customImageStyle?: ImageProps['style'];
  customViewStyle?: ViewProps['style'];
  accessibilityLabel?: string;
};

const CustomImage = ({
  urlName,
  customImageStyle,
  customViewStyle,
  accessibilityLabel,
}: CustomImageProps) => {
  console.log(urlName);
  return (
    <View style={[customViewStyle]}>
      <Image
        source={require('../../assets/images/boat.png')}
        style={[style.imageStyle, customImageStyle]}
        alt="Image"
        accessibilityLabel={accessibilityLabel}
      />
    </View>
  );
};

export default CustomImage;

// import React from 'react';
// import { View, Image, ImageProps, ViewProps } from 'react-native';
// import { style } from './styles'; // Changed import path

// type CustomImageProps = {
//   urlName: string;
//   customImageStyle?: ImageProps['style'];
//   customViewStyle?: ViewProps['style'];
//   accessibilityLabel?: string; // Added for accessibility
// };

// const CustomImage = ({
//   urlName,
//   customImageStyle,
//   customViewStyle,
//   accessibilityLabel,
// }: CustomImageProps) => {
//   console.log(urlName);
//   return (
//     <View style={[customViewStyle]}>
//       <Image
//         source={{ uri: urlName }} // Changed to use urlName prop for image source
//         style={[style.imageStyle, customImageStyle]}
//         accessibilityLabel={accessibilityLabel} // Added for accessibility
//       />
//     </View>
//   );
// };

// export default CustomImage;
