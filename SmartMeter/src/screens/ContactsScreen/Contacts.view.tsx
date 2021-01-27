import React from 'react';
import { TouchableOpacity, View } from 'react-native';

//components
import { GilroyText, HeadlineText, SMIcons } from 'library/components/atoms';
import { NextButton, FloatingAddButton } from 'library/components/molecules';

//styles
import styles from './Contacts.styles';
import { ScrollView } from 'react-native-gesture-handler';

//types
export type Contact = {
	name: string;
	phone: string;
}

type ContactsViewProps = {
	contacts: Contact[];
	onPressContact: (contact: Contact) => void;
	onPressPlus: () => void;
};

export const ContactsView: React.FC<ContactsViewProps> = ({
	contacts,
	onPressContact,
	onPressPlus,
}) => {
	//renders
	const _renderItem = React.useCallback(() => {
		return contacts.map((item, index) => {
			return (
				<View key = {index}>
					<NextButton
						text = {item.name}
						onPress = {()=> onPressContact(item)}
						style = {styles.addButton}
						isPaid = {true}
						contact = {true}
						number={item.phone} />
				</View>
			);
		});
	}, [contacts, onPressContact]);

	return (
		<View style={styles.container} >
			<GilroyText
				size={'g1'}
				style={styles.header}
				type={'Semibold'}
			>
				Экстренные контакты
			</GilroyText>

			{contacts.length !== 0 && (
				<ScrollView
					contentContainerStyle={{ paddingHorizontal: 30, paddingBottom: 10 }}
					showsVerticalScrollIndicator={false}
				>
					{_renderItem()}
				</ScrollView>
			)}

			{(contacts.length === 0) && (
				<HeadlineText
					type='Medium'
					size={'h1'}
					style={styles.description}
				>
					У вас нет экстренных контактов
				</HeadlineText>
			)}

			<FloatingAddButton onPress={onPressPlus} />

		</View>
	);
};
