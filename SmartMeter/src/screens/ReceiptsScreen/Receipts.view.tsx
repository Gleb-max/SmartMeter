import React from 'react';
import { View, FlatList } from 'react-native';

//components
import { PressableIcon, NextButton } from 'library/components/molecules';
import { GilroyText } from 'library/components/atoms';

//styles
import styles from './Receipts.styles';

//types
type ReceiptsProps = {
	datesList: string[];
	paidList: boolean[];
	onSelectReceipt: (receiptIndex: number) => void;
	onPressNotify: () => void;
};

export const ReceiptsView: React.FC<ReceiptsProps> = ({
	datesList,
	paidList,
	onSelectReceipt,
	onPressNotify,
}) => {
	//renders
	const _renderListItem = React.useCallback(({ item, index }) => {
		return (
			<NextButton
				text={datesList[index]}
				isPaid={paidList[index]}
				onPress={() => onSelectReceipt(index)} />
		);
	}, [datesList, onSelectReceipt, paidList]);

	const _renderHeader = React.useCallback(() => {
		return (
			<>
				<PressableIcon
					iconName='ic_notification'
					onPress={() => onPressNotify}
					size={29}
					color='black'
					withNotif={true}
					style={styles.icon} />

				<GilroyText
					type='Semibold'
					size='g1'
					style={styles.header}
				>
					Квитанции
				</GilroyText>
			</>
		);
	}, []);
	return (
		<View style={styles.container}>
			<FlatList
				data={datesList}
				renderItem={_renderListItem}
				ListHeaderComponent={_renderHeader}
				keyExtractor={(item: string, index: number) => item + index}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.flatListContainer} />
		</View>
	);
};
