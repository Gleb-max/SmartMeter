import React from 'react';
import { TouchableOpacity, View } from 'react-native';

//components
import { GilroyText, HeadlineText } from 'library/components/atoms';
import { NextButton } from 'library/components/molecules';

//styles
import styles from './Contacts.styles';
import { ScrollView } from 'react-native-gesture-handler';

//types
type ContactsViewProps = {
	contactsList: {
		name: string;
		number: string;
		onPress: () => void;
	}[];
	onPressPlus: ()=>void;
};

export const ContactsView: React.FC<ContactsViewProps> = ({
	contactsList,
	onPressPlus,

}) => {
	//renders
	const _renderItem = React.useCallback(() => {
		return contactsList.map((item, index) => {
			return (
				<View key = {index}>
					<NextButton
						text = {item.name}
						onPress = {item.onPress}
						style = {styles.addButton}
						isPaid = {true}
						contact = {true}
						number={item.number} />
				</View>

			);
		});
	}, [contactsList]);

	return (
		<View style={styles.container} >
			<GilroyText
				size = 'g1'
				style = {styles.header}
				type = 'Semibold'
			>
				Экстренные контакты
			</GilroyText>

			{contactsList.length !== 0 && (
				<ScrollView showsVerticalScrollIndicator = {false}>
					{_renderItem()}
				</ScrollView>
			)}

			{(contactsList.length === 0) && (
				<HeadlineText
					type='Medium'
					size={'h1'}
					style={styles.description}
				>
					У вас нет экстренных контактов
				</HeadlineText>
			)}

			<TouchableOpacity
				onPress={onPressPlus}
				style={styles.addButtonContainer} />
		</View>
	);
};
