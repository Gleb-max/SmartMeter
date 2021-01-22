import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		height: 60,
		backgroundColor: '#FFFFFF',
		borderRadius: 8,
		paddingLeft: 11,
		justifyContent: 'center',
	},
	header: {
		color: '#000000',
		fontStyle: 'normal',
		lineHeight: 21,
		fontWeight: '500',
	},
	touchable: {
		flexDirection: 'row',
	},
	rightIcon: {
		marginLeft: 'auto',
		marginRight: 10,
	},
	cardIcon: {
		marginLeft: 10,
	},
});

export default styles;
