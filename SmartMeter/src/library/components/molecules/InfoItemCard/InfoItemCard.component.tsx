import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

//styles
import styles from './InfoItemCard.styles';

//components
import { GilroyText, HeadlineText } from 'library/components/atoms';

type InfoItemCardProps = {
	date: string;
	content: string;
	type: 'announcement' | 'notification' | 'news';
	style?: StyleProp<ViewStyle>;
}

export const InfoItemCard: React.FC<InfoItemCardProps> = ({
	date,
	content,
	type,
	style,
}) => {
	//for mark
	const markHeight = () => {
		if (type === 'announcement') return 44;
		else if (type === 'notification') return 49;
		else return 30;
	};

	return (
		<View style={[styles.container, style]}>
			<GilroyText
				size = 'g4'
				type = 'Medium'
				style={styles.date}
			>
				{date}
			</GilroyText>

			<View
				style={[
					styles.contentContainer,
					{ minHeight: markHeight() },
					(type === 'notification') && { borderRadius: 8 },
				]}
			>
				<View
					style={[styles.mark, {
						width: (type === 'notification') ? 10 : 11,
						borderTopLeftRadius: (type === 'notification') ? 8 : 0,
						borderBottomLeftRadius: (type === 'notification') ? 8 : 0,
						height: markHeight(),
					}]} />

				<HeadlineText
					style={[styles.contentText, {
						paddingLeft: (type === 'notification') ? 9 : 16,
						fontSize: (type === 'notification') ? 16 : 14,
					}]}
					type = 'Medium'
				>
					{content}
				</HeadlineText>
			</View>
		</View>
	);
};
