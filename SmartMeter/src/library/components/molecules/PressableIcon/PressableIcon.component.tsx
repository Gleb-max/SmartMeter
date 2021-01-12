import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

//components
import {SMIcons} from 'library/components/atoms'

//styles
import styles from './PressableIcon.styles';

//types
import {Icons} from 'library/types';

type PressableIconProps = {
	iconName: Icons.CommonIconName;
	color?: string;
	size?: number;
	onPress?: () => void;
	withNotif?: boolean;
}

export const PressableIcon: React.FC<PressableIconProps> = ({
	color,
	size,
	iconName,
	onPress,
	withNotif,
}) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onPress}>
				<SMIcons 
					name={iconName} 
					size={size} 
					color={color} />
				{withNotif && <View style={styles.count} />}
			</TouchableOpacity>
		</View>
	);
};
