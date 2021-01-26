import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';

//components
import { GilroyText, SMIcons } from 'library/components/atoms';

//styles
import styles from './AccountCard.styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

//types
type AccountCardProps = {
	header: string;
	text: string;
	onPress: () => void;
	iconName: string;
	style?: StyleProp<ViewStyle>;
};

export const AccountCard: React.FC<AccountCardProps> = ({
	header,
	text,
	onPress,
	iconName,
	style,
}) => {
	return (
		<View style = {[styles.container, style]}>
			<View style = {styles.headerWithIcon}>
				<GilroyText
					size = 'g2'
					type = 'Medium'
					style = {styles.header}
				>
					{header}
				</GilroyText>

				<SMIcons
					name = {iconName}
					color = '#747474'
					size = {18}
					style = {styles.icon} />
			</View>

			<View style = {styles.rowContainer}>
				<GilroyText
					size='g2'
					type='Medium'
					style={styles.text}
				>
					{text}
				</GilroyText>

				<TouchableOpacity onPress = {onPress}>
					<GilroyText
						size = 'g3'
						type = 'Medium'
						style = {styles.change}
					>
						Изменить
					</GilroyText>
				</TouchableOpacity>
			</View>
		</View>
	);
};
