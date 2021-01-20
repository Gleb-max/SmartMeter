import React from 'react';
import { View } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import { PressableIcon, ScenarioItemButton } from 'library/components/molecules';

//styles
import styles from './Scenarios.styles';

//types
type ScenariosViewProps = {

};

export const ScenariosView: React.FC<ScenariosViewProps> = ({

}) => {
	return (
		<View style = {styles.container}>
			<PressableIcon
				iconName='ic_notification'
				size={29}
				color='black'
				withNotif={false} />

			<GilroyText
				text = 'Сценарии'
				size = {31}
				type = 'Semibold'
				style = {{ marginTop: 47 }} />

			<ScenarioItemButton
				number = {1}
				text= 'Стандартный'
				style={styles.buttonFirst} />

			<ScenarioItemButton
				number={2}
				text='Пользовательский'
				style={styles.button} />

			<ScenarioItemButton
				number={3}
				text='“Никого нет”'
				style={styles.button} />
		</View>
	);
};
