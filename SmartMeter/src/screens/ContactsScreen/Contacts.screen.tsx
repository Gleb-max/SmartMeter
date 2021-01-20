import React from 'react';

//views
import { ContactsView } from './Contacts.view';

//types
type ContactsScreenProps = {

};

//constants
const _contactsList = [
	{
		name: 'Муж',
		number: '+78005553535',
		onPress: () => { },
	}, {
		name: 'Не муж',
		number: '+78005553535',
		onPress: () => { },
	},
	{
		name: 'Муж',
		number: '+78005553535',
		onPress: () => { },
	}, {
		name: 'Не муж',
		number: '+78005553535',
		onPress: () => { },
	},
	{
		name: 'Муж',
		number: '+78005553535',
		onPress: () => { },
	}, {
		name: 'Не муж',
		number: '+78005553535',
		onPress: () => { },
	},
	{
		name: 'Муж',
		number: '+78005553535',
		onPress: () => { },
	}, {
		name: 'Не муж',
		number: '+78005553535',
		onPress: () => { },
	},
	{
		name: 'Муж',
		number: '+78005553535',
		onPress: () => { },
	}, {
		name: 'Не муж',
		number: '+78005553535',
		onPress: () => { },
	},
	{
		name: 'Муж',
		number: '+78005553535',
		onPress: () => { },
	}, {
		name: 'Не муж',
		number: '+78005553535',
		onPress: () => { },
	},

];

export const ContactsScreen: React.FC<ContactsScreenProps> = ({

}) => {
	return (
		<ContactsView contactsList={_contactsList} />
	);
};
