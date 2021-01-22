import React from 'react';
import { View } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import { NextButton } from 'library/components/molecules';
//styles
import styles from './CallingMaster.styles';

//types
type CallingMasterViewProps = {
	onPressReg: () => void;
	onPressHistory:() => void;
};

export const CallingMasterView: React.FC<CallingMasterViewProps> = ({
	onPressHistory,
	onPressReg,
}) => {
	return (
		<View style={styles.container}>

			<GilroyText size='g1' type = 'Semibold' style = {styles.header}>
				Вызов мастера
			</GilroyText>

			<NextButton
				onPress={onPressReg}
				text = 'Оформить заявку'
				withMarker={false}
				style={styles.button} />

			<NextButton
				onPress={onPressHistory}
				text='История'
				withMarker={false}
				style={styles.button} />
		</View>
	);
};
