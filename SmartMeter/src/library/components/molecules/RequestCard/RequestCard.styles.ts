import { Helpers } from 'library/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 57,
		backgroundColor: '#FFFFFF',
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 1),
		borderRadius: 8,

	},
	header: {
		marginTop: 11,
		marginLeft: 15,
	},
	text: {
		color: '#747474',
	},
	textContainer: {
		marginLeft: 15,
		marginTop: -2,
	},
	takeCode: {
		marginLeft: 214,
		position: 'absolute',
		marginTop: 20,
		flexDirection: 'row',
	},
	takeCodeText: {
		color: '#005670',
	},
	arrow: {
		position: 'absolute',
		marginLeft: 301,
		marginTop: 23,
	},
});

export default styles;
