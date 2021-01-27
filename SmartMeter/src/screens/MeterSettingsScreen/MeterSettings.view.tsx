import React from 'react';
import { View, TouchableOpacity, SafeAreaView, ScrollView  } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import { ProfileHead } from 'library/components/molecules';
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
    meter: MeterSettings;
};

export const MeterSettingsView: React.FC<MeterSettingsViewProps> = ({
	userData,
	meter,
	onNotifications,
	onProfile,
	onPressMeterPhoto,
}) => {
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

			<SafeAreaView>

				<ScrollView showsVerticalScrollIndicator={false}>

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

					<View style={styles.cardContainer}>

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
								{meter.scenario}
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
								{meter.isWaterManagement ? 'Включено' : 'Выключено'}
							</GilroyText>

							<TouchableOpacity style={styles.changeContainer}>

								<GilroyText
									size='g3'
									type='Medium'
									styleText={[styles.changeText, { color: '#FF5B5B' }]}
								>
									{meter.isWaterManagement ? 'Выключить' : 'Включить'}
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

			</SafeAreaView>

		</View>
	);
};
