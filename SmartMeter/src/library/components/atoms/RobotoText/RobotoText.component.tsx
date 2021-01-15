import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';

//types
type RobotoTextProps = {
	children: React.ReactNode;
	type: 'Light' | 'Regular';
	size: 'r1' | 'r2' | 'r3' | 'r4' | 'r5';
	style: StyleProp<TextStyle>;
};

export const RobotoText: React.FC<RobotoTextProps> = ({
	children,
	type = 'Regular',
	size,
	style,
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
		default:
			break;
	}
	return (
		<Text style={[{ fontFamily: `Roboto-${type}`, fontSize: fontSize }, style]}>
			{children}
		</Text>
	);
};
