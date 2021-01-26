import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//views
import { RequestHistoryView } from './RequestHistory.view';

//types
import { Request } from './RequestHistory.view';

type RequestHistoryScreenProps = {

};

//constants
const data: Request[] = [
	{
		name: 'Ремонт трубы',
		date: '12.12.2020',
		masterName: 'Евгений',
		masterPhone: '+79223456798',
		isCompleted: false,
	}, {
		name: 'Кран на кухне',
		date: '10.11.2020',
		masterName: 'Валерий',
		masterPhone: '+79123333455',
		isCompleted: true,
	},
];

export const RequestHistoryScreen: React.FC<RequestHistoryScreenProps> = ({

}) => {
	//navigation
	const navigation = useNavigation();

	const _onPressRequestsItem = React.useCallback((request: Request) => {
		navigation.navigate('reqdetails', {
			details: request,
		});
	}, [navigation]);

	return (
		<RequestHistoryView
			data={data}
			onPressItem={_onPressRequestsItem} />
	);
};
