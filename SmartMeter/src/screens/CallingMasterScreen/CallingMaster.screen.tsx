import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//views
import { CallingMasterView } from './CallingMaster.view';

//types
type CallingMasterScreenProps = {

};

export const CallingMasterScreen: React.FC<CallingMasterScreenProps> = ({

}) => {
	//navigation
	const navigation = useNavigation();

	//callbacks
	const _onPressReg = React.useCallback(() => {
		navigation.navigate('reqregister');
	}, [navigation]);

	const _onPressHistory = React.useCallback(() => {
		navigation.navigate('reqhistory');
	}, [navigation]);

	return (
		<CallingMasterView
			onPressHistory={_onPressHistory}
			onPressReg={_onPressReg} />
	);
};
