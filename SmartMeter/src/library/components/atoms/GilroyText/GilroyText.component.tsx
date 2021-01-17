import React from 'react';
import { Text, TextStyle, StyleProp, ViewStyle } from 'react-native';

//other deps

//components

//styles

//types
type GilroyTextProps = {
	type: 'Medium' | 'Semibold' | 'Regular';
	size: 'g1' | 'g2' | 'g3' | 'g4' | 'g5';
	styleText?: StyleProp<TextStyle>;
	style?: StyleProp<ViewStyle>;
	children: React.ReactNode;
};

export const GilroyText: React.FC<GilroyTextProps> = ({
	type = 'Medium',
	size,
	styleText,
	style,
	children,
}) => {
	let fontSize;
	switch (size) {
		case 'g1':
			fontSize = 31;
			break;
		case 'g2':
			fontSize = 24;
			break;
		case 'g3':
			fontSize = 18;
			break;
		case 'g4':
			fontSize = 16;
			break;
		case 'g5':
			fontSize = 28;
			break;
		default:
			break;
	}

	return (
		<Text style={[{ fontFamily: `Gilroy-${type}`, fontSize: fontSize }, style, styleText]}>
			{children}
		</Text>
	);
};
