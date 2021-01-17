import React from 'react';

//views
import { ReceiptsView } from './Receipts.view';

//types
type ReceiptsScreenProps = {

};

//constats
const _datesList =
['Квитанция за 25.12.2020',
	'Квитанция за 25.02.2020',
	'Квитанция за 25.02.2020',
	'Квитанция за 25.02.2020',
	'Квитанция за 25.02.2020'];

const _paidList = [true, false];

export const ReceiptsScreen: React.FC<ReceiptsScreenProps> = ({

}) => {
	//callbacks
	const _onSelectReceipt = React.useCallback(() => {
	}, []);
	const _onPressNotify = React.useCallback(() => {
	}, []);

	return (
		<ReceiptsView
			datesList={_datesList}
			paidList={_paidList}
			onSelectReceipt={_onSelectReceipt}
			onPressNotify={_onPressNotify} />
	);
};
