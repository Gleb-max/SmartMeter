import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

//other deps
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

//styles
import styles from './MapCard.styles';

//types
type MapCardProps = {
	maplatitude: number;
	maplongitude: number;
	markerlatitude: number;
	markerlongitude: number;
	style?: StyleProp<ViewStyle>;
};

export const MapCard: React.FC<MapCardProps> = ({
	maplatitude = 56.833332,
	maplongitude = 60.583332,
	markerlatitude = 56.833332,
	markerlongitude = 60.583332,
	style,
}) => {
	return (
		<MapView
			provider={PROVIDER_GOOGLE}
			style={[styles.map, style]}
			region={{
				latitude: maplatitude,
				longitude: maplongitude,
				latitudeDelta: 0.015,
				longitudeDelta: 0.015,
			}}
		>
			<Marker
				coordinate={{
					latitude: markerlatitude,
					longitude: markerlongitude,
				}}
				title={'Marker'} />
		</MapView>
	);
};
