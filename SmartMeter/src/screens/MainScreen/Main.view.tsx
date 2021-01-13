import React from 'react';
import { View } from 'react-native';

//other deps

//components
import { PressableIcon, VolumeIndicator, CustomDropDown, ScenarioItemButton } from 'library/components/molecules';

//styles
import styles from './Main.styles';

//types
type MainViewProps = {

};

export const MainView: React.FC<MainViewProps> = ({

}) => {
	return (
		<View style = {styles.container}>
			<PressableIcon
				iconName = 'ic_notification'
				size = {29}
				color = 'black'
				withNotif = {true} />

			<VolumeIndicator
				date = '24.05.2021 20:37'
				volume = '1021'
				hot = {false}
				style = {styles.indicator} />

			<CustomDropDown
				data = {['Кухня', 'Спальня', 'Гостинная']}
				onChange={(el) => console.log(el)}
				style={styles.dropdown}
				listStyle={styles.list} />

			<View style = {styles.buttons}>
				<ScenarioItemButton
					style={styles.button}
					styleNumberCon={styles.numberCon}
					styleNum={styles.number}
					styleText={styles.text}
					withArrow={true}
					number={1}
					text='Квитанции' />

				<ScenarioItemButton
					style={styles.button}
					styleNumberCon={styles.numberCon}
					styleNum = {styles.number}
					styleText={styles.text}
					withArrow={true}
					number={2}
					text='Объявления' />

				<ScenarioItemButton
					style={styles.button}
					styleNumberCon={styles.numberCon}
					styleNum={styles.number}
					styleText={styles.text}
					withArrow = {true}
					number={3}
					text='Сценарии' />
			</View>
		</View>
	);
};
