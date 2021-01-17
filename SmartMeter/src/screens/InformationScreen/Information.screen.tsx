import React from 'react';

//views
import { InformationView } from './Information.view';

//types
type InformationScreenProps = {

};
//constants
const _data = [{
	date: 'ПН-СР',
	time: '9:00-13:00 И 14:00-18:00',
}, {
	date: 'ЧТ',
	time: '10:00-13:00 И 14:00-19:00',
}, {
	date: 'ПТ',
	time: '9:00-13:00 и 14:00-15:00',
}, {
	date: 'СБ-ВС',
	time: 'выходной',
}];

const _address = '620109 Свердловская обл, г Екатеринбург, ул Ленина 56';

export const InformationScreen: React.FC<InformationScreenProps> = ({

}) => {
	return (
		<InformationView
			workingHours={_data}
			address={_address} />
	);
};
