import React from 'react';
import { View, Text, Modal, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';

//components
import { GilroyText, SMIcons } from 'library/components/atoms';
import { CustomTextInput, ProfileHead } from 'library/components/molecules';

//styles
import styles from './ScheduleSettings.styles';
import { Button } from 'library/components';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { range } from 'library/helpers';

//constants
const days = {
	0: 'пн',
	1: 'вт',
	2: 'ср',
	3: 'чт',
	4: 'пт',
	5: 'сб',
	6: 'вс',
};

//types
type ScheduleSettingsViewProps = {
    userData: {
        name: string;
        surname: string;
        address: string;
		photo: string;
    };
    onNotifications: () => void;
	onProfile: () => void;
    scheduleName: string;
    interval?: number;
    activeDays?: number[];
};

export const ScheduleSettingsView: React.FC<ScheduleSettingsViewProps> = ({
	userData,
	scheduleName,
	interval = 2,
	activeDays = [],
	onNotifications,
	onProfile,
}) => {
	//state
	const [_interval, _setInterval] = React.useState(interval);
	const [isSettingInterval, setIsSettingInterval] = React.useState(false);
	const [isDaysOpen, setIsDaysOpen] = React.useState(false);
	const [_activeDays, _setActiveDays] = React.useState(activeDays);

	//tools
	const makeAgreeWithNumber = (num: number): string => {
		if (num == 1) return `${num} час`;
		else if (num < 5) return `${num} часа`;
		else if (num <= 12) return `${num} часов`;
		return 'раз в сутки';
	};

	const changeInterval = (text: string) => {
		const intValue = parseFloat(text);
		if (isNaN(intValue)) return;
		_setInterval(intValue);
	};

	const openDaysChooser = () => {
		setIsDaysOpen(!isDaysOpen);
	};

	const renderDayCard = React.useCallback((num: 0 | 1 | 2 | 3 | 5 | 6) => {
		const isNowChosen = _activeDays.includes(num);

		let onPressCB: () => void;
		if (isNowChosen) {
			let newActiveDays = _activeDays.filter((elem) => elem !== num);
			onPressCB = () => _setActiveDays(newActiveDays);
		}
		else {
			onPressCB = () => {
				_setActiveDays((prevState) => ([
					...prevState,
					num,
				]));
			};
		}

		return (
			<TouchableOpacity
				style={[styles.dayCardContainer, { backgroundColor: isNowChosen ? '#005670' : '#00000000' }]}
				onPress={onPressCB}
			>

				<GilroyText
					size='g3'
					type='Medium'
					style={{ marginBottom: 2 }}
					styleText={[styles.day, { color: isNowChosen ? '#FFFFFF' : '#000000' }]}
				>
					{days[num]}
				</GilroyText>

			</TouchableOpacity>
		);
	}, [_activeDays]);

	return (
		<>
			<View style={styles.container}>

				<ProfileHead
					userData={userData}
					onNotifications={onNotifications}
					onProfile={onProfile} />

				<GilroyText
					type='Semibold'
					size='g1'
					styleText={styles.header}
				>
					{scheduleName}
				</GilroyText>

				{/* interval */}
				<TouchableOpacity
					style={styles.settingsItemContainer}
					onPress={() => setIsSettingInterval(true)}
				>

					<GilroyText
						size='g3'
						type='Medium'
						styleText={styles.settingsItemText}
					>
						Промежуток
					</GilroyText>

					<View style={styles.settingsItemContent}>

						<GilroyText
							size='g3'
							type='Medium'
							styleText={styles.interval}
							style={styles.intervalText}
						>
							{makeAgreeWithNumber(_interval)}
						</GilroyText>

						<SMIcons
							name={isSettingInterval ? 'ic_arrow_up' : 'ic_arrow_down'}
							size={24}
							width={24}
							height={24}
							style={styles.arrow}
							color='#747474' />

					</View>

				</TouchableOpacity>

				{/* days */}
				<TouchableOpacity
					style={styles.settingsItemContainer}
					onPress={openDaysChooser}
				>

					<GilroyText
						size='g3'
						type='Medium'
						styleText={styles.settingsItemText}
					>
						Дни
					</GilroyText>

					<View style={styles.settingsItemContent}>

						<SMIcons
							name={isDaysOpen ? 'ic_arrow_up' : 'ic_arrow_down'}
							size={24}
							width={24}
							height={24}
							style={styles.arrow}
							color='#747474' />

					</View>

				</TouchableOpacity>

				{
					isDaysOpen && (
						<View style={styles.daysContainer}>
							{range(0, 6, 1).map((elem) => renderDayCard(elem))}
						</View>
					)}

			</View>

			{/* set interval modal */}

			<Modal
				animationType='fade'
				transparent={true}
				visible={isSettingInterval}
				style={styles.modalContainer}
				onRequestClose={() => {
					setIsSettingInterval(false);
				}}
			>
				<TouchableOpacity
					style={styles.modalOpacity}
					activeOpacity={1}
					onPressOut={() => {
						setIsSettingInterval(false);
					}}
				>

					<TouchableWithoutFeedback>

						<View style={styles.inputContainer}>

							<CustomTextInput
								value={_interval.toString()}
								onChange={changeInterval}
								onSubmitEditing={() => setIsSettingInterval(false)}
								keyboardType='numeric'
								labelTextStyle={{ textAlign: 'center', alignItems: 'center', alignContent: 'center', alignSelf: 'center' }}
								style={styles.intervalInput} />

						</View>

					</TouchableWithoutFeedback>

				</TouchableOpacity>

			</Modal>
		</>
	);
};
