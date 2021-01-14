import React from 'react';
import { Text, TextStyle, StyleProp, ViewStyle } from 'react-native';

//other deps

//components

//styles

//types
type GilroyTextProps = {
	text: string;
	type: 'Medium' | 'Semibold' | 'Regular';
	size: number;
	styleText?: StyleProp<TextStyle>;
	style?: StyleProp<ViewStyle>;
};

export const GilroyText: React.FC<GilroyTextProps> = ({
	text,
	type = 'Medium',
	size,
	style,
	styleText,
}) => {
	return (
		<Text style={[{ fontFamily: `Gilroy-${type}`, fontSize: size }, style, styleText]}>
			{text}
		</Text>
	);
};
