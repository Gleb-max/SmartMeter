import React from 'react';
import { ScrollView, View } from 'react-native';

//components
import { GilroyText, HeadlineText } from 'library/components/atoms';
import { InfoTitle, MapCard, ProfileHead } from 'library/components/molecules';

//styles
import styles from './Information.styles';

//types
type InformationViewProps = {
	userData: {
		name: string;
		surname: string;
        photo: string;
        address: string;
	};
	onNotifications: () => void;
	onProfile: () => void;
	maplat?: number;
	maplon?: number;
	markerlat?: number;
	markerlon?: number;
	address: string;
	workingHours: {
		date: string;
		time: string;
	}[];
	phone: string;
};

export const InformationView: React.FC<InformationViewProps> = ({
	userData,
	maplat = 56.8409871,
	maplon = 60.6280386,
	markerlat = 56.8409871,
	markerlon = 60.6280386,
	address,
	workingHours,
	phone,
	onNotifications,
	onProfile,
}) => {
	//renders
	const _renderItem = React.useCallback(()=>{
		return workingHours.map((item, index)=>{
			return (
				<View key = {index} style = {styles.timeContainer}>
					<GilroyText
						type = 'Medium'
						size = 'g3'
						style={styles.date}
					>
						{item.date}
					</GilroyText>

					<GilroyText
						type='Medium'
						size='g3'
					>
						{item.time}
					</GilroyText>
				</View>
			);
		});
	}, [workingHours]);

	return (
		<ScrollView
			style = {styles.container}
			showsVerticalScrollIndicator = {false}
			contentContainerStyle = {styles.contentContainer}
		>

			<ProfileHead
				userData={userData}
				onNotifications={onNotifications}
				onProfile={onProfile} />

			<GilroyText
				style = {styles.header}
				type = 'Semibold'
				size = 'g1'
			>
				Информация
			</GilroyText>

			<InfoTitle
				text='Адрес:'
				style={styles.addressTitle} />

			<HeadlineText
				type='Medium'
				size='h2'
				style = {styles.address}
			>
				{address}
			</HeadlineText>

			<MapCard
				maplatitude={maplat || 0}
				maplongitude={maplon || 0}
				markerlatitude={markerlat || 0}
				markerlongitude={markerlon || 0}
				style={styles.mapContainer} />

			<InfoTitle
				text='Часы работы:'
				style={styles.timeTitle} />

			{_renderItem()}

			<InfoTitle
				text='Телефон:'
				style={styles.timeTitle} />

			<HeadlineText
				type='Medium'
				size='h2'
				style = {styles.address}
			>
				{phone}
			</HeadlineText>
		</ScrollView>
	);
};
