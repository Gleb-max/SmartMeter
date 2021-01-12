import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';

//other deps

//components

//styles

//types
type GilroyTextProps = {
	text: string;
	type: 'Medium' | 'Semibold' | 'Regular';
	size: number;
	style?: StyleProp<TextStyle>;
};

export const GilroyText: React.FC<GilroyTextProps> = ({
	text,
	type = 'Medium',
	size,
	style,
}) => {
	return (
		<Text style={[{ fontFamily: `Gilroy-${type}`, fontSize: size }, style]}>
			{text}
		</Text>
	);
};
