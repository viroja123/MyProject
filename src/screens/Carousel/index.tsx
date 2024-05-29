import React from 'react';
import {View, Text, Image} from 'react-native';
import CustomImage from '../../component/TopImageBackground';
import {style} from './style';
import PrimaryButton from '../../component/primaryButton';
import {Routes} from '../../navigation/routes';
// import imageOfBoat from '../../assets/images/boat.png'

export default function Carousel({navigation}) {
  return (
    <View>
      <CustomImage
        // urlName={imageOfBoat}
        // customViewStyle={style.customImageContainer} // Example custom style
        // customImageStyle={style.customImage} // Example custom style
        accessibilityLabel="Boat Image"
      />
      {/* <Image source={require('../../assets/images/boat.png')} alt='iamge' /> */}
      <View style={style.viewStyle}>
        <View>
          <Text style={style.mainText}>
            Life is short and the world is wide
          </Text>
        </View>
        <View>
          <Text style={style.subText}>
            At Friends tours and travel, we customize reliable and trustworthy
            educational tours to destinations all over the world
          </Text>
        </View>
        <PrimaryButton
          // viewStyle={{ paddingVertical: 30 }}
          btnName="Click Me"
          handleButton={() => {
            console.log('Click');
            navigation.navigate(Routes.Login);
          }}
        />
      </View>
    </View>
  );
}
