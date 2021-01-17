import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';

//types
type HeadlineTextProps = {
	type: 'Semibold'|'Medium';
	size?: 'h1' | 'h2' | 'h3' | 'h4';
	style?: StyleProp<TextStyle>;
	children: React.ReactNode;
};

export const HeadlineText: React.FC<HeadlineTextProps> = ({
	type = 'Medium',
	size = 'h1',
	style,
	children,
}) => {
	let fontSize;
	switch (size) {
		case 'h1':
			fontSize = 20;
			break;
		case 'h2':
			fontSize = 18;
			break;
		case 'h3':
			fontSize = 16;
			break;
		case 'h4':
			fontSize = 14;
			break;
		default:
			fontSize = 20;
			break;
	}
	return (
		<Text
			style={[{ fontFamily: `Montserrat-${type}`, fontSize }, style]}
		>
			{children}
		</Text>
	);
};
