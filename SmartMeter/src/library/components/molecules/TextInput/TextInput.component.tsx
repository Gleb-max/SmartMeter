import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

//styles
import styles from './TextInput.styles';

import { TextField } from 'react-native-material-textfield';

type CustomTextInputProps = {
    value?: string;
    placeholder?: string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';
    isPassword?: boolean;
    onChange?: (text: string) => void;
	style?: StyleProp<ViewStyle>;
	labelTextStyle?: StyleProp<TextStyle>;
	onSubmitEditing?: () => void;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
	value,
	onChange,
	placeholder,
	keyboardType = 'default',
	isPassword = false,
	style,
	labelTextStyle,
	onSubmitEditing,
}) => {
	return (
		<TextField
			onFocus={() => {}}
			value={value}
			onChangeText={onChange}
			label={placeholder}
			keyboardType={keyboardType}
			textColor='#747474'
			labelFontSize={17}
			fontSize={18}
			labelTextStyle={[styles.labelText, labelTextStyle]}
			tintColor='#005670'
			onSubmitEditing={onSubmitEditing}
			blurOnSubmit={isPassword}
			underlineColorAndroid='transparent'
			lineWidth={1}
			containerStyle={[styles.container, style]} />
	);
};
