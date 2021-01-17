/* eslint-disable max-len */
import React from 'react';
import { View, ScrollView, Text } from 'react-native';

//other deps
import { T } from 'ramda';

//styles
import styles from './Announcements.styles';

//components
import { GilroyText } from 'library/components/atoms';
import { 
  InfoItemCard, 
  AnnouncementCard, 
  PressableIcon, 
  CustomDropDown 
} from 'library/components/molecules';

export type AnnouncementsViewProps = {
	data: {
		date: string;
		content: string;
		type: 'announcement' | 'notification' | 'news';
	}[];
	onPressNotify?: () => void;
  
type AnnouncementsViewProps = {
}

export const AnnouncementsView: React.FC<AnnouncementsViewProps> = ({
	data,
	onPressNotify,
}) => {
	//renders
	const _renderAnnouncementItem = React.useCallback(() => {
		return data.map((item, index) => {
			return (
				<InfoItemCard
					date={item.date}
					content={item.content}
					type={item.type}
					key={index} />
			);
		});
	}, [data]);

	return (
		<ScrollView>
			<View style={styles.container}>
				<PressableIcon
					iconName='ic_notification'
					onPress={() => onPressNotify}
					size={29}
					color='black'
					withNotif={false}
					style={styles.icon} />

				<GilroyText 
          size = 'g1' 
          type = 'Semibold' 
          style = {styles.header}
        >
					Объявления
				</GilroyText>

				{ _renderAnnouncementItem() }
};
