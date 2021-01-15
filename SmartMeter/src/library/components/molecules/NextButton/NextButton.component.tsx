import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

//styles
import styles from './NextButton.styles';

//components
import { SMIcons, HeadlineText } from 'library/components/atoms';

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
		<TouchableOpacity
			style={styles.container}
			onPress={onPress}
		>
			<View style={(isPaid) ? styles.blueMarker : styles.redMarker} />

			<HeadlineText
				type='Medium'
				style={styles.header}
				size='h3'
			>
				Квитанция от
				{' '}
				{date}
			</HeadlineText>

			<Text style={styles.text}>
				{(isPaid) ? 'Оплачено' : 'Неоплачено'}
			</Text>

			<SMIcons
				name = 'ic_arrow_right'
				size = {15}
				color = '#747474'
				style = {styles.icon} />
		</TouchableOpacity>
	);
};
