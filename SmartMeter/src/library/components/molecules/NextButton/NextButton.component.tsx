import React from 'react';
import { TouchableOpacity, Text, View, ViewStyle, StyleProp, TextStyle } from 'react-native';

//styles
import styles from './NextButton.styles';

//components
import { SMIcons, HeadlineText } from 'library/components/atoms';

//types
type NextButtonProps = {
	onPress: () => void;
	isPaid?: boolean;
	text: string;
	style?: StyleProp<ViewStyle>;
	styleText?: StyleProp<TextStyle>;
	withMarker?: boolean;
	contact?: boolean;
	number?: string;
}

export const NextButton: React.FC<NextButtonProps> = ({
	isPaid,
	text,
	onPress,
	style,
	styleText,
	withMarker = true,
	contact,
	number,
}) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={(withMarker)
				? [styles.container, style]
				: [styles.containerWithoutMarker, style]
			}
		>
			<View
				style={(withMarker)
					? (isPaid)
						? styles.blueMarker
						: styles.redMarker
					: null
				} />

			<HeadlineText
				type='Medium'
				style={(withMarker)
					? [styles.header, styleText]
					: [styles.withoutMarkerText, styleText]
				}

				size='h3'
			>
				{text}
			</HeadlineText>

			<Text style={styles.text}>
				{(withMarker)
					? (isPaid)
						? (contact) ? number : 'Оплачено'
						: 'Неоплачено'
					: null
				}
			</Text>

			<SMIcons
				name = 'ic_arrow_right'
				size = {17}
				color = {'#747474'}
				style = {(withMarker)
					? styles.icon
					: styles.iconWithoutMarker
				} />
		</TouchableOpacity>
	);
};
