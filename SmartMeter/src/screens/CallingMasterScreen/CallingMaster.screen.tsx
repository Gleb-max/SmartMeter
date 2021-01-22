import React from 'react';

//views
import { CallingMasterView } from './CallingMaster.view';

//types
type CallingMasterScreenProps = {

};

export const CallingMasterScreen: React.FC<CallingMasterScreenProps> = ({

}) => {
	//callbacks
	const _onPressReg = React.useCallback(()=>{

	}, []);
	const _onPressHistory = React.useCallback(() => {

	}, []);

	return (
		<CallingMasterView
			onPressHistory={_onPressHistory}
			onPressReg={_onPressReg} />
	);
};
