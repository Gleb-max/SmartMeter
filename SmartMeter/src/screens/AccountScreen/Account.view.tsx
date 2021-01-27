import React from 'react';
import { View, ScrollView } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import { AccountCard, CustomTextInput } from 'library/components/molecules';

//styles
import styles from './Account.styles';

//types
type AccountViewProps = {
	userData: {
		address: string;
		phone: string;
	  };
};

export const AccountView: React.FC<AccountViewProps> = ({
	userData,
}) => {
	//state
	const [pressedAddress, setPressedAddress] = React.useState(false);
	const [pressedPhone, setPressedPhone] = React.useState(false);

	const [_address, _setAddress] = React.useState(userData.address);
	const [_phone, _setPhone] = React.useState(userData.phone);

	//callbacks
	const onChangeAddress = React.useCallback(() => {
		setPressedAddress(!pressedAddress);
	}, [pressedAddress]);

	const onChangePhone = React.useCallback(() =>{
		setPressedPhone(!pressedPhone);
	}, [pressedPhone]);

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={styles.content}
		>
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
				text={_address}
				iconName='ic_address' />

			{(pressedAddress) && (
				<CustomTextInput
					value={_address}
					placeholder='Адрес'
					onChange={(text: string) => _setAddress(text)}
					style={{ height: 90 }} />
			)}

			<AccountCard
				style={styles.card}
				header='Телефон'
				text={_phone}
				iconName= 'ic_phone'
				onPress={onChangePhone} />

			{(pressedPhone) && (
				<CustomTextInput
					value={_phone}
					placeholder='Телефон'
					onChange={(text: string) => _setPhone(text)}
					style={{}} />
			)}
		</ScrollView>

	);
};
