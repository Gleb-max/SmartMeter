import React from 'react';

//views
import { RequestDetailsView } from './RequestDetails.view';

//types
type RequestDetailsScreenProps = {

};

//constats
const requestDate = '12.12.20';
const masterName = 'Евгений';
const masterPhone = '+79223456798';
const requestName = 'Ремонт трубы';
const qrContent = 'Smart Meter is the best team!!!';
const logoUri = { uri: 'https://dl.dropboxusercontent.com/s/f578n91ebmoo440/robot.png' };

export const RequestDetailsScreen: React.FC<RequestDetailsScreenProps> = ({

}) => {
	//callbacks
	const _onSelectReceipt = React.useCallback(() => {
	}, []);
	const _onPressNotify = React.useCallback(() => {
	}, []);

	return (
		<RequestDetailsView
			requestDate={requestDate}
			requestName={requestName}
			masterName={masterName}
			qrContent={qrContent}
			logoUri={logoUri}
			masterPhone={masterPhone} />
	);
};
