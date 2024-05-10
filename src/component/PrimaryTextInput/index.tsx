import React from 'react';
import { View, Text, TextInput, StyleProp, TextStyle, ViewStyle, TextInputProps, KeyboardTypeOptions, ReturnKeyTypeOptions, ImageSourcePropType, Pressable, Image } from 'react-native';
import { AutoCapitalize } from '../../utils/InputConfig';
import styles from './style';

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
    autoCapitalize?: AutoCapitalize;
    onSubmitEditing: () => void;
    onBlur: () => void;
    rightIcon?: ImageSourcePropType | null;
    handleRightIconClick: () => void;
    validationError?: string;
}

const PrimaryTextInput = ({ placeholder, value, mainViewStyle, textStyle, onChangeText, onFocus, keyboardType, reference, returnKeyType, maxLength, numberOfLines, multiLine, secureTextEntry, isEditable, autoCapitalize, onSubmitEditing, onBlur, rightIcon, handleRightIconClick, validationError }: PrimaryTextInputProps) => {
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
                style={[textStyle, styles.textInputStyle]}
            />
            {rightIcon && (
                <Pressable onPress={handleRightIconClick} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
                    <Image source={rightIcon} />
                </Pressable>
            )}
            {validationError && (
                <Text>{"Validation Error: " + validationError}</Text>
            )}
        </View>
    )
}

export default PrimaryTextInput;
