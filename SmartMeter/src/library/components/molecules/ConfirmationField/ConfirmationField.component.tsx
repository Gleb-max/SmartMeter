import React, { useState } from 'react';
import { Text, View, ViewStyle, StyleProp } from 'react-native';

//styles
import styles from './ConfirmationField.styles';

import {
	CodeField,
	Cursor,
	useClearByFocusCell,
} from 'react-native-confirmation-code-field';

type ConfirmationFieldProps = {
    cellCount: number;
    containerStyle?: StyleProp<ViewStyle>;
    onSubmit: () => void;
};

export const ConfirmationField: React.FC<ConfirmationFieldProps> = ({
	cellCount,
	containerStyle,
	onSubmit,
}) => {
	//state
	const [value, setValue] = useState('');
	const [props, getCellOnLayoutHandler] = useClearByFocusCell({
		value,
		setValue,
	});
	return (
		<CodeField
			blurOnSubmit
			{...props}
			value={value}
			onChangeText={setValue}
			cellCount={cellCount}
			rootStyle={[containerStyle, styles.codeFieldRoot]}
			keyboardType='number-pad'
			textContentType='oneTimeCode'
			onSubmitEditing={onSubmit}
			renderCell={({ index, symbol, isFocused }) => (
				<View
					onLayout={getCellOnLayoutHandler(index)}
					key={index}
					style={[styles.cellRootEmpty, (symbol !== '') && styles.cellRoot, isFocused && styles.focusCell]}
				>
					<Text style={styles.cellText}>
						{symbol || (isFocused ? <Cursor /> : null)}
					</Text>
				</View>
			)} />
	);
};
