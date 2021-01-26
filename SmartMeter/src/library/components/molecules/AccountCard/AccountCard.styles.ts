import { Helpers } from 'library/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		height: 108,
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 18,
		paddingVertical: 20,
		borderRadius: 10,
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 0.7),
	},
	header: {
		color: '#747474',
	},
	headerWithIcon: {
		flexDirection: 'row',
	},
	text: {
		color: '#000000',
	},
	change: {
		color: '#747474',
		textDecorationLine: 'underline',
		marginTop: 2,
	},
	icon: {
		marginTop: 7,
		marginLeft: 6,
	},
	rowContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},

});

export default styles;
