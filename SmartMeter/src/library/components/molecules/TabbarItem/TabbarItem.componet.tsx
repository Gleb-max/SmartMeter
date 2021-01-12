import React from 'react';
import { Pressable } from 'react-native';

//styles
import styles from './TabbarItem.styles';

//types
import { Icons } from 'library/types';

//components
import { SMIcons } from 'library/components/atoms';

type TabbarItemProps = {
	onPress: () => void;
	iconName: Icons.CommonIconName;
	rippleColor?: string;
	size: number;
}

export const TabbarItem: React.FC<TabbarItemProps> = ({
	onPress,
	iconName,
	rippleColor = '#DCDCDC',
	size,
}) => {
	return (
		<Pressable
			onPress={onPress}
			android_ripple={{
				color: rippleColor,
			}}
			style = {styles.button}
		>
			<SMIcons
				size={size}
				color='#000000'
				name={iconName} />
		</Pressable>
	);
};
