import React from 'react';

//view
import { NewNumberView } from './NewNumber.view';

//types
type NewNumberScreenProps = {

};

export const NewNumberScreen: React.FC<NewNumberScreenProps> = ({

}) => {
	//callbacks
	const _onButton = React.useCallback(()=>{

	}, []);

	return (
		<NewNumberView onButton={_onButton} />
	);
};
