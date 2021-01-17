import React from 'react';
import { View, ScrollView } from 'react-native';

//components
import { GilroyText, HeadlineText } from 'library/components/atoms';
import { PressableIcon } from 'library/components/molecules';

//styles
import styles from './AdviceItem.styles';

//types
type AdvceItemProps = {
	title?: string;
	subtitle?: string;
	text: string;
}

type AdviceItemViewProps = {
	advices: AdvceItemProps[]
};

export const AdviceItemView: React.FC<AdviceItemViewProps> = ({
	advices,
}) => {
	//renders
	const _renderItem = React.useCallback(() => {
		return advices.map((item, index) => {
			return (
				<View key = {index}>
					{(item.title) && (
						<GilroyText
							style={styles.titleText}
							size='g5'
							type='Semibold'
						>
							{item.title}
						</GilroyText>
					)}

					{(item.subtitle) && (
						<HeadlineText
							size='h3'
							type='Semibold'
							style={styles.subtitleText}
						>
							{item.subtitle}
						</HeadlineText>
					)}

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
	}, [advices]);
	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.contentContainer}
		>
			<PressableIcon
				iconName='ic_notification'
				onPress={() => { }}
				size={29}
				color='black'
				withNotif={true}
				style={styles.icon} />

			{_renderItem()}
		</ScrollView>
	);
};
