import React from 'react';
import { View } from 'react-native';

//components
import { GilroyText, Button } from 'library/components/atoms';
import { CustomTextInput } from 'library/components/molecules';

//styles
import styles from './NewNumber.styles';

//types
type NewNumberViewProps = {
	onButton: () => void;
};

export const NewNumberView: React.FC<NewNumberViewProps> = ({
	onButton,
}) => {
	return (
		<View style = {styles.container}>
			<GilroyText
				size='g1'
				type='Semibold'
			>
				Новый номер
			</GilroyText>

			<CustomTextInput
				value=''
				placeholder='Имя'
				style={styles.input} />

			<CustomTextInput
				value=''
				placeholder='Номер'
				style={styles.input} />

			<Button
				style = {styles.btn}
				header='Добавить'
				onPress={onButton} />
		</View>
	);
};
