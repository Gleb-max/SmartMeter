import React from 'react';
import { TouchableOpacity, ViewStyle, StyleProp } from 'react-native';

//components
import { RobotoText } from 'library/components/atoms';

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
			<RobotoText
				type='Regular'
				size='r1'
				style={styles.text}
			>
				{header}
			</RobotoText>
		</TouchableOpacity>
	);
};
