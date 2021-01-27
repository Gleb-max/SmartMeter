import React from 'react';
import { View, TouchableOpacity, ViewStyle, StyleProp } from 'react-native';

//components
import { SMIcons } from 'library/components/atoms';

//styles
import styles from './FloatingAddButton.styles';

//types
type FloatingAddButtonProps = {
    onPress: () => void;
	containerStyle?: StyleProp<ViewStyle>;
	opacityStyle?: StyleProp<ViewStyle>;
	viewStyle?: StyleProp<ViewStyle>;
};

export const FloatingAddButton: React.FC<FloatingAddButtonProps> = ({
	onPress,
	containerStyle,
	opacityStyle,
	viewStyle,
}) => {
	return (
		<View style={[styles.container, containerStyle]}>

			<TouchableOpacity
				style={[styles.opacity, opacityStyle]}
				onPress={onPress}
			>
				<View style={[styles.view, viewStyle]}>

					<SMIcons
						name='ic_plus'
						width={28}
						height={28}
						size={28}
						color='#FDFDFD' />

				</View>

			</TouchableOpacity>
		</View>
	);
};
