import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';

//other deps

//components

//styles

//types
type HeadlineTextProps = {
	text: string;
	type: 'Semibold'|'Medium';
	size: number;
	style: StyleProp<TextStyle>;
};

export const HeadlineText: React.FC<HeadlineTextProps> = ({
	text,
	type = 'Medium',
	size,
	style,
}) => {
	return (
		<Text style={[{ fontFamily: `Montserrat-${type}`, fontSize: size }, style]}>
			{text}
		</Text>
	);
};
