import React from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

//components
import { GilroyText, SMIcons } from 'library/components/atoms';

//styles
import styles from './RequestCard.styles';

//types
type RequestCardProps = {
	date: string;
	isCompleted?: boolean;
	onPress: () => void;
	style?: StyleProp<ViewStyle>
};

export const RequestCard: React.FC<RequestCardProps> = ({
	date,
	isCompleted,
	onPress,
	style,
}) => {
	return (
		<TouchableOpacity
			style = {[styles.container, style]}
			onPress = {onPress}
		>
			<GilroyText
				size = 'g10'
				type = 'Medium'
				style = {styles.header}
			>
				Заявка от
				{' '}
				{date}
			</GilroyText>

			<GilroyText
				size = 'g5'
				type = 'Medium'
				styleText={styles.text}
				style={styles.textContainer}
			>
				{(isCompleted) ? 'Выполнена' : 'Не выполенена'}
			</GilroyText>

			<GilroyText
				size='g5'
				type='Medium'
				styleText={styles.takeCodeText}
				style={styles.takeCode}
			>
				{(isCompleted) ? null : 'Получить код'}
			</GilroyText>

			<SMIcons
				name = 'ic_arrow_right'
				size = {13}
				color = '#747474'
				style = {styles.arrow} />
		</TouchableOpacity>
	);
};
