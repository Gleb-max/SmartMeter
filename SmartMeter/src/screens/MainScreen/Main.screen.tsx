import React from 'react';

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
	return (
		<MainView
			onAnalytics={() => {}}
			onNotifications={() => { }}
			onNotify={() => { }}
			onReceipts={() => { }}
			onMasterCall={() => { }}
			analytics={{
				period: 'ноябрь',
				total: 8642.12,
			}}
			indexData={_dummyData}
			notificationCount={3}
			receiptAmount={1}
			userData={{
				name: 'Светлана',
				photo: 'https://s3-alpha-sig.figma.com/img/eb64/1fc8/64a7f71e6c47d9bbc65c200198c09db4?Expires=1611532800&Signature=QWNJgAESqeAPQyP4v8MyLbUfLteROD-tJYh~EgURr4uVMF9~SSIthFDdDnOYbLRiF3j64wXv3qlca-GKR6AJ1TJFhlm4XvPR6ai04rSHq4J8Fwgu6z8J2SFthVuvhicbf7dihYKIJzLaCTlXYr~7WV5Ao9M6uC1TTkoh2Boe8Q-CzaWir2HiR-vriPPa5dRY-bDTtmnXvjHlt5iPJx42Ty1PgrnTC~GADI0vDOovXNKTGkWg4S4dQ1Xmb7AvG7JAnnGDHLM3R-b8cpOM2sfM3wRe8p~o8Z8oeaEtV9WrWLAjQqXFE8HGMaMSJwjObeiec2ypKx~DZukopFR1FJKm0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', // eslint-disable-line max-len,
			}} />
	);
};
