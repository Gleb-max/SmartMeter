import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//views
import { ReceiptsView } from './Receipts.view';

//types
type ReceiptsScreenProps = {

};

//constats
const _datesList = [
	'Квитанция за 25.12.2020',
	'Квитанция за 25.02.2020',
	'Квитанция за 25.02.2020',
	'Квитанция за 25.02.2020',
	'Квитанция за 25.02.2020',
	'Квитанция за 25.02.2020',
	'Квитанция за 25.02.2020',
	'Квитанция за 25.02.2020',
	'Квитанция за 25.02.2020',
	'Квитанция за 25.02.2020',
];

const _paidList = [true, false, true, true, false, false, true];

const userData = {
	name: 'Светлана',
	surname: 'Есаулкова',
	address: 'ул. Ленина 56',
	photo: 'https://s3-alpha-sig.figma.com/img/eb64/1fc8/64a7f71e6c47d9bbc65c200198c09db4?Expires=1612742400&Signature=JeEWjsBbcKVCvSomR37R4~suoJt2BGERrWHiZ3rFfrllJ5DgQMY2G~wA6XfgaKbGNFVCowjxBHunOCY6k6jfRc5NyQXTgLla6sRxmQUeLyUc6PHKYs1Snk2ohR49ACdbWLZAxWgMGCmRiGiFk6uiTExXfYo1q8FwA-79bdyH7eJvBpJ3vfu7l59zFKoGrLwQZHzzKaUvo-V6~9l~HpolYBge-aBEFVF4WlgdisOMXY6nKRPtb5qFvQKrVCm6XJzDmJUZqGbAk4PgzN3SGyfxzfbKW9bPxTi-ikHFrMh2j5SLOH4g9eJlFXioMc7nFQ3vbeJrWckQJb9jzfsHzAVdvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', // eslint-disable-line max-len,
};

export const ReceiptsScreen: React.FC<ReceiptsScreenProps> = ({

}) => {
	//navigation
	const navigation = useNavigation();

	//callbacks
	const _onNotifications = React.useCallback(() => {
		navigation.navigate('notifications');
	}, [navigation]);

	const _onProfile = React.useCallback(() => {
		navigation.navigate('main/account');
	}, [navigation]);

	const _onSelectReceipt = React.useCallback(() => {
	}, []);
	const _onPressNotify = React.useCallback(() => {
	}, []);

	return (
		<ReceiptsView
			userData={userData}
			onNotifications={_onNotifications}
			onProfile={_onProfile}
			datesList={_datesList}
			paidList={_paidList}
			onSelectReceipt={_onSelectReceipt}
			onPressNotify={_onPressNotify} />
	);
};
