import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';

//components
import { GilroyText, RobotoText } from 'library/components/atoms';

//styles
import styles, {
	COLD_COLOR,
	HOT_COLOR,
} from './VolumeIndicator.styles';

//types
type VolumeIndicatorProps = {
	volume: string;
	date: string;
	hot: boolean;
	style?: StyleProp<ViewStyle>;
};

export const VolumeIndicator: React.FC<VolumeIndicatorProps> = ({
	volume,
	date,
	hot,
	style,
}) => {
	return (
		<View style={[styles.container,
			{ backgroundColor: (hot) ? HOT_COLOR : COLD_COLOR }, style]}
		>
			<View style = {styles.ellipse}>
				<GilroyText
					text={`${volume} m³`}
					type = 'Semibold'
					size = {31} />

				<RobotoText
					text = {`на ${date}`}
					type = 'Regular'
					size = {12.5}
					style = {styles.dateText} />
			</View>
		</View>
	);
};

