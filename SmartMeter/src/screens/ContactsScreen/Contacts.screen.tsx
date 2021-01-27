import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//views
import { Contact, ContactsView } from './Contacts.view';

//types
type ContactsScreenProps = {

};

//constants
const _contactsList: Contact[] = [
	{
		name: 'Муж',
		phone: '+78005553535',
	}, {
		name: 'Диспетчер',
		phone: '+78005553535',
	},
];

export const ContactsScreen: React.FC<ContactsScreenProps> = ({

}) => {
	//navigation
	const navigation = useNavigation();

	//callbacks
	const _onPreccContact = React.useCallback((contact: Contact) => {
		navigation.navigate('contact', { details: contact });
	}, [navigation]);

	//callbacks
	const _onPressPlus = React.useCallback(() => {
		navigation.navigate('newcontact');
	}, [navigation]);

	return (
		<ContactsView
			contacts={_contactsList}
			onPressContact={_onPreccContact}
			onPressPlus={_onPressPlus} />
	);
};
