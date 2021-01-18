import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

//styles
import styles from './TextInput.styles';

import { TextField } from 'react-native-material-textfield';

type CustomTextInputProps = {
    value?: string;
    placeholder?: string;
    keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad';
    isPassword?: boolean;
    onChange?: () => void;
    style?: StyleProp<ViewStyle>;
}

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
	value,
	onChange,
	placeholder,
	keyboardType = 'default',
	isPassword = false,
	style,
}) => {
	return (
		<TextField
			value={value}
			onChangeText={onChange}
			label={placeholder}
			keyboardType={keyboardType}
			textColor='#747474'
			labelFontSize={17}
			fontSize={18}
			labelTextStyle={styles.labelText}
			tintColor='#005670'
			blurOnSubmit={isPassword}
			underlineColorAndroid='transparent'
			containerStyle={[style, styles.container]} />
	);
};
