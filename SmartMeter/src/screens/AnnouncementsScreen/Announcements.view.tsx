import React from 'react';
import { View, FlatList } from 'react-native';

//styles
import styles from './Announcements.styles';

//components
//components
import { GilroyText } from 'library/components/atoms';
import {
	ProfileHead,
	NextButton,
	InfoItemCard,
} from 'library/components/molecules';

//types
export type Announcement = {
	date: string;
	content: string;
	type: 'announcement' | 'notification' | 'news';
}

export type AnnouncementsViewProps = {
	userData: {
		name: string;
		surname: string;
        photo: string;
        address: string;
	};
	onNotifications: () => void;
	onProfile: () => void;
	data: Announcement[];
	onPressNotify?: () => void;
}

export const AnnouncementsView: React.FC<AnnouncementsViewProps> = ({
	userData,
	data,
	onNotifications,
	onProfile,
	onPressNotify,
}) => {
	//renders
	const _renderListItem = React.useCallback(({ item, index }) => {
		return (
			<InfoItemCard
				date={item.date}
				content={item.content}
				type={item.type}
				key={index} />
		);
	}, [data]);

	return (
		<View style = {styles.container}>

			<ProfileHead
				userData={userData}
				onNotifications={onNotifications}
				onProfile={onProfile} />

			<GilroyText
				size = 'g1'
				type = 'Semibold'
				style = {styles.header}
			>
				Объявления
			</GilroyText>

			<FlatList<Announcement>
				data={data}
				renderItem={_renderListItem}
				keyExtractor={(item: Announcement, index: number) => item.date + index}
				showsVerticalScrollIndicator={false}
				style={styles.flatListContainer} />
		</View>
	);
};
