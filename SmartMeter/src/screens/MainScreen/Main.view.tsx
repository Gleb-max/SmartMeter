import React from 'react';
import { View, ScrollView, Image, TouchableOpacity } from 'react-native';

//other deps
import SwitchSelector from "react-native-switch-selector";

//components
import { PressableIcon, VolumeIndicator, CustomDropDown, ScenarioItemButton } from 'library/components';

//styles
import styles from './Main.styles';
import { GilroyText, SMIcons } from 'library/components/atoms';

//types
type MainViewProps = {

};

export const MainView: React.FC<MainViewProps> = ({

}) => {
	const createCard = (title: string) => {
		return (
			<View style={styles.cardContainer}>
				<GilroyText styleText={styles.cardTitleText} type="Semibold" size="g4" children={title} />
			</View>
		)
	}
	const [switchItem, setSwitchItem] = React.useState("cold")
	const activeTextColor = () => {
		return switchItem == "hot" ? "#FF5B5B" : "#005670"
	}
	return (
		<View style = {styles.container}>
			<View style = {styles.mainContainer}>

				<View style={styles.headContainer}>

					<View>
						<GilroyText children="Добрый день," styleText={[styles.greetingText, {color: '#747474'}]} size="g9" type="Medium" />

						<GilroyText children="Светлана" styleText={[styles.nameText, {color: '#000000'}]} size="g9" type="Semibold" />
					</View>

					<View style={styles.notifIconandPhotoContainer}>

						<PressableIcon
							iconName='ic_notification'
							onPress={() => { }}
							size={22}
							color='#000000'
							width={20}
							height={22}
							style={{alignSelf: 'center'}}
							withNotif={true} />

						<TouchableOpacity>
							<Image 
								source={{
									uri: "https://s3-alpha-sig.figma.com/img/eb64/1fc8/64a7f71e6c47d9bbc65c200198c09db4?Expires=1611532800&Signature=QWNJgAESqeAPQyP4v8MyLbUfLteROD-tJYh~EgURr4uVMF9~SSIthFDdDnOYbLRiF3j64wXv3qlca-GKR6AJ1TJFhlm4XvPR6ai04rSHq4J8Fwgu6z8J2SFthVuvhicbf7dihYKIJzLaCTlXYr~7WV5Ao9M6uC1TTkoh2Boe8Q-CzaWir2HiR-vriPPa5dRY-bDTtmnXvjHlt5iPJx42Ty1PgrnTC~GADI0vDOovXNKTGkWg4S4dQ1Xmb7AvG7JAnnGDHLM3R-b8cpOM2sfM3wRe8p~o8Z8oeaEtV9WrWLAjQqXFE8HGMaMSJwjObeiec2ypKx~DZukopFR1FJKm0g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
								}} 
								style={styles.profilePhoto} />
						</TouchableOpacity>

					</View>

				</View>

				<View style={styles.lastMeterContainer}>

					<SwitchSelector
						initial={0}
						borderRadius={11.65}
						onPress={(value: string) => {
							setSwitchItem(value)
						}}
						textColor="#747474"
						selectedColor={activeTextColor()}
						selectedTextStyle={styles.switchText}
						buttonColor="#FFFFFF"
						borderColor="#EEEEEE"
						backgroundColor="#EEEEEE"
						style={styles.switchStyle}
						textStyle={styles.switchText}
						options={[
							{ label: "Холодная", value: "cold"},
							{ label: "Горячая", value: "hot" },
						]} />

					<View style={styles.lastMeterCard}>

						<CustomDropDown
							data = {['Кухня', 'Спальня', 'Гостиная']}
							onChange={(el) => console.log(el)}
							containerStyle={styles.dropdownContainer}
							style={styles.dropdown} />

						<View style={styles.lastMeterContentContainer}>
							<GilroyText children={`${switchItem == "hot" ? 228 : 1100} m³`} styleText={[styles.lastMeterValue, {color: activeTextColor()}]} size="g7" type="Semibold" />

							<GilroyText children="на 18.11 16:45" styleText={styles.lastMeterDate} size="g8" type="Medium" />
						</View>

					</View>
				</View>

			</View>

			<View style={styles.allCardsContainer}>
				<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
					{/* analytics */}
					<TouchableOpacity style={[styles.cardContainer, {marginLeft: 30}]}>
						<View style={[styles.cardIconContainer, {backgroundColor: "#A6EAFF"}]}>
							<SMIcons name="ic_analytics" size={23} color="#FFFFFF" width={23} height={19} />
						</View>
						<GilroyText styleText={styles.cardTitleText} type="Medium" size="g4" children="Аналитика" />

						<View style={styles.cardContentContainer}>
							<GilroyText styleText={styles.simpleCardText} type="Medium" size="g5" children="за ноябрь" />
							<GilroyText styleText={[styles.receiptsText, {color: "#FF5B5B"}]} type="Medium" size="g10" children="8642 р" />
						</View>
					</TouchableOpacity>

					{/* notifications */}
					<TouchableOpacity style={styles.cardContainer}>
						<View style={[styles.cardIconContainer, {backgroundColor: "#FAFFBA"}]}>
							<SMIcons name="ic_announcements" size={23} color="#FFFFFF" width={23} height={19} />
						</View>
						<GilroyText styleText={styles.cardTitleText} type="Medium" size="g4" children="Объявления" />

						<View style={styles.cardContentContainer}>
							<View style={styles.oneLineTextContainer}>
								<GilroyText styleText={styles.simpleCardText} type="Medium" size="g5" children="у вас " />
								<GilroyText styleText={[styles.simpleCardText, {color: '#000000'}]} type="Semibold" size="g5" children="3" />
								<GilroyText styleText={styles.simpleCardText} type="Medium" size="g5" children=" новых" />
							</View>
							<GilroyText styleText={styles.simpleCardText} type="Medium" size="g5" children="объявления" />
						</View>
					</TouchableOpacity>

					{/* receipts */}
					<TouchableOpacity style={styles.cardContainer}>
						<View style={[styles.cardIconContainer, {backgroundColor: "#F7C7FF"}]}>
							<SMIcons name="ic_receipts" size={23} color="#FFFFFF" width={16} height={22} />
						</View>
						<GilroyText styleText={styles.cardTitleText} type="Medium" size="g4" children="Квитанции" />
						<View style={styles.cardContentContainer}>
							<GilroyText styleText={[styles.receiptsText, {color: "#747474"}]} type="Medium" size="g6" children="У вас нет неоплаченных квитанций" />
						</View>
					</TouchableOpacity>

				</ScrollView>
			</View>
						
		</View>
	);
};
