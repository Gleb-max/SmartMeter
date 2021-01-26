import React from 'react';
import { View, FlatList } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import { NextButton, ProfileHead } from 'library/components/molecules';

//styles
import styles from './Receipts.styles';

//types
type ReceiptsProps = {
	userData: {
		name: string;
		surname: string;
        photo: string;
        address: string;
	};
	onNotifications: () => void;
	onProfile: () => void;
	datesList: string[];
	paidList: boolean[];
	onSelectReceipt: (receiptIndex: number) => void;
	onPressNotify: () => void;
};

export const ReceiptsView: React.FC<ReceiptsProps> = ({
	userData,
	datesList,
	paidList,
	onSelectReceipt,
	onPressNotify,
	onNotifications,
	onProfile,
}) => {
	//renders
	const _renderListItem = React.useCallback(({ index }) => {
		return (
			<NextButton
				text={datesList[index]}
				isPaid={paidList[index]}
				style={{ margin: 5, marginTop: 21 }}
				onPress={() => onSelectReceipt(index)} />
		);
	}, [datesList, onSelectReceipt, paidList]);

	return (
		<View style={styles.container}>

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
				Квитанции
			</GilroyText>

			<FlatList
				data={datesList}
				renderItem={_renderListItem}
				keyExtractor={(item: string, index: number) => item + index}
				showsVerticalScrollIndicator={false}
				contentContainerStyle={styles.flatListContainer} />
		</View>
	);
};
