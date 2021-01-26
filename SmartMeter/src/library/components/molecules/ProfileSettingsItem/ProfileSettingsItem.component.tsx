import React from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

//components
import { GilroyText, SMIcons } from 'library/components/atoms';
import { Icons } from 'library/types';

//styles
import styles from './ProfileSettingsItem.styles';

type ProfileSettingsItemProps = {
	header: string;
	iconName: Icons.SMIconsName;
	iconColor: string;
	containerStyle?: StyleProp<ViewStyle>;
	onPress: () => void;
}

export const ProfileSettingsItem: React.FC<ProfileSettingsItemProps> = ({
	header,
	iconName,
	iconColor,
	containerStyle,
	onPress,
}) => {
	return (
		<View style={[styles.container, containerStyle]}>
			<TouchableOpacity
				style={styles.touchable}
				onPress={onPress}
			>

				<GilroyText
					size='g10'
					type='Medium'
					styleText={styles.header}
				>
					{header}
				</GilroyText>

				<SMIcons
					name={iconName}
					size={20}
					color={iconColor}
					style={styles.cardIcon} />

				<SMIcons
					name='ic_arrow_right'
					size={20}
					color={'#000000'}
					style={styles.rightIcon} />
			</TouchableOpacity>
		</View>
	);
};
