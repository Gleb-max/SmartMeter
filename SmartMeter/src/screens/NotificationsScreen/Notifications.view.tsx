import React from 'react';
import { ScrollView } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import { InfoItemCard, Header } from 'library/components/molecules';

//styles
import styles from './Notifications.styles';

//types
type NotificationsViewProps = {
	data: {
		date: string;
		content: string;
	}[];
	profilePhoto: string;
	name: string;
	onPressNotify: () => void;
	address: string;
};

export const NotificationsView: React.FC<NotificationsViewProps> = ({
	data,
	name,
	address,
	onPressNotify,
	profilePhoto,
}) => {
	//renders
	const _renderNotifications = React.useCallback(() => {
		return data.map((item, index) => {
			return (
				<InfoItemCard
					date={item.date}
					content={item.content}
					type='notification'
					style={styles.card}
					key={index} />
			);
		});
	}, [data]);

	return (
		<ScrollView style={styles.container} >
			<Header
				onPressNotify={onPressNotify}
				style={styles.header}
				name={name}
				address={address}
				profilePhoto = {profilePhoto} />

			<GilroyText
				type='Semibold'
				size='g1'
				style={styles.title}
			>
				Уведомления
			</GilroyText>

			{_renderNotifications()}
		</ScrollView>
	);
};
