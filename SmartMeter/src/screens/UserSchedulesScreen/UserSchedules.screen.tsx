import React from 'react';

//views
import { UserSchedulesView } from './UserSchedules.view';

//types
type UserSchedulesScreenProps = {

};

const userData = {
    name: 'Светлана',
    surname: 'Есаулкова',
    address: 'ул. Ленина 56',
    photo: 'https://s3-alpha-sig.figma.com/img/eb64/1fc8/64a7f71e6c47d9bbc65c200198c09db4?Expires=1611532800&Signature=QWNJgAESqeAPQyP4v8MyLbUfLteROD-tJYh~EgURr4uVMF9~SSIthFDdDnOYbLRiF3j64wXv3qlca-GKR6AJ1TJFhlm4XvPR6ai04rSHq4J8Fwgu6z8J2SFthVuvhicbf7dihYKIJzLaCTlXYr~7WV5Ao9M6uC1TTkoh2Boe8Q-CzaWir2HiR-vriPPa5dRY-bDTtmnXvjHlt5iPJx42Ty1PgrnTC~GADI0vDOovXNKTGkWg4S4dQ1Xmb7AvG7JAnnGDHLM3R-b8cpOM2sfM3wRe8p~o8Z8oeaEtV9WrWLAjQqXFE8HGMaMSJwjObeiec2ypKx~DZukopFR1FJKm0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA', // eslint-disable-line max-len,
}

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
        intervalType: 'day',
        intervalValue: 1,
    },
    {
        id: 11,
        name: 'Расписание 12',
        days: [1, 2],
        intervalType: 'day',
        intervalValue: 1,
    },
]

export const UserSchedulesScreen: React.FC<UserSchedulesScreenProps> = ({

}) => {
	return (
        <UserSchedulesView 
            userData={userData}
            schedules={schedules}
        />
	);
};
