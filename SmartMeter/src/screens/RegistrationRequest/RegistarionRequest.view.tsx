import React from 'react';
import { View, ScrollView } from 'react-native';

//components
import { GilroyText, Button } from 'library/components/atoms';
import { CustomDropDown, CustomTextInput } from 'library/components/molecules';

//styles
import styles from './RegistarionRequest.styles';

//types
type RegistarionRequestViewProps = {
	onPressRegister: () => void;
};

export const RegistarionRequestView: React.FC<RegistarionRequestViewProps> = ({
	onPressRegister,
}) => {
	//state
	const [selectedReason, setSelectedReason] = React.useState('');
	const [selectedMaster, setSelectedMaster] = React.useState('');

	//handlers
	const createRequest = () => {
		//creating...
		onPressRegister();
	};

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.contentContainer}
		>
			<GilroyText
				size = 'g1'
				type = 'Semibold'
			>
				Вызов мастера
			</GilroyText>

			<View style={styles.box} />

			<CustomDropDown
				data = {[
					'Укажите проблему',
					'Течет кран',
					'Отключено отопление',
					'Нет электричества',
					'Другое',
				]}
				style={{ elevation: 10 }}
				listStyle={{ elevation: 10 }}
				containerStyle={
					[styles.dropdown, {
						marginBottom: (selectedReason === 'Другое') ? 0 : 20,
					}]
				}
				onChange={setSelectedReason} />

			{(selectedReason === 'Другое') && (
				<CustomTextInput
					placeholder='Другое:'
					value=''
					onChange={() => {}}
					style={styles.input} />
			)}

			<CustomDropDown
				data={[
					'Специалист',
					'Сантехник',
					'Электрик',
					'Full-stack',
					'Другое',
				]}
				style={{ elevation: 9 }}
				listStyle={{ elevation: 9 }}
				containerStyle={
					[styles.dropdown,
						{ marginBottom: (selectedMaster === 'Другое') ? 0 : 20 }]
				}
				onChange={setSelectedMaster} />

			{(selectedMaster === 'Другое') && (
				<CustomTextInput
					placeholder='Другое:'
					style={styles.input} />
			)}

			<CustomDropDown
				data={[
					'Во сколько вам удобно?',
					'9:00 - 10:00',
					'10:00 - 11:00',
					'11:00 - 12:00',
					'12:00 - 13:00',
					'13:00 - 14:00',
					'14:00 - 15:00',
					'15:00 - 16:00',
				]}
				style={{ elevation: 8 }}
				listStyle={{ elevation: 8 }}
				containerStyle={styles.dropdown}
				onChange={() => { }} />

			<Button
				header ='Отправить заявку'
				onPress = {createRequest}
				style = {styles.button} />
		</ScrollView>
	);
};
