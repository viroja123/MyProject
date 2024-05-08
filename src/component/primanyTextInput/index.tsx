import React from 'react';
import { View, Text, TextInput, StyleProp, TextStyle, ViewStyle, TextInputProps, KeyboardTypeOptions, ReturnKeyTypeOptions, ImageSourcePropType, Pressable, Image } from 'react-native';
import { AutoCapitalize } from '../../utils/InputConfig';

interface PrimaryTextInputProps extends TextInputProps {
    mainViewStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    typeOfKeyboard: KeyboardTypeOptions;
    reference?: (ref: TextInput) => void;
    returnKeyType: ReturnKeyTypeOptions;
    maxLength?: number;
    numberOfLines?: number;
    multiLine?: boolean;
    secureTextEntry?: boolean;
    isEditable?: boolean;
    autoCapitalize: AutoCapitalize;
    onSubmitEditing: () => void;
    onBlur: () => void;
    rightIcon?: ImageSourcePropType | null;
    handleRightIconClick: () => void;
    validationError: string;
}

const PrimanyTextInput = ({ placeholder, value, mainViewStyle, textStyle, onChangeText, onFocus, keyboardType, reference, returnKeyType, maxLength, numberOfLines, multiLine, secureTextEntry, isEditable, autoCapitalize, onSubmitEditing, onBlur, rightIcon, handleRightIconClick, validationError }: PrimaryTextInputProps) => {
    return (
        <View style={mainViewStyle}>
            <TextInput
                ref={reference}
                onChangeText={onChangeText}
                value={value}
                keyboardType={keyboardType}
                returnKeyType={returnKeyType}
                maxLength={maxLength}
                numberOfLines={numberOfLines}
                multiline={multiLine}
                secureTextEntry={secureTextEntry}
                editable={isEditable}
                autoCapitalize={autoCapitalize}
                onSubmitEditing={onSubmitEditing}
                placeholder={placeholder}
                onFocus={onFocus}
                onBlur={onBlur}
                style={[textStyle, { backgroundColor: '#F7F7F9', borderRadius: 14, height: 56 }]}
            />
            {rightIcon && (
                <Pressable onPress={handleRightIconClick} hitSlop={10}>
                    <Image style={{ tintColor: 'red' }} source={rightIcon} />
                </Pressable>
            )}
            {validationError && (
                <Text style={[]}>{"Error in Text Input"}</Text>
            )}
        </View>
    )
}

export default PrimanyTextInput;
