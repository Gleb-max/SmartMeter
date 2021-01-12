import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

//styles
import styles from './NextButton.styles';

//types
type NextButtonProps = {
	onPress: () => void;
	isPaid: boolean;
	date: string;
}

export const NextButton: React.FC<NextButtonProps> = ({
	isPaid,
	date,
	onPress,
}) => {
	return (
		isPaid ? (
			<View style={styles.container}>
				<View style={styles.blueMarker} />
				<Text style={styles.header}>
					Квитанция от
					{' '}
					{date}
				</Text>
				<Text style={styles.text}>
					Оплачено
				</Text>
			</View>
		) : (
			<TouchableOpacity style={styles.container} onPress={onPress}>
				<View style={styles.redMarker} />
				<Text style={styles.header}>
					Квитанция от
					{' '}
					{date}
				</Text>
				<Text style={styles.text}>
					Неоплачено
				</Text>
				<View style={styles.image} />
			</TouchableOpacity>
		)
	);
};
