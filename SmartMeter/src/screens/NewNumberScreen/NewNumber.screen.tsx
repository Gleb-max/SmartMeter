import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//view
import { NewNumberView } from './NewNumber.view';

//types
type NewNumberScreenProps = {

};

export const NewNumberScreen: React.FC<NewNumberScreenProps> = ({

}) => {
	//navigation
	const navigation = useNavigation();

	//callbacks
	const _onButton = React.useCallback(() => {
		navigation.navigate('contacts');
	}, [navigation]);

	return (
		<NewNumberView onButton={_onButton} />
	);
};
