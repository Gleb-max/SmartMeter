import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

//components
import { GilroyText } from 'library/components/atoms';

//styles
import styles from './InfoTitle.styles';

//types
type InfoTitleProps = {
	text: string;
	style: StyleProp<ViewStyle>;
};

export const InfoTitle: React.FC<InfoTitleProps> = ({
	text,
	style,
}) => {
	return (
		<View style={[styles.container, style]}>
			<View style={styles.marker} />

			<GilroyText
				size = 'g2'
				type = 'Semibold'
				style = {styles.text}
			>
				{text}
			</GilroyText>
		</View>
	);
};
