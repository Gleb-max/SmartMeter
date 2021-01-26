import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

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

const userData = {
    name: 'Светлана',
    surname: 'Есаулкова',
    address: 'ул. Ленина 56',
    photo: 'https://s3-alpha-sig.figma.com/img/eb64/1fc8/64a7f71e6c47d9bbc65c200198c09db4?Expires=1612742400&Signature=JeEWjsBbcKVCvSomR37R4~suoJt2BGERrWHiZ3rFfrllJ5DgQMY2G~wA6XfgaKbGNFVCowjxBHunOCY6k6jfRc5NyQXTgLla6sRxmQUeLyUc6PHKYs1Snk2ohR49ACdbWLZAxWgMGCmRiGiFk6uiTExXfYo1q8FwA-79bdyH7eJvBpJ3vfu7l59zFKoGrLwQZHzzKaUvo-V6~9l~HpolYBge-aBEFVF4WlgdisOMXY6nKRPtb5qFvQKrVCm6XJzDmJUZqGbAk4PgzN3SGyfxzfbKW9bPxTi-ikHFrMh2j5SLOH4g9eJlFXioMc7nFQ3vbeJrWckQJb9jzfsHzAVdvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', // eslint-disable-line max-len,
}

const _address = '620109 Свердловская обл, г Екатеринбург, ул Ленина 56';

export const InformationScreen: React.FC<InformationScreenProps> = ({

}) => {
	//navigation
	const navigation = useNavigation();

	//callbacks
	const _onNotifications = React.useCallback(() => {
		navigation.navigate('notifications');
	}, [navigation]);

	const _onProfile = React.useCallback(() => {
		navigation.navigate('profile');
	}, [navigation]);

	return (
		<InformationView
			userData={userData}
			onNotifications={_onNotifications}
			onProfile={_onProfile}
			workingHours={_data}
			address={_address} />
	);
};
