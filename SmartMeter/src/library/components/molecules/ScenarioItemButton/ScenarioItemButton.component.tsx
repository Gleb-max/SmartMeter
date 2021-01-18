import React from 'react';
import { TouchableOpacity, View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

//styles
import styles from './ScenarioItemButton.styles';

//components
import { SMIcons } from 'library/components/';

type ScenarioItemButtonProps = {
    number: number;
    text: string;
	onPress?: () => void;
	style?: StyleProp<ViewStyle>;
	styleNumberCon?: StyleProp<ViewStyle>;
	styleText?: StyleProp<TextStyle>;
	styleNum?: StyleProp<TextStyle>;
	withArrow?: boolean;
};

export const ScenarioItemButton: React.FC<ScenarioItemButtonProps> = ({
	number,
	text,
	onPress,
	style,
	styleNumberCon,
	styleText,
	styleNum,
	withArrow,
}) => {
	return (
		<TouchableOpacity style={[styles.container, style]} onPress={onPress}>
			<View style={[styles.numberContainer, styleNumberCon]}>
				<Text style={[styles.number, styleNum]}>
					{number}
				</Text>
			</View>

			<View style={styles.textContainer}>
				<Text style={[styles.text, styleText]}>
					{text}
				</Text>
			</View>

			{withArrow && (
				<SMIcons
					name='ic_arrow_right'
					size={18}
					color='#747474'
					style={styles.icon} />
			)}

		</TouchableOpacity>
	);
};
