/* eslint-disable max-len */
import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//views
import { AnnouncementsView } from './Announcements.view';

//types
import { Announcement } from './Announcements.view';

type AnnouncementsScreenProps = {

};

//constants
const _data: Announcement[] = [{
	date: '15.01.2021',
	content: '21 декабря 2020г. с 10 - 00 до окончания работ в подъездах №6,7,8,9,10 будет отключено ХВС и ГВС, в связи с проведением плановых ремонтных работ. Сделайте необходимый запас воды на период отключения.',
	type: 'announcement',
}, {
	date: '15.01.2021',
	content: '10 ноября 2020 г. с 9-00 до окончания работ в подъезде № 1 с 1 по 9 этаж будет отключение горячей воды, в связи проведением ремонтных работ.',
	type: 'announcement',
}, {
	date: '15.01.2021',
	content: '21 декабря 2020г. с 10 - 00 до окончания работ в подъездах №6,7,8,9,10 будет отключено ХВС и ГВС, в связи с проведением плановых ремонтных работ. Сделайте необходимый запас воды на период отключения.',
	type: 'announcement',
}, {
	date: '15.01.2021',
	content: '10 ноября 2020 г. с 9-00 до окончания работ в подъезде № 1 с 1 по 9 этаж будет отключение горячей воды, в связи проведением ремонтных работ.',
	type: 'announcement',
}, {
	date: '15.01.2021',
	content: '21 декабря 2020г. с 10 - 00 до окончания работ в подъездах №6,7,8,9,10 будет отключено ХВС и ГВС, в связи с проведением плановых ремонтных работ. Сделайте необходимый запас воды на период отключения.',
	type: 'announcement',
}, {
	date: '15.01.2021',
	content: '10 ноября 2020 г. с 9-00 до окончания работ в подъезде № 1 с 1 по 9 этаж будет отключение горячей воды, в связи проведением ремонтных работ.',
	type: 'announcement',
}, {
	date: '15.01.2021',
	content: '21 декабря 2020г. с 10 - 00 до окончания работ в подъездах №6,7,8,9,10 будет отключено ХВС и ГВС, в связи с проведением плановых ремонтных работ. Сделайте необходимый запас воды на период отключения.',
	type: 'announcement',
}, {
	date: '15.01.2021',
	content: '10 ноября 2020 г. с 9-00 до окончания работ в подъезде № 1 с 1 по 9 этаж будет отключение горячей воды, в связи проведением ремонтных работ.',
	type: 'announcement',
}];

const userData = {
    name: 'Светлана',
    surname: 'Есаулкова',
    address: 'ул. Ленина 56',
    photo: 'https://s3-alpha-sig.figma.com/img/eb64/1fc8/64a7f71e6c47d9bbc65c200198c09db4?Expires=1612742400&Signature=JeEWjsBbcKVCvSomR37R4~suoJt2BGERrWHiZ3rFfrllJ5DgQMY2G~wA6XfgaKbGNFVCowjxBHunOCY6k6jfRc5NyQXTgLla6sRxmQUeLyUc6PHKYs1Snk2ohR49ACdbWLZAxWgMGCmRiGiFk6uiTExXfYo1q8FwA-79bdyH7eJvBpJ3vfu7l59zFKoGrLwQZHzzKaUvo-V6~9l~HpolYBge-aBEFVF4WlgdisOMXY6nKRPtb5qFvQKrVCm6XJzDmJUZqGbAk4PgzN3SGyfxzfbKW9bPxTi-ikHFrMh2j5SLOH4g9eJlFXioMc7nFQ3vbeJrWckQJb9jzfsHzAVdvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', // eslint-disable-line max-len,
}

export const AnnouncementsScreen: React.FC<AnnouncementsScreenProps> = ({

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
		<AnnouncementsView
			userData={userData}
			onNotifications={_onNotifications}
			onProfile={_onProfile}
			data={_data}
			onPressNotify={() => {}} />
	);
};
