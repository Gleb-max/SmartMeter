import React from 'react';

//navigation
import { useNavigation, useRoute } from '@react-navigation/native';

//view
import { DeleteNumberView } from './DeleteNumber.view';

//types
import { Contact } from '../ContactsScreen/Contacts.view';

type DeleteNumberScreenProps = {

};

export const DeleteNumberScreen: React.FC<DeleteNumberScreenProps> = ({

}) => {
	//navigation
	const route = useRoute();
	const params = route?.params as { details: Contact };
	const contact = params.details as Contact;

	const navigation = useNavigation();

	//callbacks
	const _onButton = React.useCallback(() => {
		navigation.navigate('contacts');
	}, [navigation]);

	return (
		<DeleteNumberView
			contact={contact}
			onButton={_onButton} />
	);
};
