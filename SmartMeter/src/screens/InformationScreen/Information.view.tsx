import React from 'react';
import { View } from 'react-native';

//components
import { GilroyText, HeadlineText } from 'library/components/atoms';
import { PressableIcon, InfoTitle, MapCard } from 'library/components/molecules';
//styles
import styles from './Information.styles';

//types
type InformationViewProps = {
	maplat?: number;
	maplon?: number;
	markerlat?: number;
	markerlon?: number;
	address: string;
	workingHours: {
		date: string;
		time: string;
	}[];
};

export const InformationView: React.FC<InformationViewProps> = ({
	maplat,
	maplon,
	markerlat,
	markerlon,
	address,
	workingHours,
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
		<View style = {styles.container} >
			<PressableIcon
				iconName='ic_notification'
				size={29}
				color='black'
				withNotif={true}
				onPress={() => {}} />

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

		</View>
	);
};
