import React from 'react';
import { View, Image } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import {
	ProfileSettingsItem,
} from 'library/components/molecules';

//styles
import styles from './Profile.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

//types
type ProfileViewProps = {
	userData: {
		name: string;
		surname: string;
		photo: string;
	};
	onNotifications: () => void;
	onProfile: () => void;
};

export const ProfileView: React.FC<ProfileViewProps> = ({
	userData,
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.profileInfoContainer}>
				<TouchableOpacity>
					<Image
						source={{ uri: userData.photo }}
						style={styles.photo} />
				</TouchableOpacity>

				<GilroyText
					size='g3'
					styleText={styles.nameText}
					type='Semibold'
				>
					{userData.name}
					{' '}
					{userData.surname}
				</GilroyText>
			</View>

			<ProfileSettingsItem
				iconName='ic_key'
				iconColor='#1D4350'
				header='Аккаунт'
				containerStyle={styles.settingsItem} />

			<ProfileSettingsItem
				iconName='ic_fire'
				iconColor='#FF512F'
				header='Экстренные контакты'
				containerStyle={styles.settingsItem} />

			<ProfileSettingsItem 
				iconName="ic_send_message"
				iconColor="#5C258D"
				header="Поддержка" 
				containerStyle={styles.settingsItem} 
			/>

			<ProfileSettingsItem
				iconName='ic_master_call'
				iconColor='#ACBB78'
				header='Вызов мастера'
				containerStyle={styles.settingsItem} />
		</View>
	);
};
