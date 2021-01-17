/* eslint-disable max-len */
import React from 'react';

//views
import { AnnouncementsView } from './Announcements.view';

//types
import { AnnouncementsViewProps } from './Announcements.view';

type AnnouncementsScreenProps = {

};

//constants
const _data = [{
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

export const AnnouncementsScreen: React.FC<AnnouncementsScreenProps> = ({

}) => {
	return (
		<AnnouncementsView
			data={_data}
			onPressNotify={() => {}} />
	);
};
