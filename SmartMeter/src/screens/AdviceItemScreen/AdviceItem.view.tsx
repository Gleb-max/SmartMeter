import React from 'react';
import { View, ScrollView } from 'react-native';

//components
import { GilroyText, HeadlineText } from 'library/components/atoms';
import { ProfileHead } from 'library/components/molecules';

//styles
import styles from './AdviceItem.styles';

//types
import { Advice } from '../AdvicesScreen/Advices.view';

type AdviceItemViewProps = {
	userData: {
		name: string;
		surname: string;
		photo: string;
		address: string;
	};
	advice: Advice;
	onNotifications: () => void;
	onProfile: () => void;
};

export const AdviceItemView: React.FC<AdviceItemViewProps> = ({
	userData,
	advice,
	onNotifications,
	onProfile,
}) => {
	//renders
	const _renderAdviceContent = React.useCallback(() => {
		return advice.content.map((item, index) => {
			return (
				<View key={index}>

					<HeadlineText
						size='h3'
						type='Semibold'
						style={styles.subtitleText}
					>
						{item.subtitle}
					</HeadlineText>

					<HeadlineText
						size='h3'
						type='Medium'
						style={styles.text}
					>
						{item.text}
					</HeadlineText>

				</View>
			);
		});
	}, [advice.content]);

	const _renderAdvice = React.useCallback(() => {
		return (
			<View style={styles.contentContainer}>
				<GilroyText
					style={styles.titleText}
					size='g1'
					type='Semibold'
				>
					{advice.title}
				</GilroyText>

				<HeadlineText
					size='h3'
					type='Medium'
					style={styles.text}
				>
					{advice.text}
				</HeadlineText>

				{_renderAdviceContent()}

			</View>
		);
	}, [advice, _renderAdviceContent]);

	return (
		<View
			style={styles.container}
		>
			<ProfileHead
				userData={userData}
				onNotifications={onNotifications}
				onProfile={onProfile} />

			<ScrollView
				style={styles.scrollContainer}
				showsVerticalScrollIndicator={false}
			>
				{_renderAdvice()}
			</ScrollView>

		</View>
	);
};
