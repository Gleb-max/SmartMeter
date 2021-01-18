import React from 'react';
import { View, FlatList } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import {
	PressableIcon,
	NextButton,
	InfoItemCard,
} from 'library/components/molecules';

//styles
import styles from './News.styles';

//types
type NewsViewProps = {
	datesList: string[];
	newsContentList: string[];
	header: string;
	onPressNotify: () => void;
	onPressButton: () => void;
};

export const NewsView: React.FC<NewsViewProps> = ({
	datesList,
	newsContentList,
	onPressNotify,
	onPressButton,
	header,
}) => {
	//renders
	const _renderListItem = React.useCallback(({ index }) => {
		return (
			<InfoItemCard
				date={datesList[index]}
				content={newsContentList[index]}
				style={{ width: '100%' }}
				type='news' />
		);
	}, [datesList, newsContentList]);

	const _renderHeader = React.useCallback(() => {
		return (
			<>
				<GilroyText
					type='Semibold'
					size='g2'
					style={styles.secondHeader}
				>
					Новости
				</GilroyText>
			</>
		);
	}, []);

	return (
		<View style = {styles.container}>
			<PressableIcon
				iconName='ic_notification'
				size={29}
				color='black'
				onPress={() => onPressNotify}
				withNotif={true} />

			<GilroyText
				size = 'g1'
				type = 'Semibold'
				style = {styles.header}
			>
				{header}
			</GilroyText>

			<NextButton
				text = 'Информация'
				withMarker = {false}
				onPress = {() => onPressButton}
				style = {styles.button} />

			<FlatList
				data={datesList}
				renderItem={_renderListItem}
				ListHeaderComponent={_renderHeader}
				keyExtractor={(item: string, index: number) => item + index}
				showsVerticalScrollIndicator={false}
				style={styles.flatListContainer} />
		</View>
	);
};
