import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';

//components
import { GilroyText, SMIcons } from 'library/components/atoms';
import { ProfileHead, NextButton } from 'library/components/molecules';

//styles
import styles from './Devices.styles';

//types
type DevicesViewProps = {
	headerList: {
		title: string;
		onPress: () => void;
	}[];
	userData: {
		name: string;
		surname: string;
		photo: string;
		address: string;
	};
	onNotifications: () => void;
	onProfile: () => void;
	onPressPlus: () => void;
};

export const DevicesView: React.FC<DevicesViewProps> = ({
	headerList,
	onPressPlus,
	onNotifications,
	onProfile,
	userData,
}) => {
	//renders
	const _renderItem = React.useCallback(() => {
		return headerList.map((item, index) => {
			return (
				<NextButton
					key={index}
					text={item.title}
					onPress={() => {
						item.onPress;
					}}
					withMarker={false}
					style={styles.button}
					styleText={styles.buttonText} />
			);
		});
	}, [headerList]);

	return (
		<View style = {styles.container} >
			<ProfileHead
				userData={userData}
				onNotifications={onNotifications}
				onProfile={onProfile} />

			<GilroyText
				type = 'Semibold'
				size = 'g1'
				style = {styles.title}
			>
				Устройства
			</GilroyText>

			<ScrollView
				showsVerticalScrollIndicator={false}
			>
				{_renderItem()}
			</ScrollView>

			<TouchableOpacity
				onPress={onPressPlus}
				style={styles.plus}
			>
				<SMIcons
					size={26}
					height={26}
					width={26}
					color='#FFF'
					name='ic_plus' />
			</TouchableOpacity>
		</View>
	);
};
