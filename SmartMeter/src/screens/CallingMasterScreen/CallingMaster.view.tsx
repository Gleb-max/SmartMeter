import React from 'react';
import { View } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import { NextButton } from 'library/components/molecules';
//styles
import styles from './CallingMaster.styles';

//types
type CallingMasterViewProps = {

};

export const CallingMasterView: React.FC<CallingMasterViewProps> = ({

}) => {
	return (
		<View style={styles.container}>
			<GilroyText size='g1' type = 'Semibold'>
				Вызов мастера
			</GilroyText>

			<NextButton >
				
			</NextButton>
		</View>
	);
};
