import { View, Text, Pressable, PressableProps, TextStyle, ViewStyle } from 'react-native';
import React from 'react';

interface ButtonProps extends PressableProps {
    btnName : string;
    handleButton: () => void;
    btnStyle?: ViewStyle;
    btnTextStyle?: TextStyle;
}

const PrimaryButton = ({ btnName, handleButton, btnStyle, btnTextStyle }:ButtonProps) => {
    return (
        <Pressable onPress={handleButton} style={[btnStyle, { backgroundColor: '#0D6EFD', borderRadius: 16,height:56 ,alignItems:'center',justifyContent:'center'}]}>
            <Text style={[btnTextStyle, { color: 'white',fontWeight:'600',lineHeight:20,fontSize:16 }]}>{btnName}</Text>
        </Pressable>
    );
};

export default PrimaryButton;
