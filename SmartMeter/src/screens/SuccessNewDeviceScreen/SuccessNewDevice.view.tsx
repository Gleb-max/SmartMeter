import React from 'react';
import { View } from 'react-native';

//components
import { GilroyText, Button } from 'library/components/atoms';

//styles
import styles from './SuccessNewDevice.styles';

//types
type SuccessNewDeviceViewProps = {
	onPressButton: ()=>void;
};

export const SuccessNewDeviceView: React.FC<SuccessNewDeviceViewProps> = ({
	onPressButton,
}) => {
	return (
		<View style={styles.container} >
			<GilroyText
				size = 'g2'
				type = 'Semibold'
				styleText = {styles.text}
			>
				Вы успешно добавили новое устройство!
			</GilroyText>

			<Button
				header = 'Вернутся в главное меню'
				style = {styles.button}
				onPress = {onPressButton} />
		</View>
	);
};
