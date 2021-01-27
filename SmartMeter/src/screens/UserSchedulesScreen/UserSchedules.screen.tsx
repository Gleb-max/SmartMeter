import React from 'react';

//navigation
import { useNavigation } from '@react-navigation/native';

//views
import { UserSchedule, UserSchedulesView } from './UserSchedules.view';

//types
type UserSchedulesScreenProps = {

};

const userData = {
	name: 'Светлана',
	surname: 'Есаулкова',
	address: 'ул. Ленина 56',
	photo: 'https://s3-alpha-sig.figma.com/img/eb64/1fc8/64a7f71e6c47d9bbc65c200198c09db4?Expires=1612742400&Signature=JeEWjsBbcKVCvSomR37R4~suoJt2BGERrWHiZ3rFfrllJ5DgQMY2G~wA6XfgaKbGNFVCowjxBHunOCY6k6jfRc5NyQXTgLla6sRxmQUeLyUc6PHKYs1Snk2ohR49ACdbWLZAxWgMGCmRiGiFk6uiTExXfYo1q8FwA-79bdyH7eJvBpJ3vfu7l59zFKoGrLwQZHzzKaUvo-V6~9l~HpolYBge-aBEFVF4WlgdisOMXY6nKRPtb5qFvQKrVCm6XJzDmJUZqGbAk4PgzN3SGyfxzfbKW9bPxTi-ikHFrMh2j5SLOH4g9eJlFXioMc7nFQ3vbeJrWckQJb9jzfsHzAVdvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', // eslint-disable-line max-len,
};

const schedules = [
	{
		id: 0,
		name: 'Расписание 1',
		days: [1, 2],
		intervalType: 'day',
		intervalValue: 1,
	},
	{
		id: 1,
		name: 'Расписание 2',
		days: [1, 2],
		intervalType: 'day',
		intervalValue: 1,
	},
	{
		id: 2,
		name: 'Расписание 3',
		days: [1, 2],
		intervalType: 'day',
		intervalValue: 1,
	},
	{
		id: 3,
		name: 'Расписание 4',
		days: [1, 2],
		intervalType: 'day',
		intervalValue: 1,
	},
	{
		id: 4,
		name: 'Расписание 5',
		days: [1, 2],
		intervalType: 'day',
		intervalValue: 1,
	},
	{
		id: 5,
		name: 'Расписание 6',
		days: [1, 2],
		intervalType: 'day',
		intervalValue: 1,
	},
	{
		id: 6,
		name: 'Расписание 7',
		days: [1, 2],
		intervalType: 'day',
		intervalValue: 1,
	},
	{
		id: 7,
		name: 'Расписание 8',
		days: [1, 2],
		intervalType: 'day',
		intervalValue: 1,
	},
	{
		id: 8,
		name: 'Расписание 9',
		days: [1, 2],
		intervalType: 'day',
		intervalValue: 1,
	},
	{
		id: 9,
		name: 'Расписание 10',
		days: [1, 2],
		intervalType: 'day',
		intervalValue: 1,
	},
	{
		id: 10,
		name: 'Расписание 11',
		days: [1, 2],
		intervalValue: 1,
	},
	{
		id: 11,
		name: 'Расписание 12',
		days: [1, 2],
		intervalValue: 1,
	},
];

export const UserSchedulesScreen: React.FC<UserSchedulesScreenProps> = ({

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

	const _onPressPlus = React.useCallback(() => {
		navigation.navigate('schedulesettings');
	}, [navigation]);

	const _onPresSchedule = React.useCallback((schedule: UserSchedule) => {
		navigation.navigate('schedulesettings', { details: schedule });
	}, [navigation]);

	return (
		<UserSchedulesView
			userData={userData}
			onNotifications={_onNotifications}
			onProfile={_onProfile}
			onPressPlus={_onPressPlus}
			onPressSchedule={_onPresSchedule}
			schedules={schedules} />
	);
};
