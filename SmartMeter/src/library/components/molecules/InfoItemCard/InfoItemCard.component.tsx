import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

//styles
import styles from './InfoItemCard.styles';

type InfoItemCardProps = {
	date: string;
	content: string;
	type: 'announcement' | 'notification' | 'news';
}

export const InfoItemCard: React.FC<InfoItemCardProps> = ({
	date,
	content,
	type,
}) => {
	//for mark
	const markWidth = () => {
		if (type == 'announcement') return 11
		else if (type == 'notification') return 10
		else return 11
	};
	const markHeight = () => {
		if (type == 'announcement') return 44
		else if (type == 'notification') return 49
		else return 30
	};

	//for text
	const leftPaddingContent = () => {
		if (type == 'announcement') return 16
		else if (type == 'notification') return 9
		else return 16
	}
	const fontSizeContent = () => {
		if (type == 'announcement') return 14
		else if (type == 'notification') return 16
		else return 14
	}

	const customStyles = StyleSheet.create({
		mark: {
			width: markWidth(),
			height: markHeight(),
		},
		contentContainer: {
			minHeight: markHeight(),
		},
		contentText: {
			paddingLeft: leftPaddingContent(),
			fontSize: fontSizeContent(),
		},
	})
	return (
		<View style={styles.container}>
            <Text style={styles.date}>{date}</Text>
            <View style={[styles.contentContainer, (type == 'notification') && {borderRadius: 8}, customStyles.contentContainer]}>
                <View style={[styles.mark, customStyles.mark, (type == 'notification') && {borderBottomLeftRadius: 8, borderTopLeftRadius: 8}]}/>
                <Text style={[styles.contentText, customStyles.contentText]}>{content}</Text>
            </View>
        </View>
	);
};
