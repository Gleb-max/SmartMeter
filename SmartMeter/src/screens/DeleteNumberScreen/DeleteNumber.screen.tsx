import React from 'react';

//view
import { DeleteNumberView } from './DeleteNumber.view';

//types
type DeleteNumberScreenProps = {

};

export const DeleteNumberScreen: React.FC<DeleteNumberScreenProps> = ({

}) => {
	//callbacks
	const _onButton = React.useCallback(()=>{

	}, []);

	return (
		<DeleteNumberView
			number = '+7 (808) 555-01-11'
			name = 'Муж'
			onButton={_onButton} />
	);
};
