import React from 'react';
import { TouchableOpacity, Text, View, ViewStyle, StyleProp } from 'react-native';

//styles
import styles from './Button.styles';

//types
type ButtonProps = {
	onPress: () => void;
	header: string;
	style?: StyleProp<ViewStyle>;
}

export const Button: React.FC<ButtonProps> = ({
	style,
	onPress,
	header,
}) => {
	return (
		<TouchableOpacity
			style= { [styles.container, style]}
			onPress = { onPress }
		>
			<Text style={styles.text}>
				{header}
			</Text>
		</TouchableOpacity>
	);
};
