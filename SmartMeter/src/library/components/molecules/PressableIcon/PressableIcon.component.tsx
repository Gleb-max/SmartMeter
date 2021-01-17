import React from 'react';
import { TouchableOpacity, View, ViewStyle, StyleProp } from 'react-native';

//components
import { SMIcons } from 'library/components/atoms';

//styles
import styles from './PressableIcon.styles';

//types
import { Icons } from 'library/types';

type PressableIconProps = {
	iconName: Icons.CommonIconName;
	onPress: () => void;
	color?: string;
	size?: number;
	withNotif?: boolean;
	style?: StyleProp<ViewStyle>
	width?: number,
	height?: number,
}

export const PressableIcon: React.FC<PressableIconProps> = ({
	color,
	size,
	iconName,
	onPress,
	withNotif,
	style,
}) => {
	return (
		<TouchableOpacity onPress={onPress} style = {style}>
			<SMIcons
				name={iconName}
				size={size}
				color={color} />

			{withNotif && (
				<View style={styles.indicator} />
			)}
		</TouchableOpacity>
	);
};
