import React from 'react';
import { View, FlatList } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import { InfoItemCard, ProfileHead } from 'library/components/molecules';

//styles
import styles from './Notifications.styles';

//types
type Notification = {
	date: string;
	content: string;
}

type NotificationsViewProps = {
	userData: {
		name: string;
		surname: string;
        photo: string;
        address: string;
    };
	data: Notification[];

	onProfile: () => void;
};

export const NotificationsView: React.FC<NotificationsViewProps> = ({
	userData,
	data,
	onProfile,
}) => {
	//renders
	const _renderListItem = React.useCallback(({ item, index }) => {
		return (
			<InfoItemCard
				date={item.date}
				content={item.content}
				type='notification'
				style={styles.card}
				key={index} />
		);
	}, []);

	return (
		<View style = {styles.container}>

			<ProfileHead
				userData={userData}
				onProfile={onProfile} />

			<GilroyText
				size = 'g1'
				type = 'Semibold'
				style = {styles.header}
			>
				Уведомления
			</GilroyText>

			<FlatList<Notification>
				data={data}
				renderItem={_renderListItem}
				keyExtractor={(item: Notification, index: number) => item.date + index}
				showsVerticalScrollIndicator={false}
				style={styles.flatListContainer} />
		</View>
		// <ScrollView style={styles.container} >
		// 	<Header
		// 		onPressNotify={onPressNotify}
		// 		style={styles.header}
		// 		name={name}
		// 		address={address}
		// 		profilePhoto = {profilePhoto} />

	// 	<GilroyText
	// 		type='Semibold'
	// 		size='g1'
	// 		style={styles.title}
	// 	>
	// 		Уведомления
	// 	</GilroyText>

	// 	{_renderNotifications()}
	// </ScrollView>
	);
};
