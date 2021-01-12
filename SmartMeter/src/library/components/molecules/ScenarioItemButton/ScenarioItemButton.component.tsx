import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

//styles
import styles from './ScenarioItemButton.styles';

type ScenarioItemButtonProps = {
    number: number;
    text: string;
    onPress?: () => void;
};

export const ScenarioItemButton: React.FC<ScenarioItemButtonProps> = ({
	number,
	text,
	onPress,
}) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<View style={styles.numberContainer}>
				<Text style={styles.number}>
					{number}
				</Text>
			</View>
			<View style={styles.textContainer}>
				<Text style={styles.text}>
					{text}
				</Text>
			</View>
		</TouchableOpacity>
	);
};
