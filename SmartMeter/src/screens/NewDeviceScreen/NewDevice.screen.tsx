import React from 'react';
import { once } from 'ramda';

//views
import { NewDeviceView } from './NewDevice.view';

//types
type NewDeviceScreenProps = {

};

export const NewDeviceScreen: React.FC<NewDeviceScreenProps> = ({

}) => {
	//callbacks
	const _onChangedId = React.useCallback(()=> {

	}, []);
	const _onChangedPlace = React.useCallback(() => {

	}, []);
	const _onChangedTariff = React.useCallback(() => {

	}, []);
	const _onChangedDayTariff = React.useCallback(() => {

	}, []);
	const _onChangedNightTariff = React.useCallback(() => {

	}, []);
	const _onAddDevice = React.useCallback(() => {

	}, []);

	return (
		<NewDeviceView
			onChangeId={_onChangedId}
			onChangeNightTariff={_onChangedNightTariff}
			onChangeDayTariff={_onChangedDayTariff}
			onChangePlace={_onChangedPlace}
			onChangeTariff={_onChangedTariff}
			id=''
			place=''
			dayTariff=''
			nightTariff=''
			tariff=''
			onAddDevice={_onAddDevice} />
	);
};
