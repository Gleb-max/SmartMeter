import React from 'react';

//navigation
import { useRoute } from '@react-navigation/native';

//views
import { RequestDetailsView } from './RequestDetails.view';

//types
import { Request } from 'screens/RequestHistoryScreen/RequestHistory.view';

type RequestDetailsScreenProps = {

};

//constats
const qrContent = 'Smart Meter is the best team!!!';
const logoUri = { uri: 'https://dl.dropboxusercontent.com/s/f578n91ebmoo440/robot.png' };

export const RequestDetailsScreen: React.FC<RequestDetailsScreenProps> = ({

}) => {
	//navigation
	const route = useRoute();
	const params = route?.params as {details: Request};
	const req = params.details as Request;

	return (
		<RequestDetailsView
			request={req}
			qrContent={qrContent}
			logoUri={logoUri} />
	);
};
