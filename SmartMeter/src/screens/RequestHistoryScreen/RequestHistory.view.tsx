import React from 'react';
import { View, FlatList } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import { RequestCard } from 'library/components/molecules';

//styles
import styles from './RequestHistory.styles';

//types
export type Request = {
	name: string;
    date: string;
    masterName: string;
    masterPhone: string;
	isCompleted: boolean;
}

type RequestHistoryViewProps = {
	data: Request[];
	onPressItem: (item: Request) => void;
};

export const RequestHistoryView: React.FC<RequestHistoryViewProps> = ({
	data,
	onPressItem,
}) => {
	//renders
	const _renderListItem = React.useCallback(({ item, index }) => {
		return (
			<RequestCard
				date={item.date}
				isCompleted={item.isCompleted}
				onPress={() => onPressItem(item)}
				key={index}
				style={styles.card} />
		);
	}, [data]);

	return (
		<View style={styles.container}>
			<GilroyText
				size = 'g1'
				type = 'Semibold'
				style = {styles.header}
			>
				История
			</GilroyText>

			<FlatList<Request>
				data={data}
				renderItem={_renderListItem}
				keyExtractor={(item: Request, index: number) => item.date + index}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.flatListContainer} />

		</View>

	);
};
