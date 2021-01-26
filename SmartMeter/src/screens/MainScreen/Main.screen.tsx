import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//views
import { MainView } from './Main.view';

//types
type MainScreenProps = {

};

//constants
const _dummyData = {
	Кухня: {
		cold: 1221,
		hot: 812,
		date: '18.01 00:00',
	},
	Гостиная: {
		cold: 176.21,
		hot: 872,
		date: '16.01 23:00',
	},
	Зал: {
		cold: 612,
		hot: 1022,
		date: '17.01 19:00',
	},
};

export const MainScreen: React.FC<MainScreenProps> = ({

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

	const _onAnalytics = React.useCallback(() => {
		navigation.navigate('main/graphics');
	}, [navigation]);

	const _onAnnouncements = React.useCallback(() => {
		navigation.navigate('announcements');
	}, [navigation]);

	const _onReceipts = React.useCallback(() => {
		navigation.navigate('receipts');
	}, [navigation]);

	const _onMasterCall = React.useCallback(() => {
		navigation.navigate('mastercall');
	}, [navigation]);

	return (
		<MainView
			onAnalytics={_onAnalytics}
			onAnnouncements={_onAnnouncements}
			onNotifications={_onNotifications}
			onReceipts={_onReceipts}
			onMasterCall={_onMasterCall}
			onProfile={_onProfile}
			analytics={{
				period: 'ноябрь',
				total: 8642.12,
			}}
			indexData={_dummyData}
			notificationCount={3}
			receiptAmount={1}
			userData={{
				name: 'Светлана',
				photo: 'https://s3-alpha-sig.figma.com/img/eb64/1fc8/64a7f71e6c47d9bbc65c200198c09db4?Expires=1612742400&Signature=JeEWjsBbcKVCvSomR37R4~suoJt2BGERrWHiZ3rFfrllJ5DgQMY2G~wA6XfgaKbGNFVCowjxBHunOCY6k6jfRc5NyQXTgLla6sRxmQUeLyUc6PHKYs1Snk2ohR49ACdbWLZAxWgMGCmRiGiFk6uiTExXfYo1q8FwA-79bdyH7eJvBpJ3vfu7l59zFKoGrLwQZHzzKaUvo-V6~9l~HpolYBge-aBEFVF4WlgdisOMXY6nKRPtb5qFvQKrVCm6XJzDmJUZqGbAk4PgzN3SGyfxzfbKW9bPxTi-ikHFrMh2j5SLOH4g9eJlFXioMc7nFQ3vbeJrWckQJb9jzfsHzAVdvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
			}} />
	);
};
