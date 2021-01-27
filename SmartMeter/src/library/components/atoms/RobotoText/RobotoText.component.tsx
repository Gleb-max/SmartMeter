import React from 'react';
import { Text, TextStyle, StyleProp, ViewStyle } from 'react-native';

//types
type RobotoTextProps = {
	children: React.ReactNode;
	type: 'Light' | 'Regular' | 'Medium';
	size: 'r1' | 'r2' | 'r3' | 'r4' | 'r5' | 'r6';
	styleText?: StyleProp<TextStyle>;
	style?: StyleProp<ViewStyle>;
};

export const RobotoText: React.FC<RobotoTextProps> = ({
	children,
	type = 'Regular',
	size,
	style,
	styleText,
}) => {
	let fontSize;
	switch (size) {
		case 'r1':
			fontSize = 18;
			break;
		case 'r2':
			fontSize = 17;
			break;
		case 'r3':
			fontSize = 15;
			break;
		case 'r4':
			fontSize = 14;
			break;
		case 'r5':
			fontSize = 12;
			break;
		case 'r6':
			fontSize = 21;
			break;
		default:
			break;
	}
	return (
		<Text style={[{ fontFamily: `Roboto-${type}`, fontSize: fontSize }, styleText, style]}>
			{children}
		</Text>
	);
};
