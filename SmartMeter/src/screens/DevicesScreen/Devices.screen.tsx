import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//views
import { DevicesView } from './Devices.view';

//types
import { MeterSettings } from 'screens/MeterSettingsScreen/MeterSettings.view';

type DevicesScreenProps = {

};

//constants
const userData = {
	name: 'Светлана',
	surname: 'Есаулкова',
	address: 'ул. Ленина 56',
	photo: 'https://s3-alpha-sig.figma.com/img/eb64/1fc8/64a7f71e6c47d9bbc65c200198c09db4?Expires=1612742400&Signature=JeEWjsBbcKVCvSomR37R4~suoJt2BGERrWHiZ3rFfrllJ5DgQMY2G~wA6XfgaKbGNFVCowjxBHunOCY6k6jfRc5NyQXTgLla6sRxmQUeLyUc6PHKYs1Snk2ohR49ACdbWLZAxWgMGCmRiGiFk6uiTExXfYo1q8FwA-79bdyH7eJvBpJ3vfu7l59zFKoGrLwQZHzzKaUvo-V6~9l~HpolYBge-aBEFVF4WlgdisOMXY6nKRPtb5qFvQKrVCm6XJzDmJUZqGbAk4PgzN3SGyfxzfbKW9bPxTi-ikHFrMh2j5SLOH4g9eJlFXioMc7nFQ3vbeJrWckQJb9jzfsHzAVdvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', // eslint-disable-line max-len,
};

const meters: MeterSettings[] = [
	{
		place: 'Кухня',
		scenario: 'Стандартный',
		isWaterManagement: true,
		rate: '18,76 р/m³',
		limit: '1 m³ / день',
		photo: 'https://www.vodomer.ru/upload/iblock/bfa/bfa9e1247831366bc45754c13013058b.jpg',
	},
	{
		place: 'Гостиная',
		scenario: 'Пользовательский',
		isWaterManagement: false,
		rate: '20 р/m³',
		limit: '3 m³ / день',
		photo: 'https://www.vodomer.ru/upload/iblock/bfa/bfa9e1247831366bc45754c13013058b.jpg',
	},
	{
		place: 'Зал',
		scenario: 'Стандартный',
		isWaterManagement: true,
		rate: '16 р/m³',
		limit: '10 m³ / день',
		photo: 'https://www.vodomer.ru/upload/iblock/bfa/bfa9e1247831366bc45754c13013058b.jpg',
	},
];

export const DevicesScreen: React.FC<DevicesScreenProps> = ({

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

	const _onPressMeter = React.useCallback((meter: MeterSettings) => {
		navigation.navigate('metersettings', { details: meter });
	}, [navigation]);

	const _onPressPlus = React.useCallback(() => {
		navigation.navigate('newdevice');
	}, [navigation]);

	return (
		<DevicesView
			meters = {meters}
			onNotifications = {_onNotifications}
			onProfile = {_onProfile}
			onPressMeter={_onPressMeter}
			userData = {userData}
			onPressPlus = {_onPressPlus} />
	);
};
