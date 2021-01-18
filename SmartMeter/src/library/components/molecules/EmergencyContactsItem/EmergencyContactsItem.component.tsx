import React from 'react';
import { TouchableOpacity, View, Text, StyleProp, ViewStyle } from 'react-native';

//styles
import styles from './EmergencyContactsItem.styles';

//components
import { SMIcons } from 'library/components/atoms';

type EmergencyContactsItemProps = {
    name: string;
    phone: string;
    style?: StyleProp<ViewStyle>;
};

export const EmergencyContactsItem: React.FC<EmergencyContactsItemProps> = ({
	name,
	phone,
	style,
}) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.mark} />

			<View style={styles.contactInfoContainer}>
				<Text style={styles.name}>
					{name}
				</Text>

				<Text style={styles.phone}>
					{phone}
				</Text>
			</View>

			<TouchableOpacity style={styles.arrowContainer}>
				<SMIcons
					name='ic_arrow_right'
					size={24}
					color='#747474' />
			</TouchableOpacity>
		</View>
	);
};
