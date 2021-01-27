import { Helpers } from 'library/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFFFFF',
		paddingHorizontal: 18,
		paddingVertical: 20,
		borderRadius: 10,
		...Helpers.boxShadow('rgba(0, 0, 0, 0.04)', { x: 10, y: 20 }, 100, 0.1, 3),
	},
	header: {
		color: '#747474',
		marginRight: 6,
	},
	headerWithIcon: {
		flexDirection: 'row',
		marginBottom: 16,
		alignItems: 'center',
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
	rowContainer: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
	},

});

export default styles;
