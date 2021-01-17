import React from 'react';
import { TouchableOpacity, Text, ViewStyle, StyleProp, TextStyle, View } from 'react-native';

//styles
import styles from './AdviceCard.styles';

//types
type AdviceCardProps = {
	text: string;
	onPress: () => void;
	style?: StyleProp<ViewStyle>;
	styleText?: StyleProp<TextStyle>;
	textBox?: StyleProp<ViewStyle>;
}

export const AdviceCard: React.FC<AdviceCardProps> = ({
	text,
	onPress,
	style,
	styleText,
	textBox,
}) => {
	return (
		<TouchableOpacity
			style={[styles.container, style]}
			onPress={onPress}
		>
			<View style = {textBox}>
				<Text style={[styles.text, styleText]}>
					{text}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
