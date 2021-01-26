import React from 'react';
import { View, FlatList } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import {
	ProfileHead,
	NextButton,
	InfoItemCard,
} from 'library/components/molecules';

//styles
import styles from './News.styles';

//types
type NewsViewProps = {
	userData: {
		name: string;
		surname: string;
        photo: string;
        address: string;
	};
	onNotifications: () => void;
	onProfile: () => void;
	datesList: string[];
	newsContentList: string[];
	header: string;
	onPressNotify: () => void;
	onInfo: () => void;
};

export const NewsView: React.FC<NewsViewProps> = ({
	userData,
	datesList,
	newsContentList,
	onPressNotify,
	onInfo,
	header,
	onNotifications,
	onProfile,
}) => {
	//renders
	const _renderListItem = React.useCallback(({ index }) => {
		return (
			<InfoItemCard
				date={datesList[index]}
				content={newsContentList[index]}
				type='news' />
		);
	}, [datesList, newsContentList]);

	return (
		<View style = {styles.container}>
			
			<ProfileHead 
				userData={userData}
				onNotifications={onNotifications}
				onProfile={onProfile}
			/>

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
				onPress = {onInfo}
				style = {styles.button} />
			
			<GilroyText
				type='Semibold'
				size='g2'
				style={styles.secondHeader}
			>
				Новости
			</GilroyText>

			<FlatList
				data={datesList}
				renderItem={_renderListItem}
				keyExtractor={(item: string, index: number) => item + index}
				showsVerticalScrollIndicator={false}
				style={styles.flatListContainer} />
		</View>
	);
};
