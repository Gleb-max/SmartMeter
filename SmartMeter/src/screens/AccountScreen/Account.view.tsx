import React from 'react';
import { View } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import { AccountCard, CustomTextInput } from 'library/components/molecules';

//styles
import styles from './Account.styles';

//types
type AccountViewProps = {

};

export const AccountView: React.FC<AccountViewProps> = ({

}) => {
	//states
	const [pressedAddress, setPressedAddress] = React.useState(false);
	const [pressedPhone, setPressedPhone] = React.useState(false);
	//callbacks
	const onChangeAddress = React.useCallback(() => {
		setPressedAddress(!pressedAddress);
	}, [pressedAddress]);

	const onChangePhone = React.useCallback(() =>{
		setPressedPhone(!pressedPhone);
	}, [pressedPhone]);
	return (
		<View style = {styles.container}>
			<GilroyText
				size = 'g1'
				type = 'Semibold'
				style = {styles.header}
			>
				Аккаунт
			</GilroyText>

			<AccountCard
				style={styles.card}
				onPress={onChangeAddress}
				header='Адрес'
				text='Ленина 56'
				iconName='ic_home' />

			{(pressedAddress) && (
				<CustomTextInput
					value=''
					placeholder='Введите новый адрес'
					onChange={() => {}}
					style={{ height: 90 }} />
			)}

			<AccountCard
				style={styles.card}
				header='Телефон'
				text='+79122345678'
				iconName= 'ic_master_call'
				onPress={onChangePhone} />

			{(pressedPhone) && (
				<CustomTextInput
					value=''
					placeholder='Введите новый номер'
					onChange={() => { }}
					style={{}} />
			)}
		</View>

	);
};
