import { Helpers } from 'library/theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	button: {
		width: 72,
		height: 64,
		alignItems: 'center',
		justifyContent: 'center',
		...Helpers.boxShadow('rgb(223, 227, 229)', { x: 0, y: 4 }, 50, 0.3, 0.7),
	},
});

export default styles;
