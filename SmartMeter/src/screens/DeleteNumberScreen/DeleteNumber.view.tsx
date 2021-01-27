import React from 'react';
import { View } from 'react-native';

//components
import { GilroyText, Button, RobotoText } from 'library/components/atoms';
import { CustomTextInput } from 'library/components/molecules';

//styles
import styles from './DeleteNumber.styles';

//types
import { Contact } from '../ContactsScreen/Contacts.view';

type DeleteNumberViewProps = {
	onButton: () => void;
	contact: Contact;
};

export const DeleteNumberView: React.FC<DeleteNumberViewProps> = ({
	onButton,
	contact,
}) => {
	return (
		<View style = {styles.container}>
			<GilroyText
				size='g1'
				type='Semibold'
			>
				{contact.name}
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
				placeholder={contact.phone} />

			<Button
				onPress={onButton}
				style = {styles.btn}
				header='Удалить контакт'
				onPress={onButton} />
		</View>
	);
};
