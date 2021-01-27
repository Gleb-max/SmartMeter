import React from 'react';
import { View, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import { CustomDropDown, ProfileHead } from 'library/components/molecules';
        
//styles
import styles from './MeterSettings.styles';

//types
export type MeterSettings = {
	place: string;
    scenario: string;
    isWaterManagement: boolean;
    rate: string;
	limit: string;
	photo: string;
}

type MeterSettingsViewProps = {
    userData: {
        name: string;
        surname: string;
        address: string;
		photo: string;
    };
    onNotifications: () => void;
	onProfile: () => void;
	onPressMeterPhoto: (meter: MeterSettings) => void;
	onPressUserSchedule: () => void;
    meter: MeterSettings;
};

//constants
const scenariosTypes = ['Выберите сценарий', 'Стандартный', 'Пользовательский'];

export const MeterSettingsView: React.FC<MeterSettingsViewProps> = ({
	userData,
	meter,
	onNotifications,
	onProfile,
	onPressMeterPhoto,
	onPressUserSchedule,
}) => {
	//state
	const [pressedScenario, setPressedScenario] = React.useState(false);

	const [_scenario, _setScenario] = React.useState(meter.scenario);
	const [_water, _setWater] = React.useState(meter.isWaterManagement);

	//callbacks
	const onChangeScenario = React.useCallback(() => {
		setPressedScenario(!pressedScenario);
	}, [pressedScenario]);

	const onChangeWater = React.useCallback(() => {
		_setWater(!_water);
	}, [_water]);

	const changeScenario = (scenario: string) => {
		if (scenario === scenariosTypes[0]) return;
		_setScenario(scenario);
		if (scenario === scenariosTypes[2]) onPressUserSchedule();
	};

	return (
		<View style = {styles.container} >

			<ProfileHead
				userData={userData}
				onNotifications={onNotifications}
				onProfile={onProfile} />

			<GilroyText
				type='Semibold'
				size='g1'
				styleText={styles.header}
			>
				{meter.place}
			</GilroyText>

			<ScrollView
				style={styles.scroll}
				showsVerticalScrollIndicator={false}
			>

				{/* photo */}

				<View style={[styles.cardContainer, { marginTop: 10 }]}>

					<TouchableOpacity
						onPress={() => onPressMeterPhoto(meter)}
					>
						<GilroyText
							size='g2'
							type='Medium'
							styleText={styles.photoCardHeader}
						>
							Фото счетчика
						</GilroyText>
					</TouchableOpacity>

				</View>

				{/* scenario */}

				<View style={[styles.cardContainer, pressedScenario && { marginBottom: 15 }]}>

					<GilroyText
						size='g2'
						type='Medium'
						styleText={styles.cardHeader}
					>
						Сценарий
					</GilroyText>

					<View style={styles.cardEditableContantContainer}>

						<GilroyText
							size='g2'
							type='Medium'
							styleText={styles.scenarioType}
						>
							{_scenario}
						</GilroyText>

						<TouchableOpacity
							style={styles.changeContainer}
							onPress={onChangeScenario}
						>

							<GilroyText
								size='g3'
								type='Medium'
								styleText={styles.changeText}
							>
								Изменить
							</GilroyText>

						</TouchableOpacity>

					</View>

				</View>

				{(pressedScenario) && (
					<CustomDropDown
						data={scenariosTypes}
						onChange={(item: string) => changeScenario(item)}
						listStyle={styles.list}
						style={styles.dropdown} />
				)}

				{/* water management */}

				<View style={styles.cardContainer}>

					<GilroyText
						size='g2'
						type='Medium'
						styleText={styles.cardHeader}
					>
						Управление водой
					</GilroyText>

					<View style={styles.cardEditableContantContainer}>

						<GilroyText
							size='g2'
							type='Medium'
							styleText={styles.scenarioType}
						>
							{_water ? 'Включено' : 'Выключено'}
						</GilroyText>

						<TouchableOpacity
							style={styles.changeContainer}
							onPress={onChangeWater}
						>

							<GilroyText
								size='g3'
								type='Medium'
								styleText={[styles.changeText, { color: '#FF5B5B' }]}
							>
								{_water ? 'Выключить' : 'Включить'}
							</GilroyText>

						</TouchableOpacity>

					</View>

				</View>

				{/* rate */}

				<View style={styles.cardContainer}>

					<GilroyText
						size='g2'
						type='Medium'
						styleText={styles.cardHeader}
					>
						Тариф
					</GilroyText>

					<View style={styles.cardEditableContantContainer}>

						<GilroyText
							size='g2'
							type='Medium'
							styleText={styles.scenarioType}
						>
							{meter.rate}
						</GilroyText>

						<TouchableOpacity style={styles.changeContainer}>

							<GilroyText
								size='g3'
								type='Medium'
								styleText={styles.changeText}
							>
								Изменить

							</GilroyText>

						</TouchableOpacity>

					</View>

				</View>

				{/* limit */}

				<View style={styles.cardContainer}>

					<GilroyText
						size='g2'
						type='Medium'
						styleText={styles.cardHeader}
					>
						Лимит
					</GilroyText>

					<View style={styles.cardEditableContantContainer}>

						<GilroyText
							size='g2'
							type='Medium'
							styleText={styles.scenarioType}
						>
							{meter.limit}
						</GilroyText>

						<TouchableOpacity style={styles.changeContainer}>

							<GilroyText
								size='g3'
								type='Medium'
								styleText={styles.changeText}
							>
								Изменить

							</GilroyText>

						</TouchableOpacity>

					</View>

				</View>

			</ScrollView>

			{/* </SafeAreaView> */}

		</View>
	);
};
