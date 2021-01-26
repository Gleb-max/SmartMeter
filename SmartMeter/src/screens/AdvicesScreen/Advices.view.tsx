import React from 'react';
import { View, FlatList } from 'react-native';

//components
import { AdviceCard, PressableIcon, ProfileHead } from 'library/components/molecules';
import { GilroyText } from 'library/components/atoms';

//styles
import styles from './Advices.styles';

//types
type AdviceContent = {
	subtitle: string;
	text: string;
}

export type Advice = {
	title: string;
	text: string;
	content: AdviceContent[];
}

type AdvicesProps = {
	userData: {
		name: string;
		surname: string;
		photo: string;
		address: string;
	};
	onNotifications: () => void;
	onProfile: () => void;
	advicesList: Advice[];
	onSelectAdvice: (adviceItem: Advice) => void;
};

export const AdvicesView: React.FC<AdvicesProps> = ({
	userData,
	advicesList,
	onSelectAdvice,
	onNotifications,
	onProfile,
}) => {
	//renders
	const _renderListItem = React.useCallback(({ item, index }) => {
		return (
			<AdviceCard
				text={item.title}
				style={styles.adviceCard}
				onPress={() => onSelectAdvice(item)}
				key={index} />
		);
	}, [advicesList, onSelectAdvice]);

	return (
		<View style={ styles.container }>

			<ProfileHead
				userData={userData}
				onNotifications={onNotifications}
				onProfile={onProfile} />

			<GilroyText
				style = {styles.header}
				type = 'Semibold'
				size = 'g1'
			>
				Полезные советы
			</GilroyText>

			<FlatList<Advice>
				data={advicesList}
				renderItem={_renderListItem}
				numColumns={2}
				columnWrapperStyle={styles.flatList}
				keyExtractor={(item: Advice, index: number) => item.title + index}
				style={styles.flatListStyle}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.flatListContainer} />
		</View>
	);
};
