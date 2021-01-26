import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//views
import { RegistarionRequestView } from './RegistarionRequest.view';

//types
type RegistarionRequestScreenProps = {

};

export const RegistarionRequestScreen: React.FC<RegistarionRequestScreenProps> = ({

}) => {
	//navigation
	const navigation = useNavigation();

	//callbacks
	const _onPressRegister = React.useCallback(() => {
		navigation.navigate('reqhistory');
	}, [navigation]);

	return (
		<RegistarionRequestView
			onPressRegister={_onPressRegister} />
	);
};
