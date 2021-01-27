import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//views
import { SuccessNewDeviceView } from './SuccessNewDevice.view';

//types
type SuccessNewDeviceScreenProps = {

};

export const SuccessNewDeviceScreen: React.FC<SuccessNewDeviceScreenProps> = ({

}) => {
	//navigation
	const navigation = useNavigation();

	const _onPressHomeButton = React.useCallback(() => {
		navigation.navigate('main/home');
	}, [navigation]);

	return (
		<SuccessNewDeviceView onPressButton = {_onPressHomeButton} />
	);
};
