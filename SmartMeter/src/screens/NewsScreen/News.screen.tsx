import React from 'react';

//views
import { NewsView } from './News.view';

//navigation
import { useNavigation } from '@react-navigation/native';

//types
type NewsScreenProps = {

};

//constats
const _datesList = ['07.01.21', '31.12.2020', '31.12.2020', '31.12.2020', '31.12.2020', '31.12.2020'];
const _newsContentList = [
	'11.01.21 пройдет собрание собственников во втором дворе в 11:30. Просьба присутствовать всем жильцам.',
	'Поздравляем всех жильцов с наступающим новым годом! Желаем здоровья и счастья!',
	'Поздравляем всех жильцов с наступающим новым годом! Желаем здоровья и счастья!',
	'Поздравляем всех жильцов с наступающим новым годом! Желаем здоровья и счастья!',
	'Поздравляем всех жильцов с наступающим новым годом! Желаем здоровья и счастья!',
	'Поздравляем всех жильцов с наступающим новым годом! Желаем здоровья и счастья!',
];

const userData = {
    name: 'Светлана',
    surname: 'Есаулкова',
    address: 'ул. Ленина 56',
    photo: 'https://s3-alpha-sig.figma.com/img/eb64/1fc8/64a7f71e6c47d9bbc65c200198c09db4?Expires=1612742400&Signature=JeEWjsBbcKVCvSomR37R4~suoJt2BGERrWHiZ3rFfrllJ5DgQMY2G~wA6XfgaKbGNFVCowjxBHunOCY6k6jfRc5NyQXTgLla6sRxmQUeLyUc6PHKYs1Snk2ohR49ACdbWLZAxWgMGCmRiGiFk6uiTExXfYo1q8FwA-79bdyH7eJvBpJ3vfu7l59zFKoGrLwQZHzzKaUvo-V6~9l~HpolYBge-aBEFVF4WlgdisOMXY6nKRPtb5qFvQKrVCm6XJzDmJUZqGbAk4PgzN3SGyfxzfbKW9bPxTi-ikHFrMh2j5SLOH4g9eJlFXioMc7nFQ3vbeJrWckQJb9jzfsHzAVdvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', // eslint-disable-line max-len,
}

export const NewsScreen: React.FC<NewsScreenProps> = ({

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

	const _onInfo = React.useCallback(() => {
		navigation.navigate('info');
	}, [navigation]);

	const _onPressNotify = React.useCallback(() => {
	}, []);

	return (

		<NewsView
			userData={userData}
			onNotifications={_onNotifications}
			onProfile={_onProfile}
			datesList={_datesList}
			newsContentList={_newsContentList}
			onPressNotify={_onPressNotify}
			onInfo={_onInfo}
			header= 'ТСЖ “Ленина 56”' />
	);
};
