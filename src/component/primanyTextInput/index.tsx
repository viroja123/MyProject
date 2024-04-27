import { View, Text, TextInput,StyleProp,TextStyle,ViewStyle,TextInputProps } from 'react-native'
import React from 'react'

interface PrimaryTextInputProps extends TextInputProps {
    mainViewStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const PrimanyTextInput :React.FC<PrimaryTextInputProps> = ({placeholder,value,mainViewStyle, textStyle,onChange,onFocus}) => {
  return (
    <View style={mainViewStyle}>
     <TextInput
     placeholder={placeholder}
     value={value}
     style={textStyle}
     onChange={onChange}
     onFocus={onFocus}
        />
    </View>
  )
}

export default PrimanyTextInput