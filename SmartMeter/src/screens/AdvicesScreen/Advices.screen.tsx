import React from 'react';

//views
import { AdvicesView } from './Advices.view';

//types
type AdvicesScreenProps = {

};

//constats
const _advicesList = ['Как тратить воду разумно ?', 'Моем посуду с умом', 'Кипятить или покупать в бутылках?', 'Круговорот воды в трубах'];

export const AdvicesScreen: React.FC<AdvicesScreenProps> = ({

}) => {
	//callbacks
	const _onSelectAdvice = React.useCallback((adviceIndex: number) => {
		console.log(_advicesList[adviceIndex]);
	}, []);
	return (
		<AdvicesView
			advicesList={_advicesList}
			onSelectAdvice={_onSelectAdvice} />
	);
};
