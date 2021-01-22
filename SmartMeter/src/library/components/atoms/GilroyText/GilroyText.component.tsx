import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';

//types
type GilroyTextProps = {
	type: 'Medium' | 'Semibold' | 'Regular';
	size: 'g1' | 'g2' | 'g3' | 'g4' | 'g5' | 'g6' | 'g7' | 'g8' | 'g9' | 'g10' | 'g11' | 'g12';
	styleText?: StyleProp<TextStyle>;
	style?: StyleProp<TextStyle>;
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
			fontSize = 13;
			break;
		case 'g6':
			fontSize = 12;
			break;
		case 'g7':
			fontSize = 55;
			break;
		case 'g8':
			fontSize = 22;
			break;
		case 'g9':
			fontSize = 23;
			break;
		case 'g10':
			fontSize = 17;
			break;
		case 'g11':
			fontSize = 14;
			break;
		case 'g12':
			fontSize = 15;
			break;
		default:
			break;
	}

	return (
		<Text
			style={[{ fontFamily: `Gilroy-${type}`, fontSize: fontSize }, style, styleText]}>
			{children}
		</Text>
	);
};
