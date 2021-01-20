import React from 'react';

//views
import { DevicesView } from './Devices.view';

//types
type DevicesScreenProps = {

};

//constants
const _headerList = [
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Ванная', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Ванная', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Ванная', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Ванная', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Ванная', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Ванная', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
];

export const DevicesScreen: React.FC<DevicesScreenProps> = ({

}) => {
	const _onPressNotify = React.useCallback(() => {
	}, []);
	const _onPressPlus = React.useCallback(() => {
	}, []);

	return (
		<DevicesView
			headerList = {_headerList}
			onPressNotif = {_onPressNotify}
			onPressPlus = {_onPressPlus} />
	);
};
