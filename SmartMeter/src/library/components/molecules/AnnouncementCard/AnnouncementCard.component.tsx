import React from 'react';
import { Text, View } from 'react-native';

//styles
import styles from './AnnouncementCard.styles';

type AnnouncementCardProps = {
    date: string;
    content: string;
}

export const AnnouncementCard: React.FC<AnnouncementCardProps> = ({
	date, content,
}) => {
	return (
		<View style={styles.container}>
			<Text style={styles.date}>
				{date}
			</Text>

			<View style={styles.contentContainer}>
				<View style={styles.mark} />

				<Text style={styles.contentText}>
					{content}
				</Text>
			</View>
		</View>
	);
};
