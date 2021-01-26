import React from 'react';
import { View, Text, SafeAreaView, FlatList, ListRenderItemInfo, TouchableOpacity } from 'react-native';

//components
import { ProfileHead, GilroyText, SMIcons } from 'library/components';

//styles
import styles from './UserSchedules.styles';
import { NextButton } from 'library/components/molecules';

//types
type UserSchedule = {
    id: number;
    name: string;
    days: number [];
    intervalValue: number;
}

type UserSchedulesViewProps = {
    userData: {
		name: string;
		surname: string;
        photo: string;
        address: string;
	};
	onNotifications: () => void;
	onProfile: () => void;
    schedules: UserSchedule [];
};

export const UserSchedulesView: React.FC<UserSchedulesViewProps> = ({
	userData,
	onNotifications,
	onProfile,
	schedules,
}) => {
	const _renderChatMessage = (itemInfo: ListRenderItemInfo<UserSchedule>): React.ReactNode => {
		const schedule = itemInfo.item;
		return (
			<NextButton
				text={schedule.name}
				withMarker={false}
				style={[styles.itemContainer, itemInfo.index == 0 && { marginTop: 37 }]}
				onPress={() => console.log(schedule.name)} />
		);
	};

	return (
		<View style={styles.container}>
			<ProfileHead 
				userData={userData}
				onNotifications={onNotifications}
				onProfile={onProfile}
			/>

			<GilroyText
				type='Semibold'
				size='g1'
				styleText={styles.header}
			>
				Пользовательский
			</GilroyText>

			{schedules.length > 0 ? (
				<SafeAreaView style={styles.schedulesContainer}>
					<FlatList<UserSchedule>
						data={schedules}
						renderItem={_renderChatMessage}
						keyExtractor={(item) => item.id.toString()}
						showsVerticalScrollIndicator={false}
						style={styles.schedulesList} />
				</SafeAreaView>
			) : (
				<View style={styles.emptyListContainer} >
					<Text style={styles.emptyListText}>
						У вас нет расписания
					</Text>
				</View>
			)}

			<View style={styles.addButtonContaier}>
				<TouchableOpacity style={styles.addButtonOpacity}>
					<SMIcons
						name='ic_plus'
						width={28}
						height={28}
						size={28}
						color='#FDFDFD' />
				</TouchableOpacity>
			</View>
		</View>
	);
};
