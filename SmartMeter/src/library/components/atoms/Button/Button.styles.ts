import { Helpers } from 'library/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		height: 52,
		backgroundColor: '#005676',
		borderRadius: 15,
		alignSelf: 'stretch',
		justifyContent: 'center',
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 0.7),
	},
	text: {
		lineHeight: 21,
		fontWeight: '400',
		alignSelf: 'center',
		color: 'white',
	},
});

export default styles;
