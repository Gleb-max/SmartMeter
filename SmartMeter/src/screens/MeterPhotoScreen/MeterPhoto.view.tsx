import React from 'react';
import { View, Image } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';
import { ProfileHead } from 'library/components/molecules';

//styles
import styles from './MeterPhoto.styles';

//types
import { MeterSettings } from 'screens/MeterSettingsScreen/MeterSettings.view';

type MeterPhotoViewProps = {
    userData: {
        name: string;
        surname: string;
        address: string;
		photo: string;
    };
    onNotifications: () => void;
	onProfile: () => void;
	meter: MeterSettings;
};

export const MeterPhotoView: React.FC<MeterPhotoViewProps> = ({
	userData,
	meter,
	onNotifications,
	onProfile,
}) => {
	return (
		<View style = {styles.container}>

			<ProfileHead
				userData={userData}
				onNotifications={onNotifications}
				onProfile={onProfile} />

			<GilroyText
				type='Semibold'
				size='g1'
				styleText={styles.header}
			>
				Фото счетчика
			</GilroyText>

			<Image
				style={styles.photo}
				source={{ uri: meter.photo }} />
		</View>
	);
};
