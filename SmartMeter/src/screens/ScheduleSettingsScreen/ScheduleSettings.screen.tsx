import React from 'react';

//navigation
import { useNavigation, useRoute } from '@react-navigation/native';

//views
import { ScheduleSettingsView } from './ScheduleSettings.view';

//types
import { UserSchedule } from '../UserSchedulesScreen/UserSchedules.view';

type ScheduleSettingsScreenProps = {

};

//constants
const userData = {
	name: 'Светлана',
	surname: 'Есаулкова',
	address: 'ул. Ленина 56',
	photo: 'https://s3-alpha-sig.figma.com/img/eb64/1fc8/64a7f71e6c47d9bbc65c200198c09db4?Expires=1612742400&Signature=JeEWjsBbcKVCvSomR37R4~suoJt2BGERrWHiZ3rFfrllJ5DgQMY2G~wA6XfgaKbGNFVCowjxBHunOCY6k6jfRc5NyQXTgLla6sRxmQUeLyUc6PHKYs1Snk2ohR49ACdbWLZAxWgMGCmRiGiFk6uiTExXfYo1q8FwA-79bdyH7eJvBpJ3vfu7l59zFKoGrLwQZHzzKaUvo-V6~9l~HpolYBge-aBEFVF4WlgdisOMXY6nKRPtb5qFvQKrVCm6XJzDmJUZqGbAk4PgzN3SGyfxzfbKW9bPxTi-ikHFrMh2j5SLOH4g9eJlFXioMc7nFQ3vbeJrWckQJb9jzfsHzAVdvg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', // eslint-disable-line max-len,
};

const defaultSchedule: UserSchedule = {
	id: 0,
	name: 'Новое расписание',
	days: [],
	intervalValue: 2,
};

export const ScheduleSettingsScreen: React.FC<ScheduleSettingsScreenProps> = ({

}) => {
	//navigation
	const route = useRoute();
	const params = route?.params as {details: UserSchedule};
	const schedule = params ? params?.details as UserSchedule : defaultSchedule;

	const navigation = useNavigation();

	//callbacks
	const _onNotifications = React.useCallback(() => {
		navigation.navigate('notifications');
	}, [navigation]);

	const _onProfile = React.useCallback(() => {
		navigation.navigate('main/account');
	}, [navigation]);

	return (
		<ScheduleSettingsView
			userData={userData}
			onNotifications={_onNotifications}
			onProfile={_onProfile}
			schedule={schedule} />
	);
};
