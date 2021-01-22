import React from 'react';

//views
import { NotificationsView } from './Notifications.view';

//types
type NotificationsScreenProps = {

};

//constants
const _data = [{
	date: '10.01.21 17:56',
	content: 'Обнаружена утечка воды!',
}, {
	date: '10.01.21 17:56',
	content: 'Обнаружена утечка воды!',
}, {
	date: '10.01.21 17:56',
	content: 'Обнаружена утечка воды!',
}, {
	date: '10.01.21 17:56',
	content: 'Обнаружена утечка воды!',
}, {
	date: '10.01.21 17:56',
	content: 'Обнаружена утечка воды!',
}, {
	date: '10.01.21 17:56',
	content: 'Обнаружена утечка воды!',
}, {
	date: '10.01.21 17:56',
	content: 'Обнаружена утечка воды!',
}, {
	date: '10.01.21 17:56',
	content: 'Обнаружена утечка воды!',
}];

export const NotificationsScreen: React.FC<NotificationsScreenProps> = ({

}) => {
	const _onPressNotify = React.useCallback(()=>{

	}, []);

	return (
		<NotificationsView
			data = {_data}
			name='Светлана Есаулкова'
			address='ул. Ленина 56'
			onPressNotify={_onPressNotify}
			profilePhoto= 'https://s3-alpha-sig.figma.com/img/eb64/1fc8/64a7f71e6c47d9bbc65c200198c09db4?Expires=1611532800&Signature=QWNJgAESqeAPQyP4v8MyLbUfLteROD-tJYh~EgURr4uVMF9~SSIthFDdDnOYbLRiF3j64wXv3qlca-GKR6AJ1TJFhlm4XvPR6ai04rSHq4J8Fwgu6z8J2SFthVuvhicbf7dihYKIJzLaCTlXYr~7WV5Ao9M6uC1TTkoh2Boe8Q-CzaWir2HiR-vriPPa5dRY-bDTtmnXvjHlt5iPJx42Ty1PgrnTC~GADI0vDOovXNKTGkWg4S4dQ1Xmb7AvG7JAnnGDHLM3R-b8cpOM2sfM3wRe8p~o8Z8oeaEtV9WrWLAjQqXFE8HGMaMSJwjObeiec2ypKx~DZukopFR1FJKm0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA' />
	);
};
