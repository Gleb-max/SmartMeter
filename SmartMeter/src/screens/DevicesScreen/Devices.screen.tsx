import React from 'react';

//views
import { DevicesView } from './Devices.view';

//types
type DevicesScreenProps = {

};

//constants
const _headerList = [
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Ванная', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Ванная', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Ванная', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Ванная', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Ванная', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
	{ title: 'Ванная', onPress: () => { } },
	{ title: 'Кухня', onPress: () => { } },
];

const userData = {
	name: 'Светлана',
	surname: 'Есаулкова',
	address: 'ул. Ленина 56',
	photo: 'https://s3-alpha-sig.figma.com/img/eb64/1fc8/64a7f71e6c47d9bbc65c200198c09db4?Expires=1612742400&Signature=JeEWjsBbcKVCvSomR37R4~suoJt2BGERrWHiZ3rFfrllJ5DgQMY2G~wA6XfgaKbGNFVCowjxBHunOCY6k6jfRc5NyQXTgLla6sRxmQUeLyUc6PHKYs1Snk2ohR49ACdbWLZAxWgMGCmRiGiFk6uiTExXfYo1q8FwA-79bdyH7eJvBpJ3vfu7l59zFKoGrLwQZHzzKaUvo-V6~9l~HpolYBge-aBEFVF4WlgdisOMXY6nKRPtb5qFvQKrVCm6XJzDmJUZqGbAk4PgzN3SGyfxzfbKW9bPxTi-ikHFrMh2j5SLOH4g9eJlFXioMc7nFQ3vbeJrWckQJb9jzfsHzAVdvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', // eslint-disable-line max-len,
};

export const DevicesScreen: React.FC<DevicesScreenProps> = ({

}) => {
	const _onNotifications = React.useCallback(() => {

	}, []);
	const _onPressPlus = React.useCallback(() => {

	}, []);
	const _onProfile = React.useCallback(() => {

	}, []);

	return (
		<DevicesView
			headerList = {_headerList}
			onNotifications = {_onNotifications}
			onProfile = {_onProfile}
			userData = {userData}
			onPressPlus = {_onPressPlus} />
	);
};
