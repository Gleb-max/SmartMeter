import React from 'react';
import { View } from 'react-native';

//components
import { GilroyText, Button, RobotoText } from 'library/components/atoms';
import { CustomTextInput } from 'library/components/molecules';

//styles
import styles from './DeleteNumber.styles';

//types
type DeleteNumberViewProps = {
	onButton: () => void;
	name: string;
	number: string;
};

export const DeleteNumberView: React.FC<DeleteNumberViewProps> = ({
	onButton,
	name,
	number,
}) => {
	return (
		<View style = {styles.container}>
			<GilroyText
				size='g1'
				type='Semibold'
			>
				{name}
			</GilroyText>

			<RobotoText
				styleText={styles.subtitle}
				size='r6'
				type='Light'
			>
				Телефон
			</RobotoText>

			<CustomTextInput
				style={styles.input}
				value=''
				placeholder={number} />

			<Button
				style = {styles.btn}
				header='Удалить контакт' />
		</View>
	);
};
