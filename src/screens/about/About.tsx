import React, {useEffect, useRef, useState} from 'react';
import {AboutScreenProps} from '../../utils/types';
import storage from '@react-native-firebase/storage';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

import {style} from './style';
import {
  ActivityIndicator,
  Alert,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function About({}: AboutScreenProps) {
  const [showCamera, setShowCamera] = useState(false);
  const [imageSource, setImageSource] = useState('');
  useEffect(() => {
    async function getPermission() {
      const permission = await Camera.requestCameraPermission();
      console.log(`Camera permission status: ${permission}`);
      if (permission === 'denied') {
        await Linking.openSettings();
      }
      capturePhoto();
    }
    getPermission();
  }, []);

  const camera = useRef(null);
  const devices = useCameraDevice('front', {
    physicalDevices: ['wide-angle-camera'],
  });

  const fireS = async () => {
    try {
      const imageRef = storage().ref('ListingImage').child(imageSource);
      const mime = 'image/jpg';
      imageRef.putFile(imageSource, {contentType: mime}).then(() => {
        console.log('Uplaodedd successful');
      });
    } catch (error) {
      console.log('Upload time Error !!!', error);
    }
  };

  const capturePhoto = async () => {
    try {
      if (camera.current !== null) {
        const photo = await camera.current.takePhoto({
          qualityPrioritization: 'quality',
          flash: 'on',
          enableAutoRedEyeReduction: true,
          enableShutterSound: false,
        });
        setImageSource(photo.path);
        setShowCamera(false);
        fireS();
        console.log(photo.path, ':---------------------');
        console.log('Call Capture photo-------->');
      }
    } catch (e) {
      console.log(e, 'Error');
    }
  };
  if (devices == null) {
    return <ActivityIndicator size={20} color={'red'} />;
  }

  return (
    <View>
      {showCamera ? (
        <>
          <Camera
            ref={camera}
            style={style.camaraContainer}
            device={devices}
            isActive={showCamera}
            photo={true}
          />
          <View style={style.buttonContainer}>
            <TouchableOpacity
              style={style.camButton}
              onPress={() => capturePhoto()}
            />
          </View>
        </>
      ) : (
        <>{imageSource !== '' ? Alert.alert('Congratulations !') : null}</>
      )}
      <TouchableOpacity
        style={style.usePhotoStyle}
        onPress={() => setShowCamera(true)}>
        <Text style={{color: 'white', fontWeight: '500'}}>Use Photo</Text>
      </TouchableOpacity>
    </View>
  );
}
