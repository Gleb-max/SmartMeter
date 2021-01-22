import { StyleSheet } from 'react-native';
import { Helpers } from 'library/theme';

const styles = StyleSheet.create({
	container: {
		alignSelf: 'flex-start',
	},
	dropdown: {
		backgroundColor: '#FFFFFF',
		borderWidth: 0,
		alignSelf: 'baseline',
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 3),
	},
	list: {
		borderWidth: 0,
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 3),
	},
	IconArrowUp: {
		transform: [{ rotate: '180deg' }],
	},
	itemStyle: {
		backgroundColor: '#FFFFFF',
		justifyContent: 'flex-start',
	},
	textStyle: {
		fontFamily: 'Gilroy-Medium',
		fontStyle: 'normal',
		fontSize: 15,
		lineHeight: 18,
		color: '#000000',
	},
});

export default styles;
