import { Helpers } from 'library/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	button: {
		width: 74,
		height: 64,
		alignItems: 'center',
		paddingTop: 15,
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 0.7),
	},
	circle: {
		left: -1.5,
		top: -1,
		backgroundColor: '#005670',
		width: 2.54,
		height: 2.54,
		borderRadius: 1.27,
		alignSelf: 'center',
	},
});

export default styles;
