import React from 'react';
import { View, Image, TouchableOpacity, ViewStyle, StyleProp } from 'react-native';

//components
import { GilroyText, RobotoText } from 'library/components/atoms';
import { PressableIcon } from 'library/components/molecules';

//styles
import styles from './Header.styles';

//types
type HeaderProps = {
	profilePhoto: string;
	onPressNotify: () => void;
	name: string;
	address: string;
	style?: StyleProp<ViewStyle>;
};

export const Header: React.FC<HeaderProps> = ({
	profilePhoto,
	onPressNotify,
	name,
	address,
	style,
}) => {
	return (
		<View style = {[styles.container, style]}>
			<PressableIcon
				iconName='ic_notification'
				onPress={() => onPressNotify}
				size={26}
				color='black'
				withNotif={false}
				style={styles.icon} />

			<View style = {styles.text}>
				<GilroyText
					size='g4'
					type='Semibold'
				>
					{name}
				</GilroyText>

				<RobotoText
					size='r5'
					type='Regular'
					style={styles.address}
					styleText={{ color: '#747474' }}
				>
					{address}
				</RobotoText>
			</View>

			<TouchableOpacity style={styles.profilePhoto}>
				<Image
					source={{
						uri: profilePhoto,
					}}
					style={styles.photo} />
			</TouchableOpacity>
		</View>
	);
};
