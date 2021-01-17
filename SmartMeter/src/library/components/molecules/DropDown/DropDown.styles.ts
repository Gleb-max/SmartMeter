import { StyleSheet } from 'react-native';
import { Helpers } from 'library/theme';

const styles = StyleSheet.create({
	container: {
		alignSelf: 'flex-start',
	},
	dropdown: {
		borderWidth: 0,
		alignSelf: 'flex-start',
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 3),
	},
	list: {
		borderWidth: 0,
		// alignSelf: 'flex-start',
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 3),
	},
	IconArrowUp: {
		transform: [{ rotate: '180deg' }],
	},
	itemStyle: {
		justifyContent: 'flex-start',
	},
});

export default styles;
