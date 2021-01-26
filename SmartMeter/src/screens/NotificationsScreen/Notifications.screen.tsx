import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

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

const userData = {
	name: 'Светлана',
	surname: 'Есаулкова',
	address: 'ул. Ленина 56',
	photo: 'https://s3-alpha-sig.figma.com/img/eb64/1fc8/64a7f71e6c47d9bbc65c200198c09db4?Expires=1612742400&Signature=JeEWjsBbcKVCvSomR37R4~suoJt2BGERrWHiZ3rFfrllJ5DgQMY2G~wA6XfgaKbGNFVCowjxBHunOCY6k6jfRc5NyQXTgLla6sRxmQUeLyUc6PHKYs1Snk2ohR49ACdbWLZAxWgMGCmRiGiFk6uiTExXfYo1q8FwA-79bdyH7eJvBpJ3vfu7l59zFKoGrLwQZHzzKaUvo-V6~9l~HpolYBge-aBEFVF4WlgdisOMXY6nKRPtb5qFvQKrVCm6XJzDmJUZqGbAk4PgzN3SGyfxzfbKW9bPxTi-ikHFrMh2j5SLOH4g9eJlFXioMc7nFQ3vbeJrWckQJb9jzfsHzAVdvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', // eslint-disable-line max-len,
};

export const NotificationsScreen: React.FC<NotificationsScreenProps> = ({

}) => {
	//navigation
	const navigation = useNavigation();

	//callbacks
	const _onProfile = React.useCallback(() => {
		navigation.navigate('main/account');
	}, [navigation]);

	return (
		<NotificationsView
			userData={userData}
			onProfile={_onProfile}
			data = {_data} />
	);
};
