import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {Routes} from '../../navigation/routes';

export default function Splash({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Routes.Carousel);
    }, 3000);
  });
  return (
    <View style={{flex: 1, backgroundColor: '#0073CF'}}>
      <Text
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          color: 'white',
          fontSize: 20,
        }}>
        Ankit
      </Text>
    </View>
  );
}
