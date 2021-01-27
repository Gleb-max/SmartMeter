import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';

//components
import { GilroyText, SMIcons } from 'library/components/atoms';
import { ProfileHead, NextButton, FloatingAddButton } from 'library/components/molecules';

//styles
import styles from './Devices.styles';

//types
import { MeterSettings } from '../MeterSettingsScreen/MeterSettings.view';

type DevicesViewProps = {
	meters: MeterSettings[];
	userData: {
		name: string;
		surname: string;
		photo: string;
		address: string;
	};
	onNotifications: () => void;
	onProfile: () => void;
	onPressMeter: (meter: MeterSettings) => void;
	onPressPlus: () => void;
};

export const DevicesView: React.FC<DevicesViewProps> = ({
	userData,
	meters,
	onPressPlus,
	onNotifications,
	onProfile,
	onPressMeter,
}) => {
	//renders
	const _renderItem = React.useCallback(() => {
		return meters.map((item, index) => {
			return (
				<NextButton
					key={index}
					text={item.place}
					onPress={() => {
						onPressMeter(item);
					}}
					withMarker={false}
					style={styles.button}
					styleText={styles.buttonText} />
			);
		});
	}, [meters, onPressMeter]);

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
				style={{ paddingTop: 10 }}
				showsVerticalScrollIndicator={false}
			>
				{_renderItem()}
			</ScrollView>

			<FloatingAddButton onPress={onPressPlus} />

		</View>
	);
};
