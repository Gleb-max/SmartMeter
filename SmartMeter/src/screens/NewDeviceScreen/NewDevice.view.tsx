import React from 'react';
import { View } from 'react-native';

//components
import { Button, GilroyText } from 'library/components/atoms';
import { CustomTextInput } from 'library/components/molecules';

//styles
import styles from './NewDevice.styles';

//types
type NewDeviceViewProps = {
	onPress: () => void;
};

export const NewDeviceView: React.FC<NewDeviceViewProps> = ({
	onPress,
}) => {
	return (
		<View style = {styles.container}>
			<GilroyText size = 'g1' type = 'Semibold' style = {styles.header}>
				Новое устройство
			</GilroyText>

			<CustomTextInput
				placeholder = 'ID устройства'
				onChange ={()=> console.log('changed')}
				style={styles.input} />

			<CustomTextInput
				placeholder='Место нахождения'
				onChange={() => console.log('changed')}
				style={styles.input} />

			<Button header = 'Добавить' onPress = {onPress} style = {styles.button} />
		</View>
	);
};
