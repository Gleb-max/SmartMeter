import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

import {TextField} from 'react-native-material-textfield';

type CustomTextInputProps = {
    value?: string;
    placeholder?: string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';
    isPassword?: boolean;
    onChange?: () => void;
    style?: StyleProp<ViewStyle>;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
    value, placeholder, keyboardType, isPassword, onChange, style
}) => {
    return (
        <TextField
            label={placeholder}
            keyboardType={keyboardType}
            textColor='#747474'
            labelFontSize={17}
            fontSize={18}
            labelTextStyle={{marginBottom: 20}}
            tintColor={"#005670"}
        />
    );
};
