import React from 'react';

//views
import { NewsView } from './News.view';

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

export const NewsScreen: React.FC<NewsScreenProps> = ({

}) => {
	const _onPressNotify = React.useCallback(() => {
	}, []);
	const _onPressButton = React.useCallback(() => {
	}, []);

	return (

		<NewsView
			datesList={_datesList}
			newsContentList={_newsContentList}
			onPressNotify={_onPressNotify}
			onPressButton = {_onPressButton}
			header= 'ТСЖ “Ленина 56”' />
	);
};
