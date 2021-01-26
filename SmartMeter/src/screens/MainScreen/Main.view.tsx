import React from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text } from 'react-native';

//other deps
import SwitchSelector from 'react-native-switch-selector';

//components
import { PressableIcon, CustomDropDown } from 'library/components';

//styles
import styles from './Main.styles';
import { GilroyText, SMIcons } from 'library/components/atoms';

//types
type IndexDataItem = {
	hot: number;
	cold: number;
	date: string;
}
type MainViewProps = {
	userData: {
		name: string;
		photo: string;
	};
	indexData: Record<string, IndexDataItem>;
	analytics: {
		period: string;
		total: number;
	}
	notificationCount: number;
	receiptAmount: number;
	onAnalytics: () => void;
	onNotifications: () => void;
	onReceipts: () => void;
	onMasterCall: () => void;
	onAnnouncements: () => void;
	onProfile: () => void;
};

export const MainView: React.FC<MainViewProps> = ({
	receiptAmount,
	userData,
	analytics,
	indexData,
	notificationCount,
	onNotifications,
	onReceipts,
	onAnalytics,
	onMasterCall,
	onAnnouncements,
	onProfile,
}) => {
	//state
	const [place, setPlace] = React.useState<string>('Кухня');
	const [switchItem, setSwitchItem] = React.useState('cold');

	const {
		date,
		cold,
		hot,
	} = indexData[place];

	const activeTextColor = () => {
		return switchItem === 'hot' ? '#FF5B5B' : '#005670';
	};
	return (
		<View style = {styles.container}>
			<View style = {styles.mainContainer}>
				<View style={styles.headContainer}>
					<View>
						<GilroyText
							children='Добрый день,'
							styleText={[styles.greetingText, { color: '#747474' }]}
							size='g9'
							type='Medium' />

						<GilroyText
							styleText={[styles.nameText, { color: '#000000' }]}
							size='g9'
							type='Semibold'
						>
							{userData.name}
						</GilroyText>
					</View>

					<View style={styles.notifIconandPhotoContainer}>
						<PressableIcon
							iconName='ic_notification'
							onPress={onNotifications}
							size={25}
							color='#000000'
							width={25}
							height={25}
							style={{ alignSelf: 'center' }}
							withNotif={true} />

						<TouchableOpacity 
							onPress={onProfile} >
							<Image
								source={{ uri: userData.photo }}
								style={styles.profilePhoto} />
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.lastMeterContainer}>
					<SwitchSelector
						initial={0}
						borderRadius={11.65}
						onPress={(value: string) => {
							setSwitchItem(value);
						}}
						textColor='#747474'
						selectedColor={activeTextColor()}
						selectedTextStyle={styles.switchText}
						buttonColor='#FFFFFF'
						borderColor='#EEEEEE'
						backgroundColor='#EEEEEE'
						style={styles.switchStyle}
						textStyle={styles.switchText}
						options={[
							{ label: 'Холодная', value: 'cold' },
							{ label: 'Горячая', value: 'hot' },
						]} />

					<View style={styles.lastMeterCard}>
						<CustomDropDown
							data = {['Кухня', 'Гостиная', 'Зал']}
							onChange={(el) => {
								setPlace(el);
							}}
							containerStyle={styles.dropdownContainer}
							style={styles.dropdown} />

						<View style={styles.lastMeterContentContainer}>
							<GilroyText
								size='g7'
								type='Semibold'
								styleText={[styles.lastMeterValue, { color: activeTextColor() }]}
							>
								{`${(switchItem === 'hot')
									? hot
									: cold} m³`
								}
							</GilroyText>

							<GilroyText
								styleText={styles.lastMeterDate}
								size='g8'
								type='Medium'
							>
								{`на ${date}`}
							</GilroyText>
						</View>
					</View>
				</View>
			</View>

			<View style={styles.allCardsContainer}>
				<ScrollView
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					{/* analytics */}
					<TouchableOpacity
						onPress={onAnalytics}
						style={[styles.cardContainer, { marginLeft: 30 }]}
					>
						<View style={[styles.cardIconContainer, { backgroundColor: '#A6EAFF' }]}>
							<SMIcons
								name='ic_analytics'
								size={24}
								color='#FFFFFF'
								width={24}
								height={24} />
						</View>

						<GilroyText
							type='Medium'
							size='g4'
							styleText={styles.cardTitleText}
							children='Аналитика' />

						<View style={styles.cardContentContainer}>
							<GilroyText
								styleText={styles.simpleCardText}
								type='Medium'
								size='g5'
							>
								{`за ${analytics.period}`}
							</GilroyText>

							<GilroyText
								styleText={[styles.receiptsText, { color: '#FF5B5B' }]}
								type='Medium'
								size='g10'
							>
								{`${analytics.total} р`}
							</GilroyText>
						</View>
					</TouchableOpacity>

					{/* announcements */}
					<TouchableOpacity
						onPress={onAnnouncements}
						style={styles.cardContainer}
					>
						<View style={[styles.cardIconContainer, { backgroundColor: '#887EFF' }]}>
							<SMIcons
								name='ic_announcements'
								size={24}
								color='#FFFFFF'
								width={24}
								height={24} />
						</View>

						<GilroyText
							styleText={styles.cardTitleText}
							type='Medium'
							size='g4'
							children='Объявления' />

						<View style={styles.cardContentContainer}>
							<Text>
								<GilroyText
									styleText={styles.simpleCardText}
									type='Medium'
									size='g5'
								>
									{'Новых объявлений: ' }
								</GilroyText>

								<GilroyText
									styleText={[styles.simpleCardText, { color: '#000000' }]}
									type='Semibold'
									size='g5'
								>
									{notificationCount}
								</GilroyText>
							</Text>
						</View>
					</TouchableOpacity>

					{/* receipts */}
					<TouchableOpacity
						onPress={onReceipts}
						style={styles.cardContainer}
					>
						<View style={[styles.cardIconContainer, { backgroundColor: '#F7C7FF' }]}>
							<SMIcons
								name='ic_receipts'
								size={23}
								color='#FFFFFF'
								width={16}
								height={22} />
						</View>

						<GilroyText
							styleText={styles.cardTitleText}
							type='Medium'
							size='g4'
							children='Квитанции' />

						<View style={styles.cardContentContainer}>
							{(receiptAmount === 0) && (
								<GilroyText
									styleText={[styles.receiptsText, { color: '#747474', lineHeight: 16 }]}
									type='Medium'
									size='g6'
								>
									{'У вас нет неоплаченных квитанций'}
								</GilroyText>
							)}

							{(receiptAmount > 0) && (
								<Text>
									<GilroyText
										// styleText={styles.simpleCardText}
										styleText={[styles.receiptsText, { color: '#FF5B5B', lineHeight: 16 }]}
										type='Medium'
										size='g6'
									>
										{'Неоплаченных квитанций: '}
									</GilroyText>

									<GilroyText
										styleText={[styles.simpleCardText, { color: '#FF5B5B' }]}
										type='Semibold'
										size='g5'
									>
										{receiptAmount}
									</GilroyText>
								</Text>
							)}
						</View>
					</TouchableOpacity>

					{/* master call */}
					<TouchableOpacity
						onPress={onMasterCall}
						style={styles.cardContainer} >
						<View style={[styles.cardIconContainer, { backgroundColor: '#98FF7F' }]}>
							<SMIcons
								name='ic_master_call'
								size={24}
								color='#FFFFFF'
								width={24}
								height={24} />
						</View>

						<GilroyText
							styleText={styles.cardTitleText}
							type='Medium'
							size='g4'
							children='Вызов мастера' />

					</TouchableOpacity>
				</ScrollView>
			</View>
		</View>
	);
};
