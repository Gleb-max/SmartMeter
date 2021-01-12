import React from 'react';
import { Text, TextStyle, StyleProp } from 'react-native';

//other deps

//components

//styles

//types
type RobotoTextProps = {
	text: string;
	type: 'Light' | 'Regular';
	size: number;
	style: StyleProp<TextStyle>;
};

export const RobotoText: React.FC<RobotoTextProps> = ({
	text,
	type = 'Regular',
	size,
	style,
}) => {
	return (
		<Text style={[{ fontFamily: `Roboto-${type}`, fontSize: size }, style]}>
			{text}
		</Text>
	);
};
