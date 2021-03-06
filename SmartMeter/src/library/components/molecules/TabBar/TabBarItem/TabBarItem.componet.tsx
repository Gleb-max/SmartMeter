import React from 'react';
import { Pressable, StyleProp, ViewStyle, View } from 'react-native';

//styles
import styles from './TabBarItem.styles';

//components
import { SMIcons } from 'library/components/atoms';

//types
import { TabData } from '../TabBar.interface';
import { Icons } from 'library/types';

type TabBarItemProps = {
	style?: StyleProp<ViewStyle>;
} & TabData;

export const TabBarItem: React.FC<TabBarItemProps> = ({
	isFocused,
	iconName,
	onPress,
	style,
}) => {
	const _iconName = (isFocused) ? iconName : (iconName + '_active') as Icons.TabBarIconName;
	const contentColor = (isFocused) ? '#005670' : '#000000';

	return (
		<Pressable
			onPress={onPress}
			android_ripple={{
				color: '#DCDCDC',
			}}
			style = {styles.button}
		>
			<SMIcons
				size={isFocused ? 24.55 : 21}
				// size={24}
				// width={isFocused ? 24.55 : 18.41}
				// height={isFocused ? 22.54 : 16.91}
				color={contentColor}
				// style={[style, {}]}
				style={[style, !isFocused && styles.unfocusedIcon]}
				name={_iconName} />
		</Pressable>
	);
};
