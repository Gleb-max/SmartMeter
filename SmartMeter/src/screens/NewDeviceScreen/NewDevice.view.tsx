import React from 'react';

//other deps
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

//components
import { Button, GilroyText } from 'library/components/atoms';
import { CustomTextInput, CustomDropDown } from 'library/components/molecules';

//styles
import styles from './NewDevice.styles';

//types
type NewDeviceViewProps = {
	id: string;
	onChangeId: (newId: string) => void;
	place: string;
	onChangePlace: (newPlace: string) => void;
	dayTariff: string;
	onChangeDayTariff: (newDayTariff: string) => void;
	nightTariff: string;
	onChangeNightTariff: (newNightTariff: string) => void;
	tariff: string;
	onChangeTariff: (newTariff: string) => void;
	onAddDevice: () => void;
};

export const NewDeviceView: React.FC<NewDeviceViewProps> = ({
	id,
	onChangeId,
	place,
	onChangePlace,
	tariff,
	onChangeTariff,
	dayTariff,
	onChangeDayTariff,
	nightTariff,
	onChangeNightTariff,
	onAddDevice,
}) => {
	//state
	const [selectedType, setSelectedType] = React.useState('');

	return (
		<KeyboardAwareScrollView
			pagingEnabled
			style={styles.container}
			contentContainerStyle={styles.contentContainer}
		>
			<GilroyText
				size='g1'
				type='Semibold'
			>
				Новое устройство
			</GilroyText>

			<CustomTextInput
				placeholder='ID устройства'
				value={id}
				onChange={() => onChangeId}
				style={styles.input} />

			<CustomTextInput
				placeholder='Место нахождения устройства'
				value={place}
				onChange={() => onChangePlace}
				style={styles.input} />

			<CustomDropDown
				data={['Тип счетчика', 'Водный счетчик', 'Электрический счетчик', 'Газовый счетчик']}
				containerStyle={styles.dropDown}
				onChange={setSelectedType} />

			{(selectedType === 'Водный счетчик') ? (
				<>
					<CustomTextInput
						placeholder='Тариф потребления (дневной)'
						value={dayTariff}
						keyboardType='decimal-pad'
						onChange={() => onChangeDayTariff}
						style={styles.tariff} />

					<CustomTextInput
						placeholder='Тариф потребления (ночной)'
						value={nightTariff}
						keyboardType='decimal-pad'
						onChange={() => onChangeNightTariff}
						style={styles.input} />
				</>
			) : (
				<CustomTextInput
					placeholder='Тариф потребления'
					value={tariff}
					onChange={()=>onChangeTariff}
					style={styles.tariff} />
			)}

			<Button
				header='Добавить'
				onPress={onAddDevice}
				style={styles.button} />
		</KeyboardAwareScrollView>
	);
};
